const solution = require('./02_get-first-non-repeating-char')

test('Test 1 - "this is the string"', () => {
  expect(solution('this is the string')).toBe('e')
})

test('Test 2 - "persuit is a good place to work"', () => {
  expect(solution('persuit is a good place to work')).toBe('u')
})

test('Test 3 - should throw error for objects', () => {
  // Assert
  expect(() => { solution({}) }).toThrow('Please pass a string')
})

test('Test 4 - "papa" has no unique', () => {
  // Assert
  expect(solution('papa')).toBe('')
})
