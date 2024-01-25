import * as formatters from './formatter';

const TOKEN_EXPRESSION = /\[([^[\]]|\[[^[\]]*])*]|([A-Za-z])\2+|\.{3}|./g;

/**
 * Tokenizes the provided string to split the string by alphanumeric
 * characters separated by non-alphanumeric characters.
 *
 * @param string The string to be tokenized.
 * @returns An array of tokens extracted from the string.
 * @example
 * ```ts
 * tokenize("YYYY-MM-DD HH:mm:ss"); // => ['YYYY', '-', 'MM', '-', 'DD', ' ', 'HH', ':', 'mm', ':', 'ss']
 * ```
 */
function tokenize(string: string): string[] {
  let keys: RegExpExecArray | null;
  const tokens: string[] = [];

  while ((keys = TOKEN_EXPRESSION.exec(string))) {
    tokens.push(keys[0]);
  }

  return tokens;
}

/**
 * Formats the provided date with the given format.
 *
 * In order to format the date, the function first converts the format string
 * into tokens, with each token being either a non-alphanumeric character or a
 * sequence of alphanumeric characters. From each token, it is then determined
 * if the token is a valid formatter, if so, the respective method is called.
 *
 * The logic is insipired from the `date-and-time` package. For a more detailed
 * of available formatters, follow the link below.
 *
 * @see https://www.npmjs.com/package/date-and-time#formatdateobj-arg-utc
 * @param date The date to format.
 * @param format The string of tokens to replace with date values.
 * @returns The formatted date.
 * @example
 * ```ts
 * format(new Date(), "YYYY-MM-DD HH:mm:ss"); // => "2024-01-24 16:33:49"
 * ```
 */
export function formatDate(date: Date, format: string): string {
  const tokens: string[] = tokenize(format);
  const result: string[] = [];

  for (const token of tokens) {
    if (token in formatters) {
      result.push(formatters[token as keyof typeof formatters](date));
    } else {
      result.push(token);
    }
  }

  return result.join('');
}
