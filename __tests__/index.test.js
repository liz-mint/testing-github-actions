const { slice } = require('../src/index.js');

// BEGIN
describe('testing function slice()', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const table = [
    {
      coll: arr,
      begin: undefined,
      end: undefined,
      expected: arr
    },
    {
      coll: arr,
      begin: 3,
      end: undefined,
      expected: [4, 5, 6]
    },
    {
      coll: arr,
      begin: 1,
      end: 4,
      expected: [2, 3, 4]
    },
    {
      coll: arr,
      begin: -4,
      end: -2,
      expected: [3, 4]
    },
        {
      coll: [],
      begin: 1,
      end: 2,
      expected: []
    }
  ];

  test.each(table)('basic functionality slice($coll, $begin, $end)', ({ coll, begin, end, expected }) => {
    expect(slice(coll, begin, end)).toStrictEqual(expected);
  });
  test('dont mutate the original array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const copy = [...arr];
    slice(arr, 3);
    expect(arr).toStrictEqual(copy);
  });
});
// END
