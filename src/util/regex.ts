/**
 * Matches any ANSI codes within a string.
 *
 * As `Logger` uses `chalk` to apply markdown or color when logging, it does so
 * via ANSI codes. However, when saving logs into a file, those same ANSI codes
 * aren't needed and should be gone, this expression helps remove those any ANSI
 * codes from a string.
 */
export const ansi: RegExp = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;

/**
 * A log is split into three different sections:
 * - the date,
 * - the title, and
 * - the content
 *
 * For each section, there exists a string within `Format` to represent the
 * generated structure desired for each section. Due to this, there must exists
 * a way to find and determine where to place each section in the resulting
 * generated string to print within `Logger.generate`.
 *
 * `log` helps with this problem as it contains regular expressions used to
 * determine where to place section. In `Format`, these special characters
 * can be placed anywhere and is ultimately replaced with what that character
 * represents.
 */
export const log = { title: /%t/g, date: /%d/g, content: /%c/g };
