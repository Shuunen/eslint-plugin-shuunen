import { configs } from 'typescript-eslint'
import { shortName } from '../src/constants.js'
const tsEslint = configs.all
//
// ooooo                      .oPYo.               o          o
//   8                        8                               8
//   8   o    o .oPYo. .oPYo. `Yoko. .oPYo. oPYo. o8 .oPYo.  o8P
//   8   8    8 8    8 8oooo8     `8 8    ' 8  `'  8 8    8   8
//   8   8    8 8    8 8.          8 8    . 8      8 8    8   8
//   8   `YooP8 8YooP' `Yolo' `YooP' `YooP' 8      8 8YooP'   8
// ::..:::....8 8 ....::.....::.....::.....:..:::::..8 ....:::..:
// ::::::::ooP'.8 :::::::::::::::::::::::::::::::::::8 ::::::::::
// ::::::::...::..:::::::::::::::::::::::::::::::::::..::::::::::
//
const [base, recommended, all] = tsEslint
/* c8 ignore next 3 */
if (base === undefined) throw new Error('failed to get base from typescript-eslint')
if (recommended === undefined) throw new Error('failed to get recommended from typescript-eslint')
if (all === undefined) throw new Error('failed to get all from typescript-eslint')
/** @type {import('eslint').Linter.Config[]} */
export const typescript = [
  {
    ...base,
    ...recommended,
    ...all,
    // @ts-expect-error type issue
    files: [...recommended.files, '**/*.js', '**/*.cjs'],
    // @ts-expect-error type issue
    languageOptions: {
      ...base.languageOptions,
      ...all.languageOptions,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        project: true,
      },
    },
    name: `${shortName}/typescript`,
    rules: {
      ...base.rules,
      ...recommended.rules,
      ...all.rules,
      '@typescript-eslint/array-type': 'off', // 💚 let use T[] or Array<T>
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'never' }], // 💚 avoid type assertion
      '@typescript-eslint/consistent-type-definitions': 'off', // 🔴 let me use type declaration
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ], // 💚 clean type imports
      // 🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔
      '@typescript-eslint/explicit-function-return-type': 'off', // 💚 let us write no function return types
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 💚 let us write no function return types
      // Note : writing no return type on functions can lead to ts performance issues, would be great to dig this and get some measures
      // 🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔
      '@typescript-eslint/member-ordering': 'off', // 🟨 perfectionist plugin handle this
      // from eslint-config-hardcore : improve default naming conventions from typescript-eslint with stricter rules
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['strictCamelCase'],
          selector: 'default',
        },
        {
          format: ['strictCamelCase', 'StrictPascalCase'],
          selector: ['function', 'import'],
        },
        {
          format: ['StrictPascalCase'],
          selector: ['typeLike', 'enumMember'],
        },
        {
          format: ['PascalCase'],
          prefix: ['is', 'has', 'are', 'can', 'should', 'did', 'will', 'use', 'show'],
          selector: ['variable', 'parameter', 'accessor'],
          types: ['boolean'],
        },
        {
          // eslint-disable-next-line unicorn/no-null
          format: null,
          modifiers: ['requiresQuotes'],
          selector: ['objectLiteralProperty'],
        },
        {
          filter: {
            match: false,
            regex:
              '^(allowfullscreen|allowFullScreen|async|autofocus|autoFocus|autoplay|autoPlay|checked|defaultChecked|contenteditable|contentEditable|controls|default|defer|disabled|draggable|formnovalidate|formNoValidate|hidden|inert|ismap|itemscope|itemScope|loop|multiple|muted|nomodule|noModule|novalidate|noValidate|open|playsinline|playsInline|readonly|readOnly|required|reversed|selected|spellcheck|spellCheck)$',
          },
          format: ['PascalCase'],
          prefix: ['is', 'has', 'are', 'can', 'should', 'did', 'will', 'use', 'show'],
          selector: ['property'],
          types: ['boolean'],
        },
      ],
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1],
          ignoreClassFieldInitialValues: true,
          ignoreDefaultValues: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true,
        },
      ], // 💚 magic numbers are bad, but basic ok are ok
      '@typescript-eslint/prefer-destructuring': 'off', // 🟨 often annoying
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'error',
        {
          allow: ['Document', 'DomContent', 'Element', 'Event', 'HTMLElement', 'Node', 'Window'],
          ignoreInferredTypes: false,
        },
      ],
      'jsdoc/require-param-type': 'off', // 💚 avoid double typing
      'jsdoc/require-returns-type': 'off', // 💚 avoid double typing
    },
  },
  {
    files: ['**/*.test.ts'],
    name: `${shortName}/typescript/tests-overrides`,
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off', // 🟨 mess with snaps
    },
  },
  {
    files: ['**/*.js'],
    name: `${shortName}/typescript/js-overrides`,
    rules: {
      '@typescript-eslint/explicit-member-accessibility': 'off', // 🟨 cannot deal with it in js
      '@typescript-eslint/prefer-readonly-parameter-types': 'off', // 🟨 cannot deal with it in js
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off', // 🟨 cannot deal with it in js
    },
  },
]
