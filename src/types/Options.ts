import { ColorOptions } from './ColorOptions';
import { Format } from './Format';

export interface Options {
  /**
   * By default, `Logger` only prints contents into the console, the `write`
   * method does serve the purpose to save logs into a file, however it must be
   * purposely called.
   *
   * If desired, `write` can be set to `true` to save all logs into a file.
   * Whenever the `Logger.print` method is called, either direct or indrect,
   * the outputted log is saved into a text file.
   */
  write?: boolean;

  /**
   * If `write` is `true`, this property determines the directory to save logs
   * into. Defaults to `logs/` within the project's root directory.
   */
  dir?: string;

  /**
   * If `write` is set, all logs are saved into a text file under `dir`. Within
   * `LoggingOptions`, it's possible to save specific logs further in a
   * subdirectory within the root directory `dir`. Also available within
   * `LoggingOptions`, when logs are saved under a subdirectory, `both` can be
   * used to save a log into both the specified subdirectory and the root
   * directory.
   */
  both?: boolean;

  /**
   * A log has three different sections,
   * - the date,
   * - the title,
   * - and the actual contents to print.
   * Through `format`, you can customize the generated format for a log, all
   * logs are executed trough the desired format.
   */
  format?: Format;

  /**
   * If desired, you can set the color for different aspects of a log.
   * `Logger` uses `chalk` to generate colors, thus valid colors are the colors
   * that `chalk` supports.
   */
  colors?: ColorOptions;
}
