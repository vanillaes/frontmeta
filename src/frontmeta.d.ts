/**
 * Parse a file that contains FrontMeta
 *
 * @param {string} contents the the document contents
 * @returns an object containing 'meta' and 'body' fields
 */
export default function FrontMeta(contents?: string): {
    meta: {};
    body: string;
};
