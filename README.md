<h1 align="center">FrontMeta</h1>

FrontMeta is a minimalist front-matter format that uses `key:value` pairs rather than YAML. This results in a parser that is optimized for both size and speed.

[![GitHub Releases](https://img.shields.io/github/release/vanillaes/frontmeta.svg)](https://github.com/vanillaes/frontmeta/releases)
[![NPM Release](https://img.shields.io/npm/v/frontmeta.svg)](https://www.npmjs.com/package/frontmeta)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillaes/frontmeta/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/frontmeta/workflows/Latest/badge.svg)](https://github.com/vanillaes/frontmeta/actions)
[![Release Status](https://github.com/vanillaes/frontmeta/workflows/Release/badge.svg)](https://github.com/vanillaes/frontmeta/actions)

## Features

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

## Usage

Takes a document string and extracts the frontmeta metadata

### FrontMeta.parse()

```frontmeta(contents) : object```

- contents - a string representing the document contents

### Example

```
---
key1:value1
key2:value2
---
This is the document body.
```

```javascript
import FrontMeta from '/path/to/frontmeta/index.js';
const document = // the document string
const parsed = FrontMeta.parse(document)
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

A `.cjs` bundle is included for CommonJS compatibility 

### FrontMeta.parse()

```javascript
const FrontMeta = require('frontmeta');
const document = // the document string
const data = FrontMeta.parse(document);
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.