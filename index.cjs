var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// index.js
__markAsModule(exports);
__export(exports, {
  default: () => frontmeta_default,
  parse: () => parse,
  stringify: () => stringify
});
function parse(frontmeta = "") {
  const meta = {};
  let body = "";
  let matches = [];
  let match = "";
  let state = 0;
  let dashes = 0;
  let noMeta = false;
  let isMeta = false;
  let isBody = false;
  let key = "";
  let value = "";
  const lexer = /-|:|\r\n|\n|\r|\s|[^:\s\r\n]+/y;
  while ((matches = lexer.exec(frontmeta)) !== null) {
    match = matches[0];
    switch (state) {
      case 0:
        switch (true) {
          case match === "-":
            dashes++;
            state = 1;
            break;
          case /^(\s)$/.test(match):
            state = 0;
            break;
          default:
            noMeta = true;
            break;
        }
        break;
      case 1:
        switch (true) {
          case match === "-":
            dashes++;
            state = 1;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            if (dashes < 3) {
              throw Error("ERR: Meta boundary must have at least 3 dashes");
            }
            if (!isMeta) {
              isMeta = true;
              state = 2;
            } else {
              isBody = true;
              state = 5;
            }
            dashes = 0;
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (true) {
          case match === ":":
            state = 3;
            break;
          case /^(\s)$/.test(match):
            state = 2;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            throw Error("ERR: Broken key:value pair");
          default:
            key += match;
            state = 2;
            break;
        }
        break;
      case 3:
        switch (true) {
          case (value === "" && /^(\s)$/.test(match)):
            state = 3;
            break;
          case /^(\r\n|\n|\r)$/.test(match):
            state = 1;
            meta[key] = value.trimRight();
            key = "";
            value = "";
            break;
          default:
            state = 3;
            value += match;
            break;
        }
        break;
    }
    if (noMeta) {
      body = frontmeta;
      break;
    }
    if (isBody) {
      body = frontmeta.substr(lexer.lastIndex, frontmeta.length - 1);
      break;
    }
  }
  return {meta, body};
}
function stringify(document) {
  if (!document.meta || Object.keys(document.meta).length === 0) {
    return document.body;
  }
  let output = "---\n";
  const metaKeys = Object.keys(document.meta);
  metaKeys.forEach((key) => {
    output += `${key}: ${document.meta[key]}
`;
  });
  output += "---\n";
  if (document.body) {
    output += document.body;
  }
  return output;
}
var frontmeta_default = {parse, stringify};
