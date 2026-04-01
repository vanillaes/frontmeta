/**
 * @typedef {object} Document
 * @property {{[key: string]: string}} [meta] - a dictionary representing the document metadata
 * @property {string} [body] - the document body
 */
/**
 * Stringify takes a FrontMeta document object and returns FrontMatter
 * @param {Document} document a FrontMeta document object
 * @returns {string | undefined} the FrontMeta string
 */
export function stringify(document: Document): string | undefined;
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
