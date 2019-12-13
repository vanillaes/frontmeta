/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import frontmeta from '../index.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const basic = require('./__test__/basic.json');
const whitespace1 = require('./__test__/whitespace1.json');

test('Basic Usage', (t) => {
  const input = basic.input.join('\n');
  const expect = basic.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('Whitespace1 - white space before opening dashes is ignored', (t) => {
  const input = whitespace1.input.join('\n');
  const expect = whitespace1.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});
