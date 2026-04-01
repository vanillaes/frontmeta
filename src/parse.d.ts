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
