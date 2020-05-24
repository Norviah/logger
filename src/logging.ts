import { Colors } from './colors';

/**
 * Options to use when logging.
 */
type LoggingOptions = {
  /**
   * Represents the name of the file that Logger
   * will write to, defaults to 'MM-DD-YYYY'.
   */
  name?: string;

  /**
   * The log will be written in this sub-directory in the base directory.
   * If the sub-directory(ies) doesn't exist, it's created recursively,
   * meaning that if 'base/sub/sub' is given, 'base' will be created if it doesn't,
   * then 'sub' will be created in 'sub', and then 'sub' will be created in 'base/sub'.
   */
  subDir?: string;

  /**
   * The title of the log, if absent, the log will not have a title.
   */
  title?: string;

  /**
   * Represents the colors used for certain parts of the log.
   * The supported colors are the colors supported by Chalk, which can be viewed here:
   * https://github.com/chalk/chalk/blob/55816cdd4d25a86cc35b18e1e578a5b164f71aee/index.d.ts#L56.
   */
  colors?: Colors;
};

export { LoggingOptions };
