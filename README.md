<h1 align="center">FrontMeta</h1>

<div align="center">FrontMeta is a minimalist front-matter format that uses `key:value` pairs rather than YAML. This results in a parser that is optimized for both size and speed.</div>

<br />

<div align="center">
  <a href="https://github.com/vanillaes/frontmeta/releases"><img src="https://badgen.net/github/tag/vanillaes/frontmeta?cache-control=no-cache" alt="GitHub Release"></a>
  <a href="https://npmjs.com/package/@vanillaes/frontmeta"><img src="https://badgen.net/npm/dw/@vanillaes/frontmeta?icon=npm" alt="NPM Weekly Downloads"></a>
  <a href="https://jsr.io/@vanillaes/frontmeta"><img src="https://jsr.io/badges/@vanillaes/frontmeta/weekly-downloads" alt="JSR Weekly Downloads"></a>
  <a href="https://jsr.io/@vanillaes/frontmeta"><img src="https://jsr.io/badges/@vanillaes/frontmeta/score" alt="JSR Score"></a>
  <a href="https://github.com/vanillaes/frontmeta/actions"><img src="https://github.com/vanillaes/frontmeta/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/frontmeta/actions"><img src="https://github.com/vanillaes/frontmeta/workflows/Release/badge.svg" alt="Release Status"></a>
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
import { parse, stringify } from 'path/to/frontmeta/index.js'
</script>
```

The minified version can be imported from

```html
<script type="module">
import { parse, stringify } from 'path/to/frontmeta/index.min.js'
</script>
```

### Node

Install the package

```sh
npm install @vanillaes/frontmeta
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