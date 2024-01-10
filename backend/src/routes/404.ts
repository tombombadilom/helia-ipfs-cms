import { Request, Response } from 'express';
import handle404 from '../page/404.ts';
/**
 * Handler for 404 Not Found response.
 *
 * @param req - The request object of type `Request`.
 * @param res - The response object of type `Response`.
 * @returns A `Promise` that resolves to `void`.
 */
const handleNotFoundError = (req: Request, res: Response): void => {
  const { slug } = req.params; // Retrieve the slug parameter from the request
  res.json(handle404(slug));
};
export default handleNotFoundError;
