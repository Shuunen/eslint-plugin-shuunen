import { expect, it } from 'vitest'

const { capNesting } = require('./rules/utils/objects')
const index = require('./index.cjs')

it('index - check exported value', () => {
  const result = capNesting(index, 6)
  if (!result) throw new Error('No result')
  // @ts-expect-error missing types
  result.meta.version = '0.0.0'
  expect(result).toMatchSnapshot()
})
