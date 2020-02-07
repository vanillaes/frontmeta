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
declare namespace _default {
    export { parse };
}
export default _default;
