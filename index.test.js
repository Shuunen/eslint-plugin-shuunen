import { expect, it } from 'bun:test'
import { capNesting } from './rules/utils/objects.js'

it('index - check exported value', async () => {
  const index = await import('./index.js')
  const result = capNesting(index.default, 6)
  // @ts-expect-error missing types
  result.meta.version = '0.0.0'
  expect(result).toMatchSnapshot()
})
