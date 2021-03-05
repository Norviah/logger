import { appendFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import spacetime from 'spacetime';

import { Color } from './types/color';
import { ColorOptions } from './types/colorOptions';
import { LoggingOptions } from './types/loggingOptions';
import { Options } from './types/options';

import { format } from './util/format';
import { defaults } from './util/defaults';

/**
 * A simple logging system.
 */
export class Logger {
  /**
   * Options for the system.
   */
  public options: Options;

  /**
   * Matches all ANSI codes in a string.
   */
  public ansi: RegExp = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

  /**
   * Represents the default colors used when logging.
   */
  public colors: ColorOptions = { date: 'gray', title: 'gray', message: 'white' };

  /**
   * Represents the format for logs.
   */
  public format: Pick<Options, 'date' | 'title' | 'format'>;

  /**
   * Initialize a new Logger instance.
   * @param options Options for the logging system.
   * @examples
   * ```typescript
   *
   * import { Logger } from '@norviah/logger'; // typescript
   * const { Logger } = require('@norviah/logger'); // node.js
   *
   * // Initialize a new instance with default values:
   * // options = {
   * //   write: false,
   * //   dir: join(path, 'logs'), // the sub-directory 'logs' under the root directory
   * //   date: '[ MM-dd-yyyy h:mm a ]',
   * //   title: '%t: ',
   * //   log: '%d %t%m',
   * // };
   * const logger = new Logger();
   *
   * // Logs will be written to the sub-directory 'logs' in the root directory.
   * const logger = new Logger({ write: true });
   *
   * // Logs will be written to the user's desktop.
   * const logger = new Logger({ write: true, dir: '/Users/norviah/Desktop' });
   *
   * // By default, logs will be in the format:
   * // %d %t%m
   * // with &d representing the date,
   * // %t representing the title, and
   * // %m representing the message.
   *
   * // To change the format of these values, you can use the 'date', 'title',
   * // and 'log' property. Note that the date is in unix formatting.
   *
   * const logger = new Logger();
   * // => [ MM-DD-YYYY h:mm a ] title: message
   *
   * const logger = new Logger({ title: '[ %t ]: ' });
   * // => [ MM-DD-YYYY h:mm a ] [ title ]: message
   *
   * const logger = new Logger({ date: 'MM' })
   * // => MM title: message
   *
   * new Logger({ log: '%m was logged%tat %d.', title: ' with the title, %t, ' }).print('hello', { title: 'title' });
   * // => [message] was logged with the title, [title], at [ MM-DD-YYYY h:mm a ].
   *
   * // The title isn't logged if a title isn't given.
   *
   * ```
   */
  constructor(options: Partial<Options> = defaults) {
    // Set the options to hold reference of the default values and any overrides
    // given during initialization.
    this.options = options = { ...defaults, ...options };

    // Set the format for logging, to make code a bit more readable.
    this.format = { date: this.options.date, title: this.options.title, format: this.options.format };

    if (options.write && !existsSync(this.options.dir)) {
      mkdirSync(this.options.dir, { recursive: true });
    }
  }

  /**
   * Prints the message to the console with the given colors applied, and, if
   * wanted, saves the log to a file.
   * @param message The message to log.
   * @param options Options for the log.
   * @examples
   * ```typescript
   *
   * const logger = new Logger({ write: true, date: '[ MM-dd-yyyy h:mm a ]', title: '%t: ', message: '%d %t%m' });
   *
   * logger.print(':)');
   * // => [ MM-DD-YYYY h:mm a ] :)
   *
   * logger.print('world', { title: 'hello' });
   * // => [ MM-DD-YYYY h:mm a ] hello: world
   *
   * // This log is written into the directory 'sub' in the sub-directory
   * // 'logs' under the project's root directory.
   * logger.print(':)', { subDir: 'sub' });
   *
   * // This log is written into the sub-directory 'sub/sub', each sub-directory
   * // is created if it doesn't exist.
   * logger.print(':)', { subDir: 'sub/sub'});
   *
   * // This log is saved under the sub-directory 'logs' as 'smile.txt', if a
   * // name isn't given, it's saved as 'MM-DD-YYY.txt'.
   * logger.print(':)', { name: 'smile' });
   *
   * // With the format of a log as: [ MM-dd-YYYY hh:mm a ] title: message,
   * // date represents '[ MM-DD-YYYY h:mm a ]',
   * // title represents '%t: ', and
   * // message represents 'message'.
   *
   * // By default, the colors when logging are:
   * // date: gray,
   * // title (if one is given): gray, and
   * // message: white.
   * // The supported colors are the colors supported by Chalk, which are:
   * // https://github.com/chalk/chalk/blob/master/index.d.ts#L56.
   *
   * logger.print('world', { title: 'hello' });
   * // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (gray)hello:(/gray) (white)world(/white)
   *
   * logger.print('world', { colors: { message: 'red' } });
   * // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (red)world(/red)
   *
   * logger.print('world', { title: 'hello', colors: { title: 'blue', message: 'blue' } });
   * // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (blue)hello:(/blue) (blue)world(/blue)
   *
   * // In addition, a few markdown syntax are supported:
   * // '**' to embold text,
   * // '~~' to strike-through text,
   * // '*' to italicise text,
   * // '_' to underline text, and
   * // '!' to invert colors.
   * // If you wrap a phrase around one or more of these symbols, the type it represents
   * // will be applied to the phrase, for example:
   *
   * logger.print('**__*hello world*__**');
   *
   * // Will print 'hello world' in bold, underline, and italics. Markdown
   * // syntax is also available for the title and date, for printing and for
   * // the format.
   *
   * logger.log('**world**', { title: '__hello__' });
   * // => [ MM-DD-YYYY h:mm a ] (u)hello(/u): (b)world(/b)
   *
   * new Logger({ date: '[ __MM__-dd **hh** ]' }).print('***world***', { title: '__hello__', colors: { date: 'red', title: 'yellow' } });
   * // => (red)[ (u)MM(/u)-DD (b)HH(/b) ](/red) (yellow)(u)hello:(/u)(/yellow) (white)(i)(b)world(/b)(/i)(/white)
   *
   * ```
   */
  print(message: string, options: Partial<LoggingOptions> = { colors: this.colors }): void {
    // Get the default colors in addition to given overrides.
    options.colors = { ...this.colors, ...options.colors };

    // Initialize a new spacetime moment to represent the current time and date.
    const now = spacetime.now();

    // Apply the color to the date.
    const date: string = format(now.unixFmt(this.format.date), options.colors.date);

    // Apply the color to the title.
    const title: string = options.title ? format(this.format.title.replace(/%t/g, options.title), options.colors.title) : '';

    // Apply the color to the message.
    message = format(message, options.colors.message);

    // Format the message.
    message = this.format.format.replace(/%d/g, date).replace(/%t/g, title).replace(/%m/g, message);

    console.log(message);

    if (this.options.write) {
      // Initialize a reference to the directory to write to, if a sub-directory
      // is given, combine it with the base directory.
      const directory: string = options.subDir ? join(this.options.dir, options.subDir) : this.options.dir;

      // Remove every ANSI code from the message, as we're saving it to a file
      // and don't want any unecessary content.
      message = `${message.replace(this.ansi, '')}\n`;

      // If a sub-directory is given, make sure that each sub-directory exists
      // within the base directory.
      if (options.subDir) {
        if (!existsSync(directory)) mkdirSync(directory, { recursive: true });
      }

      // Default to the current date if a name isn't given.
      const name: string = `${options.name ?? this.options.name ?? now.unixFmt('MM-dd-YYYY')}.txt`;

      appendFileSync(join(directory, name), message);

      // If a sub-directory was given, then we check if the user wants to save
      // the log into the base directory as well.
      if (options.subDir && (options.both ?? this.options.both)) {
        appendFileSync(join(this.options.dir, name), message);
      }
    }
  }

  /**
   * A shortcut to output an error, the title is set to 'ERROR' and is red.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.error('message');
   * // => [ MM-DD-YYYY ] (red)ERROR(/red): message
   * ```
   */
  error(message: string, options: Partial<LoggingOptions> = { title: 'ERROR', colors: { title: 'red' } }): void {
    this.print(message, { title: 'ERROR', ...options, colors: { title: 'red', ...options.colors } });
  }

  /**
   * A shortcut to output a success, the title is 'OK' and is the green.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.success('message');
   * // => [ MM-DD-YYYY ] (green)OK(/green): message
   * ```
   */
  public success(message: string, options: Partial<LoggingOptions> = { title: 'OK', colors: { title: 'green' } }): void {
    this.print(message, { title: 'OK', ...options, colors: { title: 'green', ...options.colors } });
  }

  /**
   * A shortcut to output a warning, the title is 'WARN' and is the yellow.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.warn('message');
   * // => [ MM-DD-YYYY ] (yellow)WARNING(/yellow): message
   * ```
   */
  public warn(message: string, options: Partial<LoggingOptions> = { title: 'WARNING', colors: { title: 'yellow' } }): void {
    this.print(message, { title: 'WARNING', ...options, colors: { title: 'yellow', ...options.colors } });
  }

  /**
   * A shortcut to output a log, the title is 'LOG' and is the blue.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.log('message');
   * // => [ MM-DD-YYYY ] (blue)LOG(/blue): message
   * ```
   */
  public log(message: string, options: Partial<LoggingOptions> = { title: 'LOG', colors: { title: 'blue' } }): void {
    this.print(message, { title: 'LOG', ...options, colors: { title: 'blue', ...options.colors } });
  }

  /**
   * Applies the given color to the message and returns it.
   * @param  color   The color to apply to the message.
   * @param  message The message.
   * @return         The message formatted with the color and markdown syntax.
   */
  public colorize(color: Color, message: string): string {
    return format(message, color);
  }

  /**
   * Applies the given color to the message and prints it into the console.
   * @param color   The color to apply to the message.
   * @param message The message.
   */
  public color(color: Color, message: string): void {
    console.log(this.colorize(color, message));
  }
}
