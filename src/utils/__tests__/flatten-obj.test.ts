import computePathsToNestedAttributes, { defaultPathFormatter } from 'utils/flatten-obj'

it('default path formatter combines path and connects with a .', () => {
  const path = ['value', 'value2', 'depth3']

  expect(defaultPathFormatter(path)).toBe('value.value2.depth3')

  const path2 = <string[]>[]

  expect(defaultPathFormatter(path2)).toBe('')

  const path3 = ['a']

  expect(defaultPathFormatter(path3)).toBe('a')
})

it('correctly flattens a nested object', () => {
  const object = {
    a: {
      b: [
        {
          c: 1,
        },
        {}, //not returned cuz empty
        [], //not returend cuz empty
        [true],
        2,
      ],
      d: 3,
      e: null,
      f: 'hi',
      g: {
        h: -1,
      },
    },
    i: undefined,
    j: true,
    k: [], //empty value so shouldn't be returned
    l: {}, // same
  }

  expect(computePathsToNestedAttributes(object)).toEqual({
    'a.b.0.c': 1,
    'a.b.3.0': true,
    'a.b.4': 2,
    'a.d': 3,
    'a.e': null,
    'a.f': 'hi',
    'a.g.h': -1,
    i: undefined,
    j: true,
  })
})

it('correctly flattens a return a function with nested path', () => {
  const object = {
    a: {
      b: 3,
      c: () => {
        console.log('hi')
      },
      d: [0, [], (x: number) => x],
    },
  }

  const computed = computePathsToNestedAttributes(object)

  expect(typeof computed['a.c']).toBe('function')
  expect(typeof computed['a.d.2']).toBe('function')
})

it('able to supply custom path function to flatten', () => {
  const object = {
    a: {
      b: [
        {
          c: 1,
        },
        2,
      ],
      d: 3,
      e: null,
    },
  }

  expect(computePathsToNestedAttributes(object, nestedPath => nestedPath.join('_'))).toEqual({
    a_b_0_c: 1,
    a_b_1: 2,
    a_d: 3,
    a_e: null,
  })
})

it('able to prepend a base path', () => {
  const object = {
    a: {
      b: [
        {
          c: 1,
        },
        2,
      ],
    },
  }

  expect(computePathsToNestedAttributes(object, defaultPathFormatter, ['i', 'am', 'bass'])).toEqual(
    {
      'i.am.bass.a.b.0.c': 1,
      'i.am.bass.a.b.1': 2,
    }
  )
})

it('array nested path is returned as objects', () => {
  const object = [
    {
      b: [
        {
          c: 1,
        },
        2,
      ],
      d: 3,
      e: null,
      f: 'hi',
      g: {
        h: -1,
      },
    },
    { i: undefined },
    true,
    [1, { a: 20, b: [] }, false, {}, 'hi'],
  ]

  expect(computePathsToNestedAttributes(object)).toEqual({
    '0.b.0.c': 1,
    '0.b.1': 2,
    '0.d': 3,
    '0.e': null,
    '0.f': 'hi',
    '0.g.h': -1,
    '1.i': undefined,
    '2': true,
    '3.0': 1,
    '3.1.a': 20,
    '3.2': false,
    '3.4': 'hi',
  })
})
