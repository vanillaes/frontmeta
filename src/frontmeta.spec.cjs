const test = require('tape');
const frontmeta = require('../index.cjs');
const basic = require('./__test__/basic.json');

test('BasicUsage', (t) => {
  const input = basic.input.join('\n');
  const expect = basic.expect;
  const result = frontmeta(input);

  t.deepEqual(result, expect);

  t.end();
});
