import { existsSync, mkdirSync, appendFileSync } from 'fs';
import { join } from 'path';
import { path } from 'app-root-path';
import { Colors } from './colors';
import { Options } from './options';

import moment from 'moment';
import chalk from 'chalk';

/**
 * A simple logging system.
 */
class Logger {
  /**
   * Optional options used for the logging system.
   */
  private options: Options = { write: false, dir: join(path, 'logs') };

  /**
   * Represents the regex used to match ANSI escape codes.
   */
  private regex: RegExp = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

  /**
   * Initialize a new Logger instance.
   * @param options Options for the logging system.
   */
  constructor(options: Options = {}) {
    // Set the options to hold reference to the
    // default values and any given overrides.
    this.options = { ...this.options, ...options };

    const { write, dir } = this.options;

    // If the user wants us to write files and
    // the wanted directory doesn't exist, create it.
    if (write && !existsSync(dir as string)) {
      mkdirSync(dir as string);
    }
  }

  /**
   * Prints the given message to the console,
   * and, if wanted, writes the log into a file.
   * @param message The message to print.
   * @param title   The optional title for the message.
   * @param colors  Represents colors used to print the date, title, and message.
   */
  public print(message: string, title?: string, colors: Colors = {}): void {
    // Initialize a new string representing the current date and time.
    const now = moment().format('MM-DD-YY h:mm a');

    // Apply the given color to the date.
    const date = chalk[colors.date ?? 'gray'](`[ ${now} ]`);

    // Apply the given color to the title.
    title = title ? chalk[colors.title ?? 'gray'](`${title}: `) : '';

    // Apply the given color to the message.
    message = chalk[colors.message ?? 'white'](message);

    // Format the message.
    message = `${date} ${title}${message}`;

    console.log(message);

    // If the user allows us to, save the message into
    // a file in the wanted directory for logs. Before writing the
    // contents, we remove all color/ANSI codes from the message.
    if (this.options.write) {
      appendFileSync(`${this.options.dir}/${now.split(' ')[0]}.txt`, `${message.replace(this.regex, '')}\n`);
    }
  }

  /**
   * A shortcut to output an error,
   * the title is 'ERROR' and is the color red.
   * @param message The message to print.
   */
  public error(message: string): void {
    this.print(message, 'ERROR', { title: 'red' });
  }

  /**
   * A shortcut to output a success,
   * the title is 'OK' and is the color green.
   * @param message The message to print.
   */
  public success(message: string): void {
    this.print(message, 'OK', { title: 'green' });
  }

  /**
   * A shortcut to output a warning,
   * the title is 'WARN' and is the color yellow.
   * @param message The message to print.
   */
  public warn(message: string): void {
    this.print(message, 'WARN', { title: 'yellow' });
  }

  /**
   * A shortcut to output a message to simply log,
   * the title is 'LOG' and is the color blue.
   * @param message The message to print.
   */
  public log(message: string): void {
    this.print(message, 'LOG', { title: 'blue' });
  }
}

export { Logger };
