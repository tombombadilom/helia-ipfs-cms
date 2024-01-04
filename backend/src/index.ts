import express, { Express, Router, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.SERVER_PORT || '3010', 10);
const routesDirectory = './routes/';

const routes: string[] = fs.readdirSync(routesDirectory)
  .filter((file) => file.endsWith('.ts'))
  .map((file) => file.replace('.ts', ''));

app.use(cors());

// Middleware for access logs
const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Middleware for error logs
const errorLogStream = fs.createWriteStream('error.log', { flags: 'a' });
app.use(morgan('combined', { stream: errorLogStream }));

const router: Router = express.Router();

import { Application } from "express";

const app: Application = express();

app.use("/", routes);

router.get('/:slug', (req: Request, res: Response): void => {
  const slug: string = req.params.slug;
  res.send(`Received request with slug: ${slug}`);
});

router.use((req: Request, res: Response): void => {
  const slug: string = req.params.slug;
  res.status(404).send(slug ? slug + ' Not Found' : 'Not Found');
});

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error(next ? next(err) : err);
  const slug: string = req.params.slug;
  console.error(err);
  res.status(500).send(slug ? slug + ' Internal Server Error' : 'Internal Server Error');
});

app.listen(port, (): void => {
  console.log(`Serveur écoutant sur le port ${port}.`);
});