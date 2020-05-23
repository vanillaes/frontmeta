<h1 align="center">FrontMeta</h1>

FrontMeta is a minimalist front-matter format that uses `key:value` pairs rather than YAML. This results in a parser that is optimized for both size and speed.

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/frontmeta)](https://github.com/vanillaes/frontmeta/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillaes/frontmeta)](https://www.npmjs.com/package/@vanillaes/frontmeta)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillaes/frontmeta)](https://bundlephobia.com/result?p=@vanillaes/frontmeta)
[![MIT License](https://badgen.net/github/license/vanillaes/frontmeta)](https://raw.githubusercontent.com/vanillaes/frontmeta/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/frontmeta/workflows/Latest/badge.svg)](https://github.com/vanillaes/frontmeta/actions)
[![Release Status](https://github.com/vanillaes/frontmeta/workflows/Release/badge.svg)](https://github.com/vanillaes/frontmeta/actions)

## Features

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible

## Installation

```sh
npm install @vanillaes/frontmeta
```

```javascript
import FrontMeta from '@vanillaes/frontmeta';
```

## Usage

Parse and stringify FrontMeta

### FrontMeta.parse()

```FrontMeta.parse(contents) : object```

- contents - a string representing the document contents

### Example

*contents*
```
---
key1:value1
key2:value2
---
This is the document body.
```

```javascript
import FrontMeta from '@vanillaes/frontmeta';
const frontmeta = // the document contents
const parsed = FrontMeta.parse(frontmeta)
console.log(parsed);
> {
>   "meta": {
>     "key1": "value1",
>     "key2": "value2"
>   },
>   "body": "This is the document body."
> }
```

### FrontMeta.parse()

```FrontMeta.stringify(document) : object```

- document - The frontmeta document object
  - meta - the frontmeta `key:value` data
  - body - the document body

*document*
```json
{
  "meta": {
    "key1": "value1",
    "key2": "value2"
  },
  "body": "This is the document body."
}
```

```javascript
import FrontMeta from '@vanillaes/frontmeta';
const document = // the frontmeta document object
const frontmeta = FrontMeta.stringify(document)
console.log(frontmeta);
> ---
> key1:value1
> key2:value2
> ---
> This is the document body.
```

## CommonJS

A `.cjs` bundle is included for CommonJS compatibility 

### FrontMeta.parse()

```javascript
const FrontMeta = require('@vanillaes/frontmeta');
const frontmeta = // the document frontmeta
const parsed = FrontMeta.parse(frontmeta);
```

### FrontMeta.stringify()

```javascript
const FrontMeta = require('frontmeta');
const document = // the frontmeta document object
const frontmeta = FrontMeta.stringify(document);
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.