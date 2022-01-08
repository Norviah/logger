import { DeepRequired } from '../types/DeepRequired';
import { DeepPartial } from '../types/DeepPartial';

/**
 * Applies the spread syntax for objects in all levels.
 * In JavaScript, the `spread` syntax allows an iterable expression to be
 * expanded onto places where arguments are expected. An example are arrays,
 * `[ ...array ]` can be used to initialize a copy of an existing array.
 *
 * The `spread` syntax applies to objects as well, albeit it works a bit
 * different. Once two objects are spread into an object,
 * `{ ...object, ...object }` for example, the properties of the first object
 * are applied and the properties of the second object are applied on top. If
 * both objects contains a property that is an object, the property from the
 * second object is used, regardless if the two set objects contains the same
 * properties or not.
 *
 * `deconstruct` aims to apply the spread syntax on all levels from both
 * specified objects, thus allowing properties from the second object to
 * override the set values from the first object and allowing properties that
 * weren't touched within the second object to exist.
 * @typeParam T    The interface representing the structure for each object.
 * @param required An instance of `T` with all properties set.
 * @param partial  An instance of `T` to override any values within `required`.
 * @return         A copy of `required` with any values overridden by `partial`.
 * @example
 * ```TypeScript
 * // To portray how spreading works over objects, we'll initialize an interface
 * // regarding options, loosely similar to expected options for `Logger`.
 *
 * interface Options {
 *   format?: { date?: string; title?: string; format?: string };
 * }
 *
 * // Here we initialize default values for options.
 * // We'll initialize an instance through `DeepRequired<T>`, ensuring
 * // properties in all levels are set.
 *
 * const defaults: DeepRequired<Options> = {
 *   format: { date: '[ MMMM dddd ]', title: '%t: ', format: '%d %t%m' },
 * };
 *
 * // During the constructor for `Logger`, a partial instance of `Options` is
 * // passed to reference any specified values. Let's assume that this instance
 * // represents the passed object.
 *
 * const specified: DeepPartial<Options> = {
 *   format: { date: '[ L ]' },
 * };
 *
 * // The passed options override `format.date`.
 * // In the constructor of `Logger`, we want to reference default options along
 * // with any passed options, however, if we use the spread syntax, the
 * // applied properties are only first level.
 *
 * const options = { ...defaults, ...specified };
 *
 * // If we were to observe the contents of `options`, we would see:
 * // `{ format: { date: '[ L ]' } }`
 * // As the spread syntax only applies on the first level, the other contents
 * // of `defaults.format` is gone as it's overridden.
 *
 * // `deconstruct` aims to solve this by overriding properties per level.
 * // Given two objects, the first consisting of default values and the other
 * // representing values to override, `deconstruct` iterates through every
 * // level and overwrites any specified values from the latter object.
 *
 * // With the same example, if we were to use `deconstruct` instead, i.e.
 *
 * const options = deconstruct<Options>(defaults, specified);
 *
 * // We would get:
 * // `{ format: { date: '[ L ]', title: '%t: ', format: '%d %t%m' } }`
 * ```
 */
export function deconstruct<T extends Record<string, any>>(required: DeepRequired<T>, partial: DeepPartial<T>): DeepRequired<T> {
  // We'll initialize a new object referencing `required` properties along with
  // properties set within `partial`.
  const result: Record<string, any> = { ...required, ...partial };

  // As the spread syntax only applies on the first level, we'll manually apply
  // it for every level. We'll iterate through each key within `required` and
  // check whether if the key is an object.

  // If the key does represent an object, we'll recursively call `deconstruct`
  // within the key's level, setting the key to the evaluated object. Through
  // recursive, we can ensure that every property within `T` has a value set,
  // either from `required` or `partial`.

  // When recursively calling the function, we'll need to opt for an empty
  // object, as `partial` may have the key not set at all.

  for (const key in result) {
    if (result[key].constructor === Object) {
      result[key] = deconstruct<T[keyof T]>(required[key], partial[key] ?? {});
    }
  }

  return result as DeepRequired<T>;
}
