import { RuleTester } from 'eslint'
import rule from './avoid-name.js'

const ruleTester = new RuleTester()

ruleTester.run('avoid-name', rule, {
  invalid: [
    {
      code: 'foo',
      errors: [
        {
          messageId: 'avoidName',
        },
      ],
    },
  ],
  valid: ['bar', 'baz'],
})
