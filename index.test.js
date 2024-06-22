import { expect, it } from 'vitest'

const index = require('./index')

it('index', () => {
  expect(index).toMatchSnapshot()
})
