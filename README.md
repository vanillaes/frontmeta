<h1 align="center">FrontMeta</h1>

FrontMeta is a minimalist front-matter format that uses `key:value` pairs rather than YAML. This results in a parser that is optimized for both size and speed.

<div align="center">
  <a href="https://github.com/vanillaes/frontmeta/releases"><img src="https://badgen.net/github/tag/vanillaes/frontmeta" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/frontmeta"><img src="https://badgen.net/npm/v/@vanillaes/frontmeta" alt="NPM Release"></a>
  <a href="https://bundlephobia.com/result?p=@vanillaes/frontmeta"><img src="https://badgen.net/bundlephobia/minzip/@vanillaes/frontmeta" alt="Bundlephobia"></a>
  <a href="https://github.com/vanillaes/frontmeta/actions"><img src="https://github.com/vanillaes/frontmeta/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/frontmeta/actions"><img src="https://github.com/vanillaes/frontmeta/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
</div>

## Features

- ECMAScript Module
- CommonJS Bundle Included
- Typescript Compatible

## Imports

This package works isomorphically in browser and server-side JavaScript

### Browser

Import directly from the local path or a CDN

```html
<script type="module">
import { parse } from 'path/to/frontmeta/index.js'
</script>
```

The minified version can be imported from

```html
<script type="module">
import { parse } from 'path/to/frontmeta/index.min.js'
</script>
```

### Node

Install the package

```sh
npm install @vanillaes/csv
```

Import using the module path

```javascript
import { parse } from '@vanillaes/frontmeta'
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

### FrontMeta.stringify()

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
const document = // the frontmeta document object
const frontmeta = FrontMeta.stringify(document)
console.log(frontmeta);
> ---
> key1:value1
> key2:value2
> ---
> This is the document body.
```

## Typings

Typings are generated from JSDoc using Typescript. They are 100% compatible with VSCode Intellisense and will work seamlessly with Typescript.