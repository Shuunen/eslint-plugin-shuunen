'use strict'

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  create(context) {
    return {
      // biome-ignore lint/style/useNamingConvention: <explanation>
      Identifier(node) {
        if (node.name === 'foo') {
          context.report({
            node,
            messageId: 'avoidName',
            data: {
              name: 'foo',
            },
          })
        }
      },
    }
  },
  meta: {
    type: 'suggestion',
    docs: {
      description: 'disallow variables named `foo`, it is so old school',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      avoidName: "Avoid using variables named '{{ name }}'",
    },
  },
}
