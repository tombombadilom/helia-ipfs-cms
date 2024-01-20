import { Request, Response } from 'express';
import logout from '../middleware/auth/auth';
import logger from '../logger';

/**
 * Handle login request
 *
 * @param req - The request object
 * @param res - The response object
 */
const handleLogout = async (req: Request, res: Response) => {
  try {
    const result = await logout(req, res);
    res.json(result);
  } catch (error) {
    // Log the error using Morgan
    logger.log({
      level: 'error',
      message: 'Logout failed',
      error,
    });
    res.status(500).json({ error: '' });
  }
};
export default handleLogout;
