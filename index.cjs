'use strict';

/* eslint-disable no-new-func */
/**
 * Parse a file that contains FrontMeta
 *
 * @param {string} contents the the document contents
 * @returns an object containing 'meta' and 'body' fields
 */
function frontmeta (contents = '') {
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

  while ((matches = lexer.exec(contents)) !== null) {
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
      body = contents;
      break;
    }

    if (isBody) {
      body = contents.substr(lexer.lastIndex, contents.length - 1);
      break;
    }
  }

  return { meta, body };
}

module.exports = frontmeta;
