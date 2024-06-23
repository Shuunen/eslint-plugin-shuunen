const globals = require('globals')
const { loadRules } = require('./rules/utils/load-rules.js')
const { name, version } = require('./package.json') // @ts-expect-error missing types
const unicorn = require('eslint-plugin-unicorn').configs['flat/all'] // @ts-expect-error missing types
const perfectionist = require('eslint-plugin-perfectionist/configs/recommended-natural')
const eslint = require('@eslint/js').configs.all // @ts-expect-error missing types
const vue = require('eslint-plugin-vue').configs['flat/recommended'] // @ts-expect-error missing types
const tailwind = require('eslint-plugin-tailwindcss').configs['flat/recommended']

const rules = loadRules()

const shortName = 'shuunen'

const myRules = Object.fromEntries(Object.keys(rules).map(id => [`${shortName}/${id}`, 'error']))

const ignores = [
  '**/node_modules',
  '**/coverage',
  '**/build',
  '**/dist',
  '**/static',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/tmp',
  '**/.tmp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.next',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
]

/** @type {import('eslint').ESLint.Plugin} */
const shuunen = {
  meta: {
    name,
    version,
  },
  rules: {
    ...rules,
  },
}

/** @type {Record<'base' | 'browser' | 'node' | 'vue', import('eslint').Linter.FlatConfig[]>} */
const configs = {
  base: [
    {
      ignores,
      name: `${shortName}/base/ignores`,
    },
    {
      // files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts', '**/*.d.ts', '**/*.tsx'], // needed ?
      name: `${shortName}/base`,
      plugins: {
        ...eslint.plugins,
        ...unicorn.plugins,
        ...perfectionist.plugins,
        shuunen,
      },
      rules: {
        ...eslint.rules,
        'capitalized-comments': 'off', // 🟨 useless
        'comma-dangle': ['error', 'always-multiline'], // 💚 trailing commas
        curly: ['error', 'multi'], // 💚 only on multi
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 💚 prefer function declaration
        'no-inline-comments': 'off', // 🟨 useless
        'no-ternary': 'off', // � well written ternaries are fine
        'no-undefined': 'off', // � rule is understandable but seems too annoying
        'one-var': 'off', // 🟨 useless
        'sort-imports': 'off', // 🟨 not needed, vscode & biome does this
        'sort-keys': 'off', // 🔴 perfectionist does this
        ...perfectionist.rules,
        'perfectionist/sort-imports': 'off', // 🟨 not needed, vscode & biome does this
        ...unicorn.rules,
        'unicorn/prefer-string-replace-all': 'off', // 🔴 not well supported
        ...myRules,
      },
    },
  ],
  browser: [
    {
      languageOptions: {
        globals: {
          ...globals.browser,
        },
      },
      name: `${shortName}/browser`,
    },
    ...tailwind,
    {
      name: `${shortName}/browser/tailwind-settings`,
      settings: {
        tailwindcss: {
          whitelist: [String.raw`app\-[a-z-]+`],
        },
      },
    },
  ],
  node: [
    {
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
      name: `${shortName}/node`,
    },
  ],
  vue: [
    ...vue,
    {
      rules: {
        'vue/attributes-order': 'off', // styling, perfectionist does this
        'vue/first-attribute-linebreak': 'off', // styling
        'vue/html-closing-bracket-newline': 'off', // styling
        'vue/html-indent': 'off', // styling
        'vue/max-attributes-per-line': 'off', // styling
      },
    },
  ],
}

const plugin = { ...shuunen, configs }

module.exports = plugin
