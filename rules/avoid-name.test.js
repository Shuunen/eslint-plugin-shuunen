const rule = require('./avoid-name')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run('avoid-name', rule, {
  valid: ['bar', 'baz'],
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
})
