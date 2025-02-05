import { expect, it } from 'vitest'
import { capNesting } from './rules/utils/objects.js'

it('index - check exported value', async () => {
  const index = await import('./index.js')
  const result = capNesting(index.default, 6)
  if (!result) throw new Error('No result')
  // @ts-expect-error missing types
  result.meta.version = '0.0.0'
  expect(result).toMatchSnapshot()
})
