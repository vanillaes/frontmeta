/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import { parse } from 'frontmeta';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const basic = require('./__test__/basic.json');
const noMeta = require('./__test__/no-meta.json');
const noBody1 = require('./__test__/no-body1.json');
const noBody2 = require('./__test__/no-body1.json');
const boundary1 = require('./__test__/boundary1.json');
const boundary2 = require('./__test__/boundary2.json');
const whitespace1 = require('./__test__/whitespace1.json');
const whitespace2 = require('./__test__/whitespace2.json');
const whitespace3 = require('./__test__/whitespace3.json');
const whitespace4 = require('./__test__/whitespace4.json');
const whitespace5 = require('./__test__/whitespace5.json');
const whitespace6 = require('./__test__/whitespace6.json');
const whitespace7 = require('./__test__/whitespace7.json');
const whitespace8 = require('./__test__/whitespace8.json');

test('BasicUsage', (t) => {
  const input = basic.frontmeta.join('\n');
  const expect = basic.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('NoMetadata - if there is no metadata set body to the contents', (t) => {
  const input = noMeta.frontmeta.join('\n');
  const expect = noMeta.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('NoBody1 - if there is no body return just the metadata', (t) => {
  const input = noBody1.frontmeta.join('\n');
  const expect = noBody1.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('NoBody2 - if there is no body except a trailing newline return just the metadata', (t) => {
  const input = noBody2.frontmeta.join('\n');
  const expect = noBody2.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Boundary1 - the opening boundary should have 3 or more dashes', (t) => {
  const input = boundary1.frontmeta.join('\n');

  try {
    parse(input);
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Boundary2 - the closing boundary should have 3 or more dashes', (t) => {
  const input = boundary2.frontmeta.join('\n');

  try {
    parse(input);
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});

test('Whitespace1 - white space before opening dashes is ignored', (t) => {
  const input = whitespace1.frontmeta.join('\n');
  const expect = whitespace1.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace2 - white space after opening dashes but before newline is ignored', (t) => {
  const input = whitespace2.frontmeta.join('\n');
  const expect = whitespace2.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace3 - whitespace before key is ignored', (t) => {
  const input = whitespace3.frontmeta.join('\n');
  const expect = whitespace3.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace4 - whitespace after key but before : is ignored', (t) => {
  const input = whitespace4.frontmeta.join('\n');
  const expect = whitespace4.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace5 - whitespace after : but before value is ignored', (t) => {
  const input = whitespace5.frontmeta.join('\n');
  const expect = whitespace5.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace6 - whitespace after value but before newline is ignored', (t) => {
  const input = whitespace6.frontmeta.join('\n');
  const expect = whitespace6.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace7 - whitespace before closing dashes is ignored', (t) => {
  const input = whitespace7.frontmeta.join('\n');
  const expect = whitespace7.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('Whitespace8 - whitespace after closing dashes but before newline is ignored', (t) => {
  const input = whitespace8.frontmeta.join('\n');
  const expect = whitespace8.json;
  const actual = parse(input);

  t.deepEqual(actual, expect);

  t.end();
});
