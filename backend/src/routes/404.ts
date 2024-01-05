import { Request, Response } from 'express';

/**
 * Handler for 404 Not Found response.
 * 
 * @param req - The request object.
 * @param res - The response object.
 */
export const handleNotFound = (req: Request, res: Response): void => {
    res.redirect('../page/404');
}