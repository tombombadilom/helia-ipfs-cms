import express from 'express';
import * as dotenv from 'dotenv';

// Charge les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// Importe les routes depuis le fichier routes.ts
import { routes } from './routes';

// Utilise les routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}.`);
});
