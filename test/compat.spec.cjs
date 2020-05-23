const test = require('tape');
const FrontMeta = require('@vanillaes/frontmeta');
const basic = require('./__test__/basic.json');

test('BasicUsage', (t) => {
  const input = basic.frontmeta.join('\n');
  const expect = basic.json;
  const actual = FrontMeta.parse(input);

  t.deepEqual(actual, expect);

  t.end();
});
