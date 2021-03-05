/**
 * Represents options to use when writing a log to a file.
 */
export interface WriteOptions {
  /**
   * The name of the file that the log will be saved under, defaults to the
   * current date in the format: MM-DD-YYYY.
   */
  name: string;

  /**
   * The title for the log, if absent, the log won't have a title.
   */
  title: string;

  /**
   * If provided, the log will be written into this sub-directory, in the base
   * directory. If the sub-directory, or sub-directories, doesn't exist, it's
   * created recursively.
   */
  subDir: string;

  /**
   * If a sub-directory is given, this flag determines if this log should be
   * saved to the base directory as well.
   */
  both: boolean;
}
