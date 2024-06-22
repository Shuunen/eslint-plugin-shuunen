const eslintrc = require('@eslint/eslintrc')

// @ts-expect-error type issue
const { globals } = eslintrc.Legacy.environments.get('es2024')

module.exports = {
  languageOptions: {
    globals,
  },
}
