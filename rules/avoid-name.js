/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  create(context) {
    return {
      // biome-ignore lint/style/useNamingConvention: <explanation>
      Identifier(node) {
        if (node.name === 'foo')
          context.report({
            data: {
              name: 'foo',
            },
            messageId: 'avoidName',
            node,
          })
      },
    }
  },
  meta: {
    docs: {
      description: 'disallow variables named `foo`, it is so old school',
      recommended: true,
    },
    fixable: 'code',
    messages: {
      avoidName: "Avoid using variables named '{{ name }}'",
    },
    schema: [],
    type: 'suggestion',
  },
}
