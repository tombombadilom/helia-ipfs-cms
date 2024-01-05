import express, { Express, Router, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.SERVER_PORT || '3010', 10);

let routes: string[] = [];

// Obtient le chemin absolu du répertoire actuel
const currentDirectory = process.cwd();
// Construit le chemin absolu pour le répertoire des routes
const routesDirectoryPath = path.join(currentDirectory, 'routes');

// Vérifie l'existence du répertoire des routes
if (fs.existsSync(routesDirectoryPath)) {
  routes = fs.readdirSync(routesDirectoryPath)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => file.replace('.ts', ''));
  console.log('Le répertoire des routes existe :', routesDirectoryPath);
} else {
  console.log('Le répertoire des routes n\'existe pas :', routesDirectoryPath);
}

// Middleware for access logs
const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Middleware for error logs
const errorLogStream = fs.createWriteStream('error.log', { flags: 'a' });
app.use(morgan('combined', { stream: errorLogStream }));

const router: Router = express.Router();

app.use(cors());
app.use("/", router);

router.get('/:slug', (req: Request, res: Response): void => {
  const slug: string = req.params.slug;
 
  if (!slug) {
    res.redirect('/routes/home.ts');
  } else {
    const forbiddenCharactersRegex = /[.\^$*+?{}[\]|\(\)]/g;
    const cleanedSlug = slug.replace(forbiddenCharactersRegex, '');

    if (routes.includes(cleanedSlug)) {
      res.redirect(`/routes/${cleanedSlug}.ts`);
    } else {
      res.redirect(`/routes/404.ts?slug=${cleanedSlug}`);
    }
  }
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