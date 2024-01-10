import { Request, Response } from 'express';

interface RegisterRequestBody {
  name: string;
  password: string;
  email: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

/**
 * Registers a user with the provided information.
 *
 * @param {Request<unknown, unknown, RegisterRequestBody>} req
 *  - The request object containing the user's registration data.
 * @param {Response} res - The response object used to send a success message.
 * @return {void} - This function does not return a value.
 */
export const register = (
  req: Request<unknown, unknown, RegisterRequestBody>,
  res: Response,
): void => {
  const { name, password, email } = req.body;
  // eslint-disable-next-line no-console
  console.log(name, password, email);
  res.send('Registration successful!');
};

/**
 * Logs in a user.
 *
 * @param {Request<unknown, unknown, LoginRequestBody>} req
 * - the request object containing the login details
 * @param {Response} res - the response object to send the login result
 * @return {void} - This function does not return anything
 */
export const login = (req: Request<unknown, unknown, LoginRequestBody>, res: Response): void => {
  const { email, password } = req.body;
  // eslint-disable-next-line no-console
  console.log(email, password);

  // Perform login logic here

  // Check if login was successful
  const loginSuccessful = true; // Replace with your login logic

  if (loginSuccessful) {
    res.json({ success: true, message: 'Login successful', error: null });
  } else {
    res.json({ success: false, message: 'Login failed', error: null });
  }
};

/**
 * Logout function.
 *
 * @param req - The request object.
 * @param res - The response object.
 * @returns void
 */
const logout = (
  req: Request<unknown, unknown, { email: string, sessionId: number }>,
  res: Response,
): void => {
  const { email, sessionId } = req.body;
  // eslint-disable-next-line no-console
  console.log(email, sessionId);
  res.send('Logout successful!');
};
export default logout;
