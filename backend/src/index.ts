import express, { Express } from 'express';
import * as dotenv from 'dotenv';

// Charge les variables d'environnement depuis le fichier .env
dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.SERVER_PORT || '3010', 10);

// Importe les routes depuis le fichier routes.ts
import { routes } from './routes';

// Utilise les routes
app.use('/', routes);

app.listen(port, (): void => {
  console.log(`Serveur écoutant sur le port ${port}.`);
});