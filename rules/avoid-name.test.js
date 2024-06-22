const rule = require('./avoid-name')
const { RuleTester } = require('eslint')

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
