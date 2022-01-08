/**
 * Constructs a type with all properties of `T` set to optional.
 * Comparing from `Partial<T>`, `Partial` only sets the properties within the
 * first level to optional, ignoring any greater levels. `DeepPartial<T>`
 * extends off of `Partial`, or has a similar effect, but instead applies on
 * every level within the given generic parameter.
 * @typeParam T The interface to construct from.
 * @example
 * ```TypeScript
 * // We'll follow the same example for `DeepRequired<T>`.
 * // This interface describes useful information regarding an employer.
 * // Albeit this time, all properties are required.
 *
 * interface Employer {
 *   id: number;
 *   info?: { department: string };
 * }
 *
 * // Of course if we were to initialize an instance of `Partial<Employer>`, all
 * // first level properties are optional. However, if the `info` property is
 * // specified, all properties for `info` must be set.
 *
 * const employer: Partial<Employer> = {
 *   info: {},
 * };
 *
 * // Due to `Partial<T>` only acting on the first level, all deeper levels are
 * // ignored. Here is where `DeepPartial<T>` comes in, given an interface,
 * // `DeepPartial` sets properties in all levels to optional.
 *
 * // If we were to copy the example above, with the type
 * // `DeepPartial<Employer>`, a compile error wouldn't be thrown.
 *
 * const employer: DeepPartial<Employer> = {
 *   id: 2,
 *   info: {},
 * };
 * ```
 */
export type DeepPartial<T extends Record<string, any>> = {
  [K in keyof T]?: Record<any, any> extends T[K] ? DeepPartial<T[K]> : Partial<T[K]>;
};
