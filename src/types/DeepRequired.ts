/**
 * The `Required<T>` type within TypeScript constructs a type consisting of all
 * types within `T` to be required, however, it's only one level deep. Only the
 * first level is required to have a value, `DeepRequired<T>` ensures that,
 * given an interface, all properties, both primitive and other interfaces, are
 * required to have a value set.`
 * @typeParam T The interface to construct from, ensuring all levels are set.
 * @example
 * ```TypeScript
 * // As an example, let's construct an interface describing an employer at a
 * // a random job. Within this interface, we'll have properties that may be
 * // useful to describe an employer, along with other, optional, useful
 * // properties.
 *
 * interface Employer {
 *   id: number;
 *   info?: { department?: string };
 * }
 *
 * // Here, `info` represents any additional information regarding an employer
 * // that may be useful for whatever situation. If we were to initialize an
 * // instance of `Required<Employer>`, `info` must be set as it is required due
 * // to `Required`.
 *
 * const employer: Required<Employer> = {
 *   id: 1,
 *   info: {},
 * };
 *
 * // Due to `Required<T>`, `info` must be set but it doesn't care whether if
 * // the properties of `info` is specified or not. Here is where
 * // `DeepRequired<T>` comes into play, as it enforces all properties within
 * // all levels to be set.
 *
 * const employer: DeepRequired<Employer> = {
 *   id: 1,
 *   info: {},
 * };
 *
 * // This instance raises an error as the properties within `info` must be
 * // specified, regardless of the desired type.
 * ```
 */
export type DeepRequired<T extends Record<string, any>> = {
  [K in keyof T]-?: Record<string, any> extends T[K] ? DeepRequired<T[K]> : T[K];
};
