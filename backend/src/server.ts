import dotenv from 'dotenv';
import app from './app.ts';
import logger from './logger.ts';

const serve = () => {
  const result = dotenv.config();
  if (result.error) {
    dotenv.config({ path: '.env.default' });
  }

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    logger.info(`🌏 Express server started at http://localhost:${PORT}`);

    if (process.env.NODE_ENV === 'development') {
      // This route is only present in development mode
      logger.info(`⚙️  Swagger UI hosted at http://localhost:${PORT}/dev/api-docs`);
    }
  });

  // Close the Mongoose connection, when receiving SIGINT
  process.on('SIGINT', async () => {
    console.log('\n');
    logger.info('Gracefully shutting down');
    process.exit(0);
  });
};

export default serve;
