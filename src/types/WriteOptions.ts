export interface WriteOptions {
  /**
   * The name of the file that logs will be saved into.
   * If not provided, logs will be saved as `MM-DD-YYYY.txt`.
   */
  name?: string;

  /**
   * If provided, logs will be saved into this subdirectory,
   * or multiple, within the root dir for logs provided within
   * `LoggingOptions`,
   */
  subDir?: string;

  /**
   * If `WriteOptions.subDir` is specified, this property determines if a
   * log should be saved within the root directory and any subdirectories.
   */
  both?: boolean;

  /**
   * Determines if a specific log should be saved into a file.
   * Overrides the value set within `Options`.
   */
  write?: boolean;
}
