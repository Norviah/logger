/**
 * Options to use when initializing a new instance.
 */
type Options = {
  /**
   * Determines if Logger should write to a file.
   */
  write?: boolean;

  /**
   * Represents the absolute path that Logger will
   * write logs into, if a directory isn't given,
   * the directory 'logs' in the project's root will be used.
   */
  dir?: string;
};

export { Options };
