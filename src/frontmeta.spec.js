/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import frontmeta from '../index.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const basic = require('./__test__/basic.json');

test('Basic Usage', (t) => {
  const input = basic.input.join('\n');
  const expect = basic.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});
