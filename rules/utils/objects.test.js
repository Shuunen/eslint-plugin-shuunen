/* eslint-disable no-magic-numbers */
/* eslint-disable unicorn/no-null */
/* eslint-disable id-length */
import { expect, it } from 'vitest'
import { capNesting } from './objects'

const maxLevel = 3

it('capNesting A - Simple object', () => {
  const deepObject = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: 'too deep',
            },
          },
        },
      },
    },
  }
  expect(capNesting(deepObject, maxLevel)).toMatchInlineSnapshot(`
    {
      "a": {
        "b": {
          "c": "...",
        },
      },
    }
  `)
})

it('capNesting B - Complex object', () => {
  const deepObject = {
    a: {
      b: {
        c: {
          d: {
            e: {
              f: 'too deep',
            },
          },
        },
        cNull: null,
        cValue: 'value',
      },
      bArray: [1, 2, 3],
      bNull: null,
      bValue: 'value',
    },
    g: {
      h: {
        i: {
          j: {
            k: {
              l: 'too deep',
            },
          },
        },
      },
    },
  }
  expect(capNesting(deepObject, maxLevel)).toMatchSnapshot()
})
