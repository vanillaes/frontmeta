const test = require('tape');
const FrontMeta = require('frontmeta');
const basic = require('./__test__/basic.json');

test('BasicUsage', (t) => {
  const input = basic.input.join('\n');
  const expect = basic.expect;
  const result = FrontMeta.parse(input);

  t.deepEqual(result, expect);

  t.end();
});
