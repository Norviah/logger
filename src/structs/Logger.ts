import { appendFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { Spacetime } from 'spacetime';

import { DeepPartial } from '../types/DeepPartial';
import { DeepRequired } from '../types/DeepRequired';

import { Color } from '../types/Color';
import { ColorOptions } from '../types/ColorOptions';
import { LoggingOptions } from '../types/LoggingOptions';
import { Options } from '../types/Options';

import { deconstruct } from '../util/deconstruct';
import { format } from '../util/format';

import * as spacetime from 'spacetime';
import * as defaults from '../util/default';
import * as regex from '../util/regex';

/**
 * A simple logging system for TypeScript.
 * In tandem with `chalk`, `Logger` outputs information in an organized, and
 * colorful, manner with consistent structure.
 *
 * Logging is conceptualized into three sections:
 * - the date,
 * - the title,
 * - and the contents to print.
 *
 * Through the `format` property of `Options`, the generated output for logs can
 * be manipulated to a desired format. Additionally, a few markdown syntax are
 * supported as well:
 * - **bold**: `**[string]**`,
 * - ~~strikethrough~~: `~~[string]~~`,
 * - *italics*: `*[string]*`,
 * - __underline__: `__[string]__`, and
 * - `!![string]!!`, which inverses the foreground and background color.
 *
 * Wrap any text when printing, or within the properties of `Format` as
 * well, and the desired syntax is applied to the wrapped text.
 */
export class Logger {
  /**
   * Options to reference when logging.
   * Represents default options along with specific options overridden within
   * the constructor.
   */
  public options: DeepRequired<Options>;

  /**
   * Initializes a new `Logger` instance.
   * @param options Default options to reference when logging.
   * @example
   * ```TypeScript
   * // Within the constructor for `Logger`, `Option` is used to set default
   * // options to reference when logging in addition to setting any desired
   * // functionality during logging.
   *
   * // As logging is split into three separate sections, through
   * // `Options.color`, you can specify the color to print each section as.
   * // All options are optional and any missing properties is filled in with
   * // default values.
   *
   * new Logger({ colors: { title: 'red', } });
   *
   * // With this example, anytime the `print` method is called and a `title` is
   * // specified, said title will have the color `red`, assuming that the color
   * // doesn't get overridden.
   *
   * // `options.color` represents default values to opt to when logging, as for
   * // properties representing functionality, we have `options.write`. If set
   * // to `true`, every time the `print` method is called, the log is
   * // also saved into a file.
   *
   * // You can go a bit further in where the file is saved to and as within
   * // `LoggingOptions`, or specifically, `WriteOptions`.
   *
   * new Logger({ write: true, });
   * ```
   */
  public constructor(options: DeepPartial<Options> = defaults.options) {
    // Here we'll set given options into the `Logger` instance, calling
    // `deconstruct<Options>` to ensure that all levels contains a reference to
    // either default values or specified values within `options`.
    this.options = deconstruct<Options>(defaults.options, options);

    if (options.write && !existsSync(this.options.dir)) {
      mkdirSync(this.options.dir, { recursive: true });
    }
  }

  /**
   * A helper method for printing logs.
   *
   * As logs are split into three separate functions, `generate` helps combine
   * them, ultimately generating a string representing all three sections. Each
   * section:
   * - the date,
   * - the title,
   * - and the contents
   *
   * are all ran through its specific formatter. For example, for dates, a new
   * instance of `spacetime` is initialized. For titles, any instances of `%t`
   * within `Format.title` is replaced with the specified title, or an empty
   * string if no title is set.
   *
   * After generating the three sections, `generate` combines them using the
   * general format within `Format` and returns the result.
   * @param content The contents of the log.
   * @param options Options for logging.
   * @return        A generated string adhering to the desired format of a log.
   * @example
   * ```TypeScript
   * // With `generate`, it takes the desired `Format` instance, replaces the
   * // special characters with the date, title, and content, applies any colors
   * // and markdown syntax, and finally returns the result.
   *
   * // As an example, let's say we have set the desired format into:
   * // {
   * //   date: '[ MM-dd-yyyy h:mm a ]',
   * //   title: '%t: ',
   * //   general: '%d %t%c',
   * // }
   *
   * // If we were to call the `print` method as:
   * // print('world', { title: 'hello' }), it would call `generate` with the
   * // same parameters, and would go through each property within `format` and
   * // generate a string regarding that property.
   *
   * // With the given options, `generate` would return:
   * // `[ 01-01-1970 12:00 AM ] hello: world`
   * ```
   */
  public generate(content: string, options: Partial<LoggingOptions> = { colors: this.options.colors }): string {
    // First, we'll get the default colors for aspects of logs in addition to
    // any overridden colors specified within `options`.
    const colors: Required<ColorOptions> = { ...this.options.colors, ...options.colors };

    // We'll then initialize a new `Dayjs` instance representing the current
    // time, through this instance is how we'll format the date.
    const now: Spacetime = spacetime.default.now();

    // References the current date, formatted to the likings specified within
    // the initialized options. Here we use `Dayjs` to format the given date
    // using a unix-like `date` formatting.
    const date: string = format(now.unixFmt(this.options.format.date), colors.date);

    // References the title of the log.
    // If a title isn't specified, then the log won't have a title set.
    // The title, if one is specified, is ran through the desired format for
    // titles and also through the `format` function.
    const title: string = options.title ? format(this.options.format.title.replace(regex.log.title, options.title), colors.title) : '';

    // As for the actual contents of the log, we'll simply override the existing
    // reference with the result of `format`.
    content = format(content, colors.content);

    return this.options.format.general.replace(regex.log.date, date).replace(regex.log.title, title).replace(regex.log.content, content);
  }

  /**
   * Prints the given content to the console.
   *
   * The main function for `Logger`, `print` is the main entry point to
   * logging into the console. Outputted logs are formatted to adhere to the
   * format specified within `Format` in `Options` during initialization,
   * or the default format.
   *
   * Through `options`, you're able to change certain output of the log,
   * for example, colors. As logs are separated within three sections, if
   * desired, you can specify the colors for each section within
   * `options.colors`.
   *
   * Speaking of sections of a log, the sections of a log are:
   * - the date,
   * - the title,
   * - and the content
   *
   * As the `date` is handled within `Options` during the constructor, we don't
   * have to worry about that. As for the `title`, that can be set within
   * `options`. Titles for logs are always optional and is ignored within the
   * output if a `title` isn't set.
   *
   * Additionally, markdown syntax are supported.
   * Within `content` or `options.title`, you can specify one or more of the
   * following markdown syntax:
   * - **bold**: `**[string]**`,
   * - ~~strikethrough~~: `~~[string]~~`,
   * - *italics*: `*[string]*`,
   * - __underline__: `__[string]__`, and
   * - `!![string]!!`, which inverses the foreground and background color.
   *
   * The desired syntax is applied to the wrapped strings.
   * @param content The content of the log.
   * @param options Options for logging.
   */
  public print(content: string, options: Partial<LoggingOptions> = { colors: this.options.colors }): void {
    // We'll use the helper method to generate the log.
    const log: string = this.generate(content, options);

    console.log(log);

    // If the user wishes, we'll save this log into a file.
    if (options.write ?? this.options.write) {
      this.write(content, options);
    }
  }

  /**
   * Writes the given contents into a file.
   *
   * As `Logger` can optionally save logs into a file, determined by the `write`
   * property within `Options`, this method is called under the hood to save the
   * specified log into a file. Given the contents and options, the generated
   * log that would be printed, is rather saved into the specified file.
   *
   * As always, this method exists if you would like to save a log into a file,
   * regardless if the `write` property is set to true within the constructor.
   * @param content The contents of the log.
   * @param options Options for logging.
   * @example
   * ```TypeScript
   * import { Logger } from '@norviah/logger';
   *
   * // For this example, we'll initialize a new instance of `Logger` without
   * // providing any options. By default, any printed logs won't be saved into
   * // a file.
   *
   * const logger: Logger = new Logger();
   *
   * logger.print('world', { title: 'hello' });
   * // This would simply print out:
   * // [ 01-01-1970 12:00 AM ] hello: world
   *
   * // No logs are saved due to `write` being false.
   * // However, if `write` were to be set to `true`, it would save files by
   * // calling the `write` method under the hood.
   *
   * // This method is always available to you, allowing you to save logs into
   * // files regardless of what `write` was set to during the constructor.
   * // `write` accepts the same parameters as the `print` method, calling the
   * // same generator method but instead saving the log into a file.
   *
   * logger.write('world', { title: 'hello' });
   *
   * // By default, logs are saved into the `logs` subdirectory within your
   * // projects root directory under the file `MM-DD-YYYY.txt`. If wanted, you
   * // can change the filename using the `name` property:
   *
   * logger.write('hello world', { name: 'hello world' });
   *
   * // This log would be saved under `logs/hello world.txt`.
   * // There's other options available regarding writing logs within the
   * // `LoggingOptions` interface, as it inherits `WriteOptions`.
   * ```
   */
  public write(content: string, options: Partial<LoggingOptions> = { colors: this.options.colors }): void {
    // First, we'll use the helper method to generate the log if it were to be
    // printed. From the result, we'll remove any ANSI codes as those values
    // aren't necessary when saving the log into a file.
    const log: string = `${this.generate(content, options).replace(regex.ansi, '')}\n`;

    // Next, we'll initialize a new `Dayjs` instance to reference the time.
    // Through this reference we'll be able to get the current date to save the
    // log into, if a name hasn't been specified.
    const now: Spacetime = spacetime.default.now();

    // References the directory to save the log into.
    // If a subdirectory is given, we'll save into that instead.
    const dir: string = options.subDir ? join(this.options.dir, options.subDir) : this.options.dir;

    if (options.subDir && !existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    // The name of the file to save the log into.
    // If a name isn't specified, we'll opt to use the current date.
    const name: string = `${options.name ?? now.unixFmt('MM-dd-YYYY')}.txt`;

    appendFileSync(join(dir, name), log);

    // If a subdirectory was given, we'll check whether if the user wants to
    // save the log into the root directory as well.
    if (options.subDir && (options.both ?? this.options.both)) {
      appendFileSync(join(this.options.dir, name), log);
    }
  }

  /**
   * A helper method to print an error.
   * The title is manually set to `error` with the color set to `red`.
   * @param content The content of the log.
   * @param options Options for logging.
   * @example
   * ```TypeScript
   * import { Logger } from '@norviah/logger';
   *
   * new Logger().error('sample text');
   * // => [ 01-01-1970 12:00 AM ] error: sample text
   * ```
   */
  public error(content: string, options?: Partial<LoggingOptions>): void {
    this.print(content, { title: 'error', ...options, colors: { title: 'red', ...options?.colors } });
  }

  /**
   * A helper method to print a success.
   * The title is set to `ok` with the color set to `green`.
   * @param content The content of the log.
   * @param options Options for logging.
   * @example
   * ```TypeScript
   * import { Logger } from '@norviah/logger';
   *
   * new Logger().success('sample text');
   * // => [ 01-01-1970 12:00 AM ] ok: sample text
   * ```
   */
  public success(content: string, options?: Partial<LoggingOptions>): void {
    this.print(content, { title: 'ok', ...options, colors: { title: 'green', ...options?.colors } });
  }

  /**
   * A helper method to print a warning.
   * The title is set to `warning` with the color set to `yellow`.
   * @param content The content of the log.
   * @param options Options for logging.
   * @example
   * ```TypeScript
   * import { Logger } from '@norviah/logger';
   *
   * new Logger().warn('sample text');
   * // => [ 01-01-1970 12:00 AM ] warning: sample text
   * ```
   */
  public warn(content: string, options?: Partial<LoggingOptions>): void {
    this.print(content, { title: 'warning', ...options, colors: { title: 'yellow', ...options?.colors } });
  }

  /**
   * A helper method to print information.
   * The title is set to `info` with the color set to `blue`.
   * @param content The content of the log.
   * @param options Options for logging.
   * @example
   * ```TypeScript
   * import { Logger } from '@norviah/logger';
   *
   * new Logger().info('sample text');
   * // => [ 01-01-1970 12:00 AM ] info: sample text
   * ```
   */
  public info(content: string, options?: Partial<LoggingOptions>): void {
    this.print(content, { title: 'info', ...options, colors: { title: 'blue', ...options?.colors } });
  }

  /**
   * Applies the specified color to the string.
   * In addition, any markdown syntax specified is also applied.
   * @param color  The desired color to apply.
   * @param string The string to apply the color to.
   * @return       `string` with the desired color applied.
   * @example
   * ```TypeScript
   * import { Logger } from '@norviah/logger';
   *
   * const logger: Logger = new Logger();
   * logger.colorize('red', 'hello world');
   * // => <red>hello world</red>
   * ```
   */
  public colorize(color: Color, string: string): string {
    return format(string, color);
  }

  /**
   * Applies the specified color to the string and prints it to the console.
   * @param color  The color to apply.
   * @param string The string to print, with the desired color applied.
   */
  public color(color: Color, string: string): void {
    console.log(this.colorize(color, string));
  }
}
