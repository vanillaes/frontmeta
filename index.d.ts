/**
 * @typedef {object} Document
 * @property {{[key: string]: string}} [meta] - a dictionary representing the document metadata
 * @property {string} [body] - the document body
 */
/**
 * Parse a file that contains FrontMeta
 * @param {string} frontmeta the FontMeta
 * @returns {object} an object containing 'meta' and 'body' fields
 */
export function parse(frontmeta?: string): object;
/**
 * Stringify takes a FrontMeta document object and returns FrontMatter
 * @param {Document} document a FrontMeta document object
 * @returns {string | undefined} the FrontMeta string
 */
export function stringify(document: Document): string | undefined;
declare namespace _default {
    export { parse };
    export { stringify };
}
export default _default;
export type Document = {
    /**
     * - a dictionary representing the document metadata
     */
    meta?: {
        [key: string]: string;
    } | undefined;
    /**
     * - the document body
     */
    body?: string | undefined;
};
