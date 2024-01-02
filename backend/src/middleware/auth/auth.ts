import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  // Logique d'enregistrement ici
  const { name, password, email } = req.body;
  console.log(name, password, email);
  res.send('Enregistrement effectué avec succès!');
};

export const login = (req: Request, res: Response) => {

  // Logique de connexion ici
  const { email, password } = req.body;
  // Insérez votre code ici
  console.log(email, password);
  res.send('Connexion réussie!');
};

export const logout = (req: Request, res: Response) => {
  // Logique de déconnexion ici
  const { email, sessionId } = req.body;
  console.log(email, sessionId);
  res.send('Déconnexion réussie!');
};
