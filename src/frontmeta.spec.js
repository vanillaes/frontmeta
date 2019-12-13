/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import frontmeta from '../index.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const basic = require('./__test__/basic.json');
const boundary1 = require('./__test__/boundary1.json');
const boundary2 = require('./__test__/boundary2.json');
const whitespace1 = require('./__test__/whitespace1.json');
const whitespace2 = require('./__test__/whitespace2.json');
const whitespace3 = require('./__test__/whitespace3.json');
const whitespace4 = require('./__test__/whitespace4.json');
const whitespace5 = require('./__test__/whitespace5.json');
const whitespace6 = require('./__test__/whitespace6.json');

test('Basic Usage', (t) => {
  const input = basic.input.join('\n');
  const expect = basic.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('boundary1 - the opening boundary should have 3 or more dashes', (t) => {
  const input = boundary1.input.join('\n');

  try {
    frontmeta(input);
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('boundary2 - the closing boundary should have 3 or more dashes', (t) => {
  const input = boundary2.input.join('\n');

  try {
    frontmeta(input);
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Whitespace1 - white space before opening dashes is ignored', (t) => {
  const input = whitespace1.input.join('\n');
  const expect = whitespace1.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('Whitespace2 - white space after opening dashes but before newline is ignored', (t) => {
  const input = whitespace2.input.join('\n');
  const expect = whitespace2.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('Whitespace3 - whitespace before key is ignored', (t) => {
  const input = whitespace3.input.join('\n');
  const expect = whitespace3.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('Whitespace4 - whitespace after key but before : is ignored', (t) => {
  const input = whitespace4.input.join('\n');
  const expect = whitespace4.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('Whitespace5 - whitespace after : but before value is ignored', (t) => {
  const input = whitespace5.input.join('\n');
  const expect = whitespace5.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});

test('Whitespace6 - whitespace after value but before newline is ignored', (t) => {
  const input = whitespace6.input.join('\n');
  const expect = whitespace6.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});
