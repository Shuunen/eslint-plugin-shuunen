import { expect, it } from 'vitest'

const index = require('./index')

it('index', () => {
  const text = JSON.stringify(index, undefined, 2)
  const result = text.replace(/"version": "[^"]+"/, '"version": "0.0.0"')
  expect(result).toMatchSnapshot()
})
