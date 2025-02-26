/* c8 ignore start */
// @ts-nocheck
//
// 8888ba.88ba               888888ba           dP
// 88  `8b  `8b              88    `8b          88
// 88   88   88 dP    dP    a88aaaa8P' dP    dP 88 .d8888b. .d8888b.
// 88   88   88 88    88     88   `8b. 88    88 88 88ooo0d8 Y8ooooo.
// 88   88   88 88.  .88     88     88 88.  .88 88 88.  ...       88
// dP   dP   dP `8888P88     dP     dP `88888P' dP `88888P' `88888P'
// oooooooooooooo~~~~.88~oooooooooooooooooooooooooooooooooooooooooooo
//               d8888P

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const isIterable = object => typeof object?.[Symbol.iterator] === 'function'

// eslint-disable-next-line unicorn/custom-error-definition, no-restricted-syntax
class FixAbortError extends Error {}

const fixOptions = {
  abort() {
    throw new FixAbortError('Fix aborted.')
  },
}

function wrapFixFunction(fix) {
  return fixer => {
    const result = fix(fixer, fixOptions)

    if (isIterable(result))
      try {
        return [...result]
      } catch (error) {
        // eslint-disable-next-line consistent-return
        if (error instanceof FixAbortError) return
        /* c8 ignore next */
        throw error
      }
    return result
  }
}

function reportListenerProblems(problems, context) {
  if (!problems) return
  if (!isIterable(problems))
    // @ts-expect-error re-assigning to a new array
    // biome-ignore lint/style/noParameterAssign: needed
    problems = [problems] // eslint-disable-line no-param-reassign

  for (const problem of problems) {
    if (!problem) continue
    problem.fix &&= wrapFixFunction(problem.fix)
    if (Array.isArray(problem.suggest))
      for (const suggest of problem.suggest) {
        suggest.fix &&= wrapFixFunction(suggest.fix)
        suggest.data = {
          ...problem.data,
          ...suggest.data,
        }
      }
    context.report(problem)
  }
}

// `checkVueTemplate` function will wrap `create` function, there is no need to wrap twice
const wrappedFunctions = new Set()

function reportProblems(create) {
  if (wrappedFunctions.has(create)) return create

  const wrapped = context => {
    const listeners = {}
    const addListener = (selector, listener) => {
      listeners[selector] ??= []
      listeners[selector].push(listener)
    }

    const contextProxy = new Proxy(context, {
      get(target, property, receiver) {
        if (property === 'on')
          return (selectorOrSelectors, listener) => {
            const selectors = Array.isArray(selectorOrSelectors) ? selectorOrSelectors : [selectorOrSelectors]
            for (const selector of selectors) addListener(selector, listener)
          }
        if (property === 'onExit')
          return (selectorOrSelectors, listener) => {
            const selectors = Array.isArray(selectorOrSelectors) ? selectorOrSelectors : [selectorOrSelectors]
            for (const selector of selectors) addListener(`${selector}:exit`, listener)
          }
        return Reflect.get(target, property, receiver)
      },
    })

    for (const [selector, listener] of Object.entries(create(contextProxy) ?? {})) addListener(selector, listener)

    return Object.fromEntries(
      // eslint-disable-next-line no-shadow
      Object.entries(listeners).map(([selector, listeners]) => [
        selector,
        // Listener arguments can be `codePath, node` or `node`
        (...listenerArguments) => {
          for (const listener of listeners) reportListenerProblems(listener(...listenerArguments), context)
        },
      ]),
    )
  }

  wrappedFunctions.add(wrapped)

  return wrapped
}

/** @returns {Promise<import('eslint').Rule.RuleModule>} */
async function loadRule(ruleId) {
  const rule = await import(`../${ruleId}.js`)

  return {
    create: reportProblems(rule.default.create),
    meta: {
      // If there is are, options add `[]` so ESLint can validate that no data is passed to the rule.
      // https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/blob/master/docs/rules/require-meta-schema.md
      schema: [],
      ...rule.default.meta,
      docs: {
        ...rule.default.meta.docs,
      },
    },
  }
}

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

export async function loadRules() {
  const files = fs.readdirSync(path.join(currentDirectory, '..'), { withFileTypes: true }).filter(file => file.isFile() && !file.name.includes('.test.'))

  const entries = await Promise.all(
    files.map(async file => {
      const ruleId = path.basename(file.name, '.js')
      return [ruleId, await loadRule(ruleId)]
    }),
  )

  return Object.fromEntries(entries)
}
