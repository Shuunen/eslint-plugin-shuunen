import { ESLintUtils } from '@typescript-eslint/utils'
import type { RunTests } from '@typescript-eslint/utils/dist/ts-eslint'
import { readdirSync, statSync } from 'node:fs'

export const PLUGIN_NAME = 'shuunen'
const PREFIX = `${PLUGIN_NAME}/`
const ROOT_DIR = __dirname // eslint-disable-line unicorn/prefer-module
const ruleTester = new ESLintUtils.RuleTester({ parser: '@typescript-eslint/parser' })

type Rule = ReturnType<typeof createRule>
type Severity = 'error' | 'off' | 'warn'
type EslintConfig = {
  rules: Record<string, Severity>
  plugins: string[]
}
type EslintExport = {
  rules: Record<string, Rule>
  configs: {
    all: EslintConfig
  }
}

const getRuleName = (rule: Rule): string => rule.meta.docs?.url?.replace(PREFIX, '') ?? 'unknown-rule'

export const createRule = ESLintUtils.RuleCreator((name: string) => `${PREFIX}${name}`)

export const testRule = (rule: Rule, tests: RunTests<string, readonly unknown[]>): void => { ruleTester.run(getRuleName(rule), rule, tests) }

export const listRulesNames = (): string[] => {
  const entries = readdirSync(ROOT_DIR)
  return entries.filter((entry) => statSync(`${ROOT_DIR}/${entry}`).isDirectory())
}

// eslint-disable-next-line unicorn/no-array-reduce
export const eslintExport = (): EslintExport => listRulesNames().reduce<EslintExport>((accumulator, name) => {
  // eslint-disable-next-line global-require, unicorn/prefer-module, @typescript-eslint/no-var-requires, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-member-access
  const rule: Rule = require(`./${name}/index.ts`).rule
  accumulator.rules[name] = rule
  accumulator.configs.all.rules[`${PLUGIN_NAME}/${name}`] = 'error'
  return accumulator
}, { rules: {}, configs: { all: { rules: {}, plugins: [PLUGIN_NAME] } } })

