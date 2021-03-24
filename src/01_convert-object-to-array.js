/**
 * This function returns the values of the input object as an array
 * @param {object} obj
 */
function solution (obj) {
  if (!obj || !(obj instanceof Object) || obj.constructor !== Object) {
    throw new Error('Please pass an Object')
  }
  return Object.values(obj)
}

module.exports = solution
