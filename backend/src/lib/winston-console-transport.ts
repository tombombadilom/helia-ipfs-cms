/* eslint-disable no-console */
import Transport from 'winston-transport';

const levelStyleMap: { [key: string]: string } = {
  error: '\x1b[41m%s\x1b[0m',
  warn: '\x1b[33m%s\x1b[0m',
  info: '\x1b[94m%s\x1b[0m',
  verbose: '\x1b[35m%s\x1b[0m',
  debug: '\x1b[32m%s\x1b[0m',
  silly: '\x1b[36m%s\x1b[0m',
};

export default class ConsoleLogTransport extends Transport {
  /**
   * Log method with strongly typed arguments and return type.
   * @param info - Information about the log message.
   */
  log(
    info?: {
      consoleLoggerOptions?: { label?: string };
      level?: string;
      message?: string;
      stack?: string;
    },
  ): void {
    const {
      label, level, message, stack,
    } = info?.consoleLoggerOptions ?? {};
    // eslint-disable-next-line max-len
    const finalLabel = label?.toUpperCase() ?? levelStyleMap[level?.toUpperCase() as keyof typeof levelStyleMap];
    const levelStyle = levelStyleMap[level?.toUpperCase() as keyof typeof levelStyleMap];
    const finalMessage = `[${new Date().toISOString()}] [${finalLabel}] ${message}`;
    console.log(level ? levelStyle : levelStyleMap.info, finalMessage);
    console.log('\t', stack ?? '');
  }
}
