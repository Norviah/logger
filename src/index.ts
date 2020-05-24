import { path } from 'app-root-path';
import Chalk from 'chalk';
import { existsSync, mkdirSync, appendFileSync } from 'fs';
import moment from 'moment';
import { join } from 'path';

import { Colors } from './colors';
import { LoggingOptions } from './logging';
import { Options } from './options';
import { format } from './format';

/**
 * A simple logging system.
 */
class Logger {
  /**
   * Options for the logging system.
   */
  private options: Options;

  /**
   * Matches ANSI codes, used to get rid of colors from a log.
   */
  private ansi: RegExp = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

  /**
   * Default colors used when logging.
   */
  private colors: Colors = { date: 'gray', title: 'gray', message: 'white' };

  /**
   * Initialize a new Logger instance.
   * @param options Options for the logging system.
   * @examples
   * ```typescript
   *
   * const { Logger } = require("@norviah/logger");
   *
   * const logger = new Logger();                                            // Initialize a new instance with default values.
   * const logger = new Logger({ write: true });                             // Logs will be written into the sub-directory 'logs' in the project's root directory.
   * const logger = new Logger({ write: true, dir: '/Users/name/Desktop' }); // Logs will be written into the Desktop.
   *
   * ```
   */
  constructor({ write = false, dir = join(path, 'logs') }: Options = {}) {
    // Set the options to hold reference to the
    // default values and any given overrides.
    this.options = { write, dir };

    // If the user wants Logger to write files,
    // make sure that the wanted directory exists.
    if (write && !existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Prints the message to the console with the given colors applied to the message.
   * @param message The message to print.
   * @param options Options for the log.
   * @examples
   * ```typescript
   *
   * logger.print(':)');                            // => [ MM-DD-YYYY h:mm a ] :)
   * logger.print('world', { title: 'hello' });     // => [ MM-DD-YYYY h:mm a ] hello: world
   * logger.print(':)', { subDir: 'sub' });         // This log will be written into the sub-directory 'sub' in the base directory.
   * logger.print(':)', { subDir: 'sub/sub'});      // This log will be written into the sub-directory 'sub/sub' in the base directory. The sub-directories are created if it doesn't exist.
   * logger.print(':)', { name: 'smile' });         // This log will be written under the name of 'smile.txt' in the base directory. If a name isn't given, it will be saved as 'MM-DD-YYYY.txt'.
   *
   *
   * // With the format of a log being,
   * // [ MM-DD-YYYY h:mm a ] title: message
   * // date represents '[ MM-DD-YYYY h:mm a ]',
   * // title represents 'title:', and
   * // message represents 'message'
   *
   * // By default, the colors when logging are
   * // date: gray,
   * // title (if one is given): gray, and
   * // message: white
   *
   * // The supported colors are the colors supported by chalk, which can be viewed here:
   * // https://github.com/chalk/chalk/blob/55816cdd4d25a86cc35b18e1e578a5b164f71aee/index.d.ts#L56.
   *
   * logger.print(':)', { title: 'title' });                                                // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (gray)title:(/gray) (white):)(/white)
   * logger.print(':)', { colors: { message: 'red' } });                                    // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (red):)(/red)
   * logger.print('world', { title: 'hello', colors: { title: 'blue', message: 'blue' } }); // => (gray)[ MM-DD-YYYY h:mm a ](/gray) (blue)hello:(/blue) (blue)world(/blue)
   *
   * // Using Chalk, Logger also supports a few markdown syntax:
   * // '**' for bold text.
   * // '~~' for strikethrough text.
   * // '*'  for italic text.
   * // '_'  for underline text.
   * // '!'  for inverse colors.
   * // If you wrap a phrase around one or more of these, the types
   * // it represents will be applied to the phrase. For example,
   *
   * logger.print('**__*hello world*__**');
   *
   * // Will print 'hello world' in bold, underline, and in italics. Markdown syntax is also
   * // available for the title as well as other the other available methods.
   *
   * logger.log('**world**', { title: '__hello__' }); // => [ MM-DD-YYYY h:mm a ] (underline)hello(/underline): (bold)world(/bold)
   *
   * ```
   */
  public print(message: string, options: LoggingOptions = { colors: this.colors }): void {
    // Get the default values for colors in addition to any possible overrides.
    options.colors = { ...this.colors, ...options.colors };

    // Initialize a new string representing the current date and time.
    const now = moment().format('MM-DD-YYYY - h:mm a');

    // Apply the given color to the date.
    const date = format(`[ ${now} ]`, options.colors.date);

    // Apply the given color to the title.
    const title = options.title ? format(`${options.title}: `, options.colors.title) : '';

    // Apply the given color to the message.
    message = format(message, options.colors.message);

    // Format the message.
    message = `${date} ${title}${message}`;

    console.log(message);

    if (!this.options.write) {
      return;
    }

    // If a sub-directory is given, make sure that
    // each sub-directory exists within the base directory.
    if (options.subDir) {
      mkdirSync(join(this.options.dir as string, options.subDir), { recursive: true });
    }

    // Initialize a reference to the directory to write to,
    // if a sub-directory is given, combine it with the base directory.
    const directory = options.subDir ? join(this.options.dir as string, options.subDir) : (this.options.dir as string);

    // If a name isn't given, default to the date in the format 'MM-DD-YYYY'.
    const name = options.name ?? now.split(' ')[0];

    appendFileSync(join(directory, `${name}.txt`), `${message.replace(this.ansi, '')}\n`);
  }

  /**
   * A shortcut to output an error,
   * the title is 'ERROR' and is the color red.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.error('message'); // => [ MM-DD-YYYY ] (red)ERROR(/red): message
   * ```
   */
  public error(message: string, options: LoggingOptions = { title: 'ERROR', colors: { title: 'red' } }): void {
    this.print(message, { title: 'ERROR', ...options, colors: { title: 'red', ...options.colors } });
  }

  /**
   * A shortcut to output a success,
   * the title is 'OK' and is the color green.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.success('message'); // => [ MM-DD-YYYY ] (green)OK(/green): message
   * ```
   */
  public success(message: string, options: LoggingOptions = { title: 'OK', colors: { title: 'green' } }): void {
    this.print(message, { title: 'OK', ...options, colors: { title: 'green', ...options.colors } });
  }

  /**
   * A shortcut to output a warning,
   * the title is 'WARN' and is the color yellow.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.warn('message'); // => [ MM-DD-YYYY ] (yellow)WARN(/yellow): message
   * ```
   */
  public warn(message: string, options: LoggingOptions = { title: 'WARN', colors: { title: 'yellow' } }): void {
    this.print(message, { title: 'WARN', ...options, colors: { title: 'yellow', ...options.colors } });
  }

  /**
   * A shortcut to output a logging message,
   * the title is 'LOG' and is the color blue.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.log('message'); // => [ MM-DD-YYYY ] (blue)LOG(/blue): message
   * ```
   */
  public log(message: string, options: LoggingOptions = { title: 'LOG', colors: { title: 'blue' } }): void {
    this.print(message, { title: 'LOG', ...options, colors: { title: 'blue', ...options.colors } });
  }

  /**
   * Applies the given color to the message and returns it.
   * @param  color   The color to apply to the message.
   * @param  message The message.
   * @examples
   * ```typescript
   * logger.colorize('yellow', 'hello world :)'); // => (yellow)hello world :)(/yellow)
   * ```
   * @return         The given message with the given color.
   */
  public colorize(color: typeof Chalk.Color, message: string): string {
    return format(message, color);
  }

  /**
   * Applies the given color to the message and prints it into the console.
   * @param color   The color to apply to the message.
   * @param message The message.
   * @examples
   * ```typescript
   * logger.color('blue', 'hello world :)'); // => (blue)hello world :)(/blue)
   * ```
   */
  public color(color: typeof Chalk.Color, message: string): void {
    console.log(this.colorize(color, message));
  }
}

export { Logger };
