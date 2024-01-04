import { Request, Response } from 'express';
import { login } from '../middleware/auth/auth';
import morgan from 'morgan';

/**
 * Handle login request
 * 
 * @param req - The request object
 * @param res - The response object
 */
export const handleLogin = async (req: Request, res: Response) => {
  try {
    const result = await login(req, res);
    res.json(result);
  } catch (error) {
    // Log the error using Morgan
    morgan('combined')(req, res, () => {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
  }
};