import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import express, {
  Request, Response, NextFunction, Express,
} from 'express';
import ApplicationError from './errors/application-error.ts';
import routes from './routes.ts';
import logger from './logger.ts';

const app: Express = express();

function logResponseTime(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const startHrTime: [number, number] = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime: [number, number] = process.hrtime(startHrTime);
    const elapsedTimeInMs: number = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    const message: string = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;
    logger.log({
      level: 'debug',
      message,
      consoleLoggerOptions: { label: 'API' },
    });
  });

  next();
}

app.use(logResponseTime);

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }),
);

app.use(routes);

app.use(
  (
    err: ApplicationError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void => {
    if (res.headersSent) {
      return next(err);
    }

    return res.status(err.status || 500).json({
      error: err.message,
    });
  },
);

export default app;
