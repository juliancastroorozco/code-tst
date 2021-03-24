/**
 *  Returns an array based on the pageNumber and itemsPerPage from pageData
 * @param {number} pageNumber
 * @param {number} itemsPerPage
 * @param {Array<string>} pageData
 */
function solution (pageNumber, itemsPerPage, pageData) {
  if (!Number.isInteger(pageNumber)) {
    throw new Error('Please pass a valid page number')
  }
  if (!Number.isInteger(itemsPerPage)) {
    throw new Error('Please pass a valid number of items')
  }
  if (!Array.isArray(pageData)) {
    throw new Error('Please pass a valid array as page data')
  }
  pageNumber = pageNumber < 1 ? 1 : pageNumber
  const pageDataPaginated = pageData.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)
  return pageDataPaginated.length ? pageDataPaginated : null
}

const data = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

module.exports = { solution, data }
