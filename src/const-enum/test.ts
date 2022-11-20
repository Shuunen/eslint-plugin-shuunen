import { rule } from '.'
import { testRule } from '..'

testRule(rule, {
  valid: [{
    code: 'const enum toto { one }',
  },
  {
    code: 'export const enum tata { two }',
  },
  ],
  invalid: [
    {
      code: 'export enum titi {}',
      errors: [{ messageId: 'const-enum' }],
      output: 'export const enum titi {}',
    },
    {
      code: 'enum tutu {}',
      errors: [{ messageId: 'const-enum' }],
      output: 'const enum tutu {}',
    },
  ],
})
