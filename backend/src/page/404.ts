/**
 * Handles a 404 error by returning a customized message.
 *
 * @returns { string } The customized error message.
 */
export const handle404 = (slug: string): string => `${slug}404 Not Found`;
