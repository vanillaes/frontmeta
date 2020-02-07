/**
 * Parse a file that contains FrontMeta
 *
 * @param {string} contents the the document contents
 * @returns an object containing 'meta' and 'body' fields
 */
export function parse(contents?: string): {
    meta: {};
    body: string;
};
/**
 * Stringify takes a FrontMeta document object and returns FrontMatter
 *
 * @param {Object} document a FrontMeta document object
 * @returns {string} the FrontMeta string
 */
export function stringify(document: any): string;
declare namespace _default {
    export { parse };
    export { stringify };
}
export default _default;
