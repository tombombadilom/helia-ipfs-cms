import Transport from 'winston-transport';

/**
 * https://stackoverflow.com/a/41407246
 * Log level escape codes
 */

/**
 * Log level escape codes
 */
const levelStyleMap: { [key: string]: string } = {
  error: '\x1b[41m%s\x1b[0m',
  warn: '\x1b[33m%s\x1b[0m',
  info: '\x1b[94m%s\x1b[0m',
  verbose: '\x1b[35m%s\x1b[0m',
  debug: '\x1b[32m%s\x1b[0m',
  silly: '\x1b[36m%s\x1b[0m',
};

export default class ConsoleLogTransport extends Transport {
  log(info?: { consoleLoggerOptions?: { label?: string }; level?: string; message?: string; stack?: string }): void {
    const label = info?.consoleLoggerOptions?.label?.toUpperCase() ?? info?.level?.toUpperCase();
    const finalMessage = `[${new Date().toISOString()}] [${label}] ${info?.message}`;
    console.log(levelStyleMap[info?.level ? info.level : 'info'], finalMessage);
    info?.stack && console.log('\t', info?.stack);
  }
}
