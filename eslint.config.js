// @ts-check
import unicorn from 'eslint-plugin-unicorn'
import eslint from '@eslint/js'
import tsLint from 'typescript-eslint'
import globals from 'globals'

export default tsLint.config(
  {
    ignores: ['node_modules/*', 'coverage/*', 'build/*', 'dist/*', 'static/*'],
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  // @ts-expect-error type issue
  unicorn.configs['flat/all'],
  ...tsLint.configs.recommended,
)
