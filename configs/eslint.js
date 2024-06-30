// @ts-expect-error missing types
const { plugins, rules } = require('@eslint/js').configs.all
//
// :::===== :::===  :::      ::: :::= === :::====
// :::      :::     :::      ::: :::===== :::====
// ======    =====  ===      === ========   ===
// ===          === ===      === === ====   ===
// ======== ======  ======== === ===  ===   ===
//
/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  plugins,
  rules: {
    ...rules,
    'capitalized-comments': 'off', // 🟨 useless
    'comma-dangle': ['error', 'always-multiline'], // 💚 trailing commas
    complexity: ['error', { max: 9 }],
    curly: ['error', 'multi'], // 💚 only on multi
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // 💚 prefer function declaration
    'no-continue': 'off', // 🟨 well written continues are fine
    'no-inline-comments': 'off', // 🟨 useless styling
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1], ignoreClassFieldInitialValues: true, ignoreDefaultValues: true }], // 💚 magic numbers are bad, but basic ok are ok
    'no-restricted-syntax': [
      'error',
      {
        message: 'Avoid using Class, just use good old unit-testable functions :)',
        selector: 'ClassDeclaration',
      },
      {
        message: "Don't specify return type on function",
        selector: 'FunctionDeclaration[returnType]',
      },
      {
        message: "Don't specify return type on function",
        selector: 'FunctionExpression[returnType]',
      },
    ],
    'no-ternary': 'off', // 🟨 well written ternaries are fine
    'no-undefined': 'off', // 🟨 rule is understandable but seems too annoying
    'no-void': ['error', { allowAsStatement: true }], // 💚 void is fine in this case, like void myAsyncFunctionIDontWantToAwait()
    'one-var': 'off', // 🟨 useless
    'prefer-destructuring': 'off', // 🟨 often annoying
    'sort-imports': 'off', // 🟨 not needed, vscode & biome does this
    'sort-keys': 'off', // 🔴 perfectionist does this
  },
}
module.exports = config
