const dotenv = require('dotenv');
dotenv.config({ path: '.env.default' });
const isDevelopment = process.env.NODE_ENV === 'development';
const isCluster = process.env.CLUSTER === 'true';
const instances = parseInt(process.env.INSTANCES, 10) || 4;
const logsEnabled = process.env.LOGS === 'true';
const logErrorFile = process.env.LOG_ERROR_FILE || 'logs/error.log';
const logOutFile = process.env.LOG_OUT_FILE || 'logs/out.log';

module.exports = {
  apps: [{
    name: 'HeliaVaultApi',
    script: 'pnpm',
    args: 'run start',
    watch: isDevelopment,
    exec_mode: isCluster ? 'cluster' : 'fork',
    instances: isCluster ? instances : 1,
    error_file: logsEnabled ? logErrorFile : undefined,
    out_file: logsEnabled ? logOutFile : undefined,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.PORT || 6000,
      PROTOCOL: process.env.PROTOCOL || 'HTTP',
      API_URL: process.env.API_URL || 'localhost',
      SSL: process.env.SSL === 'true',
      CLUSTER: isCluster,
      INSTANCES: instances,
      LOGS: logsEnabled,
      LOG_ERROR_FILE: logErrorFile,
      LOG_OUT_FILE: logOutFile
    },
  }],
};
