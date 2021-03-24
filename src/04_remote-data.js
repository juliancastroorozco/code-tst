/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const got = require('got')

async function solution () {
  const usersById = (await got.get('https://jsonplaceholder.typicode.com/users').json()).reduce(function (map, user) { // index users by id
    map[user.id] = { username: user.username, completed: 0 }
    return map
  }, {})
  const todos = await got.get('https://jsonplaceholder.typicode.com/todos').json()
  todos.forEach(t => {
    if (!usersById[t.userId]) { // if user of the todo is not found, ignore
      return
    }
    usersById[t.userId].completed += t.completed ? 1 : 0
  })
  return Object.values(usersById)
}

module.exports = solution
