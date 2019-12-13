/* eslint-disable no-new-func */
/**
 * Parse a file that contains FrontMeta
 *
 * @param {string} contents the the document contents
 * @returns an object containing 'meta' and 'body' fields
 */
export default function FrontMeta (contents = '') {
  const meta = {};
  let body = '';

  let matches = [];
  let match = '';
  let state = 0;
  let dashes = 0;
  let isMeta = false;
  let isBody = false;
  let key = '';
  let value = '';

  const lexer = RegExp(/-|:|\r\n|\n|\r|\s|[^:\r\n]+/y);

  while ((matches = lexer.exec(contents)) !== null) {
    match = matches[0];

    switch (state) {
      case 0: // start of the file
        switch (true) {
          case match === '-':
            dashes++;
            state = 1;
            break;
          default:
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
              throw Error("ERR: Meta boundary must have at least 3 dashes")
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
          case /^(\r\n|\n|\r|\s)$/.test(match):
            state = 2;
            break;
          default:
            key += match;
            state = 2;
            break;
        }
        break;
      case 3: // meta-value
        switch (true) {
          case /^(\r\n|\n|\r)$/.test(match):
            state = 1;
            meta[key] = value;
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

    if (isBody) {
      body = contents.substr(lexer.lastIndex, contents.length - 1);
      break;
    }
  }

  return { meta, body };
}
