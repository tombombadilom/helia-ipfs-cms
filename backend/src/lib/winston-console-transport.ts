/* eslint-disable no-console */
import Transport from 'winston-transport';

type Level = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';

interface LogInfo {
  consoleLoggerOptions?: { label?: string };
  level?: Level;
  message?: string;
  stack?: string;
}

const levelStyleMap: { [key in Level]: string } = {
  error: '\x1b[41m%s\x1b[0m',
  warn: '\x1b[33m%s\x1b[0m',
  info: '\x1b[94m%s\x1b[0m',
  verbose: '\x1b[35m%s\x1b[0m',
  debug: '\x1b[32m%s\x1b[0m',
  silly: '\x1b[36m%s\x1b[0m',
};

export default class ConsoleLogTransport extends Transport {
  private cachedLevelStyles: { [key in Level]: string };

  constructor() {
    super();
    this.cachedLevelStyles = {} as { [key in Level]: string };
  }

  /**
   * Log method with strongly typed arguments and return type.
   * @param info - Information about the log message.
   */
  log(this: ConsoleLogTransport, info?: LogInfo): void {
    const {
      consoleLoggerOptions, level, message, stack,
    } = info ?? {};
    const label = consoleLoggerOptions?.label;
    const upperLevel = level?.toUpperCase() as Level;
    const levelStyle = this.cachedLevelStyles[upperLevel] || levelStyleMap[upperLevel];
    const finalMessage = `[${new Date().toISOString()}] [${label?.toUpperCase() || levelStyleMap.info}] ${message || ''}`;
    console.log(level ? levelStyle : levelStyleMap.info, finalMessage);
    if (stack) {
      console.log('\t', stack);
    }
  }
}
