/* eslint-disable no-new-func */
/**
 * Parse a file that contains FrontMeta
 *
 * @param {string} frontmeta the FontMeta
 * @returns an object containing 'meta' and 'body' fields
 */
export function parse (frontmeta = '') {
  const meta = {};
  let body = '';

  let matches = [];
  let match = '';
  let state = 0;
  let dashes = 0;
  let noMeta = false;
  let isMeta = false;
  let isBody = false;
  let key = '';
  let value = '';

  const lexer = RegExp(/-|:|\r\n|\n|\r|\s|[^:\s\r\n]+/y);

  while ((matches = lexer.exec(frontmeta)) !== null) {
    match = matches[0];

    switch (state) {
      case 0: // start of the file
        switch (true) {
          case match === '-':
            dashes++;
            state = 1;
            break;
          case /^(\s)$/.test(match):
            state = 0;
            break;
          default:
            noMeta = true;
            break;
        }
        break;
      case 1: // dash marker
        switch (true) {
          case match === '-':
            dashes++;
            state = 1;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            if (dashes < 3) {
              throw Error('ERR: Meta boundary must have at least 3 dashes');
            }
            if (!isMeta) {
              isMeta = true;
              state = 2;
            } else {
              isBody = true;
              state = 5;
            }
            dashes = 0;
            break;
          default:
            break;
        }
        break;
      case 2: // meta-key
        switch (true) {
          case match === ':':
            state = 3;
            break;
          case /^(\s)$/.test(match):
            state = 2;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            throw Error('ERR: Broken key:value pair');
          default:
            key += match;
            state = 2;
            break;
        }
        break;
      case 3: // meta-value
        switch (true) {
          case (value === '' && /^(\s)$/.test(match)):
            state = 3;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            state = 1;
            meta[key] = value.trimRight();
            key = '';
            value = '';
            break;
          default:
            state = 3;
            value += match;
            break;
        }
        break;
    }

    if (noMeta) {
      body = frontmeta;
      break;
    }

    if (isBody) {
      body = frontmeta.substr(lexer.lastIndex, frontmeta.length - 1);
      break;
    }
  }

  return { meta, body };
}

/**
 * Stringify takes a FrontMeta document object and returns FrontMatter
 *
 * @param {Object} document a FrontMeta document object
 * @returns {string} the FrontMeta string
 */
export function stringify (document) {
  if (!document.meta || Object.keys(document.meta).length === 0) { return document.body; }
  
  let output = '---\n';
  const metaKeys = Object.keys(document.meta);
  metaKeys.forEach((key) => {
    output += `${key}: ${document.meta[key]}\n`;
  });
  output += '---\n';
  if (document.body) {
    output += document.body;
  }

  return output;
}

export default { parse, stringify };
