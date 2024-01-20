import { Request, Response } from 'express';
import { register } from '../middleware/auth/auth';
import logger from '../logger';

/**
 * Handle login request
 *
 * @param req - The request object
 * @param res - The response object
 */
const handleRegister = async (req: Request, res: Response) => {
  try {
    const result = await register(req, res);
    res.json(result);
  } catch (error) {
    // Log the error using Morgan
    logger.log({
      level: 'error',
      message: 'Register failed',
      error,
    });
    res.status(500).json({ error: '' });
  }
};
export default handleRegister;
