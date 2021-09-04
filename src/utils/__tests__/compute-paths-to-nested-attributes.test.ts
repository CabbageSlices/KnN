import computePathsToNestedAttributes, {
  defaultPathFormatter,
} from 'utils/compute-paths-to-nested-attributes'

it('default path formatter combines path and connects with a -', () => {
  const path = ['value', 'value2', 'depth3']

  expect(defaultPathFormatter(path)).toBe('value-value2-depth3')

  const path2 = <string[]>[]

  expect(defaultPathFormatter(path2)).toBe('')

  const path3 = ['a']

  expect(defaultPathFormatter(path3)).toBe('a')
})

it('correctly generates the nested path to each attribute inside a nested object', () => {
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
      f: 'hi',
      g: {
        h: -1,
      },
    },
    i: undefined,
    j: true,
  }

  expect(computePathsToNestedAttributes(object)).toEqual({
    a: {
      b: [
        {
          c: 'a-b-0-c',
        },
        'a-b-1',
      ],
      d: 'a-d',
      e: 'a-e',
      f: 'a-f',
      g: {
        h: 'a-g-h',
      },
    },
    i: 'i',
    j: 'j',
  })
})

it('able to supply custom path function to generate paths', () => {
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
      f: 'hi',
      g: {
        h: -1,
      },
    },
    i: undefined,
    j: true,
  }

  expect(computePathsToNestedAttributes(object, nestedPath => nestedPath.join('.'))).toEqual({
    a: {
      b: [
        {
          c: 'a.b.0.c',
        },
        'a.b.1',
      ],
      d: 'a.d',
      e: 'a.e',
      f: 'a.f',
      g: {
        h: 'a.g.h',
      },
    },
    i: 'i',
    j: 'j',
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
      d: 3,
      e: null,
      f: 'hi',
      g: {
        h: -1,
      },
    },
    i: undefined,
    j: true,
  }

  expect(computePathsToNestedAttributes(object, defaultPathFormatter, ['i', 'am', 'bass'])).toEqual(
    {
      a: {
        b: [
          {
            c: 'i-am-bass-a-b-0-c',
          },
          'i-am-bass-a-b-1',
        ],
        d: 'i-am-bass-a-d',
        e: 'i-am-bass-a-e',
        f: 'i-am-bass-a-f',
        g: {
          h: 'i-am-bass-a-g-h',
        },
      },
      i: 'i-am-bass-i',
      j: 'i-am-bass-j',
    }
  )
})

it('correctly generates the nested path to each attribute inside an array', () => {
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
    [1, { a: 20 }, false, 'hi'],
  ]

  expect(computePathsToNestedAttributes(object)).toEqual([
    {
      b: [
        {
          c: '0-b-0-c',
        },
        '0-b-1',
      ],
      d: '0-d',
      e: '0-e',
      f: '0-f',
      g: {
        h: '0-g-h',
      },
    },
    {
      i: '1-i',
    },
    '2',
    ['3-0', { a: '3-1-a' }, '3-2', '3-3'],
  ])
})
