import { createRule } from '..'

const name = 'const-enum'

export const rule = createRule({
  create (context) {
    return {
      TSEnumDeclaration (node): void {
        if (node.const === undefined) context.report({
          messageId: name,
          node: node.id,
          fix (fixer) {
            return fixer.insertTextBefore(node, 'const ')
          },
        })
      },
    }
  },
  name,
  meta: {
    docs: {
      description:
        'Enum should always be declared as const',
      recommended: 'warn',
    },
    messages: {
      [name]: 'Prefix enum with const',
    },
    type: 'suggestion',
    schema: [],
    fixable: 'code',
  },
  defaultOptions: [],
})
