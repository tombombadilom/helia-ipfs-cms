import { Request, Response } from 'express';

export const register = (req: Request, res: Response): void => {
  /**
   * Logique d'enregistrement ici
   *
   * @param req - The request object
   * @param res - The response object
   */
  const { name, password, email } = req.body;
  console.log(name, password, email);
  res.send('Enregistrement effectué avec succès!');
};

export const login = (req: Request, res: Response): void => {
  /**
   * Logique de connexion ici
   *
   * @param req - The request object
   * @param res - The response object
   */
  const { email, password } = req.body;
  console.log(email, password);
  res.send('Connexion réussie!');
};

export const logout = (req: Request, res: Response): void => {
  /**
   * Logique de déconnexion ici
   *
   * @param req - The request object
   * @param res - The response object
   */
  const { email, sessionId } = req.body;
  console.log(email, sessionId);
  res.send('Déconnexion réussie!');
};