/**
 * @typedef {object} Document
 * @property {{[key: string]: string}} [meta] - a dictionary representing the document metadata
 * @property {string} [body] - the document body
 */

/**
 * Stringify takes a FrontMeta document object and returns FrontMatter
 * @param {Document} document a FrontMeta document object
 * @returns {string | undefined} the FrontMeta string
 */
export function stringify (document) {
  if (!document?.meta || Object.keys(document?.meta).length === 0) {
    return document.body ? document.body : ''
  }

  let output = '---\n'

  for (const [key, value] of Object.entries(document.meta)) {
    output += `${key}: ${value}\n`
  }

  output += '---\n'
  if (document.body) {
    output += document.body
  }

  return output
}
