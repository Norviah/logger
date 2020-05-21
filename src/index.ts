import { existsSync, mkdirSync, appendFileSync } from 'fs';
import { join } from 'path';
import { path } from 'app-root-path';
import { Options } from './options';
import { LoggingOptions } from './logging';
import { format, mkdir } from './util';
import { Color } from 'chalk';

import moment from 'moment';

/**
 * A simple logging system.
 */
class Logger {
  /**
   * Options for the logging system.
   */
  private options: Options = { write: false, dir: join(path, 'logs') };

  /**
   * Represents a regex used that matches ANSI escape codes.
   */
  private regex: RegExp = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

  /**
   * Initialize a new Logger instance.
   * @param options Options for the logging system.
   * @examples
   * ```typescript
   * const { Logger } = require("@norviah/logger");
   *
   * const logger = new Logger();                                            // Initialize a new instance with default values.
   * const logger = new Logger({ write: true });                             // Logger will write logs into the sub-directory 'logs' in the project's root directory.
   * const logger = new Logger({ write: true, dir: '/Users/name/Desktop' }); // Logger will write logs into the Desktop.
   * ```
   */
  constructor(options: Options = { write: false, dir: join(path, 'logs') }) {
    // Set the options to hold reference to the
    // default values and any given overrides.
    this.options = { ...this.options, ...options };

    const { write, dir } = this.options;

    // If the user wants Logger to write files,
    // make sure that the wanted directory exists.
    if (write && !existsSync(dir as string)) {
      mkdirSync(dir as string);
    }
  }

  /**
   * Prints the message to the console with the given colors applied to the message.
   * @param message The message to print.
   * @param options Options for the log.
   * @examples
   * ```typescript
   * logger.print(':)');                            // => [ DD-MM-YYYY h:mm a ] :)
   * logger.print('world', { title: 'hello' });     // => [ DD-MM-YYYY h:mm a ] hello: world
   * logger.print(':)', { subDir: 'sub' });         // This log will be written into the sub-directory 'sub' in the base directory.
   * logger.print(':)', { subDir: 'sub/sub'}); // This log will be written into the sub-directory 'sub/sub' in the base directory. The sub-directories are created if it doesn't exist.
   * logger.print(':)', { name: 'smile' });         // This log will be written under the name of 'smile.txt' in the base directory. If a name isn't given, it will be saved as 'DD-MM-YYYY.txt'.
   *
   *
   * // With the format of a log being,
   * // [ DD-MM-YYYY h:mm a ] title: message
   * // date represents '[ DD-MM-YYYY h:mm a ]',
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
   * logger.print(':)', { title: 'title' });                                                // => (gray)[ DD-MM-YYYY h:mm a ](/gray) (gray)title:(/gray) (white):)(/white)
   * logger.print(':)', { colors: { message: 'red' } });                                    // => (gray)[ DD-MM-YYYY h:mm a ](/gray) (red):)(/red)
   * logger.print('world', { title: 'hello', colors: { title: 'blue', message: 'blue' } }); // => (gray)[ DD-MM-YYYY h:mm a ](/gray) (blue)hello:(/blue) (blue)world(/blue)
   * ```
   */
  public print(message: string, options: LoggingOptions = { title: '', colors: { date: 'gray', title: 'gray', message: 'white' } }): void {
    // Initialize a new string representing the current date and time.
    const now = moment().format('MM-DD-YYYY h:mm a');

    // Apply the given color to the date.
    const date = format(`[ ${now} ]`, options.colors?.date, 'gray');

    // Apply the given color to the title.
    const title = options.title ? format(`${options.title}: `, options.colors?.title, 'gray') : '';

    // Apply the given color to the message.
    message = format(message, options.colors?.message, 'white');

    // Format the message.
    message = `${date} ${title}${message}`;

    console.log(message);

    if (!this.options.write) {
      return;
    }

    // If a sub-directory is given, make sure that
    // each sub-directory exists within the base directory.
    if (options.subDir) {
      mkdir(this.options.dir as string, options.subDir);
    }

    // Initialize a reference to the directory to write to,
    // if a sub-directory is given, combine it with the base directory.
    const directory = options.subDir ? join(this.options.dir as string, options.subDir) : (this.options.dir as string);

    // If a name isn't given, default to the date in the format 'MM-DD-YYYY'.
    const name = options.name ?? now.split(' ')[0];

    appendFileSync(join(directory, `${name}.txt`), `${message.replace(this.regex, '')}\n`);
  }

  /**
   * A shortcut to output an error,
   * the title is 'ERROR' and is the color red.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.error('message'); // => [ DD-MM-YYYY ] (red)ERROR(/red): message
   * ```
   */
  public error(message: string, options: LoggingOptions = { title: 'ERROR', colors: { title: 'red' } }): void {
    this.print(message, { title: 'ERROR', colors: { title: 'red' }, ...options });
  }

  /**
   * A shortcut to output a success,
   * the title is 'OK' and is the color green.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.success('message'); // => [ DD-MM-YYYY ] (green)OK(/green): message
   * ```
   */
  public success(message: string, options: LoggingOptions = { title: 'OK', colors: { title: 'green' } }): void {
    this.print(message, { title: 'OK', colors: { title: 'green' }, ...options });
  }

  /**
   * A shortcut to output a warning,
   * the title is 'WARN' and is the color yellow.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.warn('message'); // => [ DD-MM-YYYY ] (yellow)WARN(/yellow): message
   * ```
   */
  public warn(message: string, options: LoggingOptions = { title: 'WARN', colors: { title: 'yellow' } }): void {
    this.print(message, { title: 'WARN', colors: { title: 'yellow' }, ...options });
  }

  /**
   * A shortcut to output a logging message,
   * the title is 'LOG' and is the color blue.
   * @param message The message to print.
   * @param options Options for logging.
   * @examples
   * ```typescript
   * logger.log('message'); // => [ DD-MM-YYYY ] (blue)LOG(/blue): message
   * ```
   */
  public log(message: string, options: LoggingOptions = { title: 'LOG', colors: { title: 'blue' } }): void {
    this.print(message, { title: 'LOG', colors: { title: 'blue' }, ...options });
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
  public colorize(color: typeof Color, message: string): string {
    return format(message, color, 'white');
  }

  /**
   * Applies the given color to the message and prints it into the console.
   * @param color   The color to apply to the message.
   * @param message The message.
   */
  public color(color: typeof Color, message: string): void {
    console.log(this.colorize(color, message));
  }
}

export { Logger };
