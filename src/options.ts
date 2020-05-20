type Options = {
  /**
   * Determines if Logger should write to a file as well.
   */
  write?: boolean;

  /**
   * Represents the absolute path that Logger
   * will write logs into. Defaults to '$root/logs'.
   */
  dir?: string;
};

export { Options };
