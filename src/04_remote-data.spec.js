const solution = require('./04_remote-data')
var got = require('got')

test('all users have been accounted for', async () => {
  // Arrange
  const expected = 10

  // Act
  const actual = await solution()

  // Assert
  expect(actual.length).toBe(expected)
})

test('2 users have correct completed count', async () => {
  // mock the api response to give incomplete data
  jest.mock('got')
  got.get = jest.fn().mockReturnValueOnce({
    json: function () {
      return [{
        id: 1,
        username: 'Leanne'
      },
      {
        id: 2,
        username: 'James'
      }]
    }
  }).mockReturnValueOnce({
    json: function () {
      return [{
        userId: 1,
        completed: true
      },
      {
        userId: 4,
        completed: true
      }]
    }
  })
  // Arrange
  const expected = [
    {
      username: 'Leanne',
      completed: 1
    },
    {
      username: 'James',
      completed: 0
    }
  ]

  // Act
  const actual = await solution()

  // Assert
  expect(actual).toStrictEqual(expected)
})

test('user id doesn\'t match todo user', async () => {
  // mock the api response to give incomplete data
  jest.mock('got')
  got.get = jest.fn().mockReturnValueOnce({
    json: function () {
      return [{
        id: 1,
        username: 'Leanne'
      }]
    }
  }).mockReturnValueOnce({
    json: function () {
      return [{
        userId: 2,
        completed: false
      }]
    }
  })
  // Arrange
  const expected = [
    {
      username: 'Leanne',
      completed: 0
    }
  ]

  // Act
  const actual = await solution()

  // Assert
  expect(actual).toStrictEqual(expected)
})
