const solution = require('./01_convert-object-to-array')

const generateData = () => {
  const expected = []
  const input = {}

  for (let index = 0; index < 100; index++) {
    const val = Math.random()
    input[`prop_${index}`] = val
    expected.push(val)
  }

  return { input, expected }
}

test('should convert an object into array of values', () => {
  // Arrange
  const input = { foo: 123, bar: 456, baz: 789 }
  const expected = [123, 456, 789]

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should convert a dynamically created object to array', () => {
  // Arrange
  const { input, expected } = generateData()

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should convert a empty object to array', () => {
  // Arrange
  const input = {}
  const expected = []

  // Act
  const actual = solution(input)

  // Assert
  expect(actual).toEqual(expected)
})

test('should throw error for numbers', () => {
  // Assert
  expect(() => { solution(0) }).toThrow('Please pass an Object')
})

test('should throw error for arrays', () => {
  // Assert
  expect(() => { solution([]) }).toThrow('Please pass an Object')
})
