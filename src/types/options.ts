export interface Options {
  /**
   * Determines if logs should be written to a file.
   */
  write: boolean;

  /**
   * Represents the directory that logs will be saved to.
   */
  dir: string;

  /**
   * Represents the default name of the file that logs will be saved in.
   */
  name?: string;

  /**
   * Represents the format for the date, in Unix format.
   */
  date: string;

  /**
   * Represents the format for the title,
   * %t => the title.
   */
  title: string;

  /**
   * Represents the format for a log,
   * %d => the date,
   * %t => the title, and
   * %m => the message to log.
   */
  log: string;
}
