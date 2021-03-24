/**
 *  This function takes a finite string and returns
 *  the first non repeating unique character.
 *  Assume input string is all lowercase
 * @param {String} str
 */
function solution (str) {
  if (!(typeof str === 'string')) {
    throw new Error('Please pass a string')
  }
  var charIndexedByCount = {};
  [...str].forEach(c => {
    charIndexedByCount[c] = (isNaN(charIndexedByCount[c]) ? 1 : charIndexedByCount[c] + 1)
  })
  // find the first non repeating unique character.
  for (const key of Object.keys(charIndexedByCount)) {
    if (charIndexedByCount[key] === 1) { // the character was only found once
      return key
    }
  }
  return ''
}

module.exports = solution
