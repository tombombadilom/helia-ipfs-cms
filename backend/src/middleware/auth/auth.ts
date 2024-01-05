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
 * @param {Request<unknown, unknown, RegisterRequestBody>} req - The request object containing the user's registration data.
 * @param {Response} res - The response object used to send a success message.
 * @return {void} - This function does not return a value.
 */
export const register = (req: Request<unknown, unknown, RegisterRequestBody>, res: Response): void => {
  const { name, password, email } = req.body;
  console.log(name, password, email);
  res.send('Registration successful!');
};

/**
 * Logs in a user.
 *
 * @param {Request<unknown, unknown, LoginRequestBody>} req - the request object containing the login details
 * @param {Response} res - the response object to send the login result
 * @return {void} - This function does not return anything
 */
export const login = (req: Request<unknown, unknown, LoginRequestBody>, res: Response): void => {
  const { email, password } = req.body;
  console.log(email, password);

  // Perform login logic here

  // Check if login was successful
  const loginSuccessful = true; // Replace with your login logic

  if (loginSuccessful) {
    res.json({ success: true, message: "Login successful", error: null });
  } else {
    res.json({ success: false, message: "Login failed", error: null });
  }
};

/**
 * Logs out a user by invalidating their session.
 *
 * @param {Request<unknown, unknown, { email: string, sessionId: number }>} req - The request object containing the user's email and session ID.
 * @param {Response} res - The response object.
 * @return {void} This function does not return anything.
 */
export const logout = (req: Request<unknown, unknown, { email: string, sessionId: number }>, res: Response): void => {
  const { email, sessionId } = req.body;
  console.log(email, sessionId);
  res.send('Logout successful!');
};