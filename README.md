[![GitHub Releases](https://img.shields.io/github/release/vanillaes/frontmeta.svg)](https://github.com/vanillaes/frontmeta/releases)
[![NPM Release](https://img.shields.io/npm/v/frontmeta.svg)](https://www.npmjs.com/package/frontmeta)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillaes/frontmeta/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/frontmeta/workflows/Latest/badge.svg)](https://github.com/vanillaes/frontmeta/actions)
[![Release Status](https://github.com/vanillaes/frontmeta/workflows/Release/badge.svg)](https://github.com/vanillaes/frontmeta/actions)

# FrontMeta

A fast, simple, frontmatter `key: value` parser

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible

## Installation

```sh
npm install frontmeta
```

```javascript
import frontmeta from 'frontmeta';
```

## frontmeta()

Takes a document string and extracts the frontmeta metadata

### Arguments

```frontmeta(contents)```

- contents - a string representing the document contents

```
---
key1:value1
key2:value2
---
This is the document body.
```

```javascript
const document = // the document string

const parsed = frontmatter(document)
console.log(parsed);
//> {
//>   "meta": {
//>     "key1": "value1",
//>     "key2": "value2"
//>   },
//>   "body": "This is the document body."
//> }
```
## CommonJS

A CommonJS bundle is included for backward compatible with `node <= 13.2`

```javascript
const frontmeta = require('frontmeta/dist/frontmeta.cjs');
```

## Bundling

A ES module bundle is included under `dist/frontmeta.esm.js` and is defined as the `pkg.modules` entry point.

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.