import express from 'express';
import { login, logout, register } from './middleware/auth/auth';
export const routes = express.Router();

// Exemple de route
routes.get('/', (req: { body: { param: string; }; }, res: { send: (arg0: string) => void; }) => {
  const param = req.body.param;
  console.log(param);
  res.send('Bienvenue sur l\'API!');
});

// Routes authentification
routes.post('/register', register);
routes.post('/login', login);
routes.post('/logout', logout);
