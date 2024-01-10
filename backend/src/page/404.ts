/**
 * Handles a 404 error by returning a customized message.
 *
 * @returns { string } The customized error message.
 */
const handle404 = (slug: string): string => `${slug}404 Not Found`;
export default handle404;
