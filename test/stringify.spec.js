/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import { stringify } from 'frontmeta';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const basic = require('./__test__/basic.json');
const noMeta = require('./__test__/no-meta.json');
const noBody = require('./__test__/no-body1.json');

test('BasicUsage', (t) => {
  const input = basic.json;
  const expect = basic.frontmeta.join('\n');
  const actual = stringify(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('NoMetadata - no meta data is present', (t) => {
  const input = noMeta.json;
  const expect = noMeta.frontmeta.join('\n');
  const actual = stringify(input);

  t.deepEqual(actual, expect);

  t.end();
});

test('NoBody - if there is no body return just the metadata', (t) => {
  const input = noBody.json;
  const expect = noBody.frontmeta.join('\n');
  const result = stringify(input);

  t.deepEqual(result, expect);

  t.end();
});
