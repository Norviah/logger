[@norviah/logger](README.md) / Exports

# @norviah/logger

## Table of contents

### Classes

- [Logger](classes/Logger.md)

### Interfaces

- [ColorOptions](interfaces/ColorOptions.md)
- [Format](interfaces/Format.md)
- [LoggingOptions](interfaces/LoggingOptions.md)
- [Options](interfaces/Options.md)
- [WriteOptions](interfaces/WriteOptions.md)

### Type aliases

- [Color](modules.md#color)
- [DeepPartial](modules.md#deeppartial)
- [DeepRequired](modules.md#deeprequired)

### Variables

- [markdown](modules.md#markdown)

### Functions

- [deconstruct](modules.md#deconstruct)

## Type aliases

### Color

Ƭ **Color**: typeof `Color`

Represents the colors that `logger` supports.
As `chalk` is used to output color, the supported colors are from `chalk`.

#### Defined in

[types/Color.ts:7](https://github.com/Norviah/logger/blob/8321782/src/types/Color.ts#L7)

___

### DeepPartial

Ƭ **DeepPartial**<`T`\>: { [K in keyof T]?: Record<any, any\> extends T[K] ? DeepPartial<T[K]\> : Partial<T[K]\> }

Constructs a type with all properties of `T` set to optional.
Comparing from `Partial<T>`, `Partial` only sets the properties within the
first level to optional, ignoring any greater levels. `DeepPartial<T>`
extends off of `Partial`, or has a similar effect, but instead applies on
every level within the given generic parameter.

**`example`**
```TypeScript
// We'll follow the same example for `DeepRequired<T>`.
// This interface describes useful information regarding an employer.
// Albeit this time, all properties are required.

interface Employer {
  id: number;
  info?: { department: string };
}

// Of course if we were to initialize an instance of `Partial<Employer>`, all
// first level properties are optional. However, if the `info` property is
// specified, all properties for `info` must be set.

const employer: Partial<Employer> = {
  info: {},
};

// Due to `Partial<T>` only acting on the first level, all deeper levels are
// ignored. Here is where `DeepPartial<T>` comes in, given an interface,
// `DeepPartial` sets properties in all levels to optional.

// If we were to copy the example above, with the type
// `DeepPartial<Employer>`, a compile error wouldn't be thrown.

const employer: DeepPartial<Employer> = {
  id: 2,
  info: {},
};
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> | The interface to construct from. |

#### Defined in

[types/DeepPartial.ts:40](https://github.com/Norviah/logger/blob/8321782/src/types/DeepPartial.ts#L40)

___

### DeepRequired

Ƭ **DeepRequired**<`T`\>: { [K in keyof T]-?: Record<string, any\> extends T[K] ? DeepRequired<T[K]\> : T[K] }

The `Required<T>` type within TypeScript constructs a type consisting of all
types within `T` to be required, however, it's only one level deep. Only the
first level is required to have a value, `DeepRequired<T>` ensures that,
given an interface, all properties, both primitive and other interfaces, are
required to have a value set.`

**`example`**
```TypeScript
// As an example, let's construct an interface describing an employer at a
// a random job. Within this interface, we'll have properties that may be
// useful to describe an employer, along with other, optional, useful
// properties.

interface Employer {
  id: number;
  info?: { department?: string };
}

// Here, `info` represents any additional information regarding an employer
// that may be useful for whatever situation. If we were to initialize an
// instance of `Required<Employer>`, `info` must be set as it is required due
// to `Required`.

const employer: Required<Employer> = {
  id: 1,
  info: {},
};

// Due to `Required<T>`, `info` must be set but it doesn't care whether if
// the properties of `info` is specified or not. Here is where
// `DeepRequired<T>` comes into play, as it enforces all properties within
// all levels to be set.

const employer: DeepRequired<Employer> = {
  id: 1,
  info: {},
};

// This instance raises an error as the properties within `info` must be
// specified, regardless of the desired type.
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> | The interface to construct from, ensuring all levels are set. |

#### Defined in

[types/DeepRequired.ts:44](https://github.com/Norviah/logger/blob/8321782/src/types/DeepRequired.ts#L44)

## Variables

### markdown

• **markdown**: `Object`

Represents the supported markdown syntax for logging.
Each desired effect contains an regular expression that matches the desired
markdown syntax, along with the function from `chalk` to apply.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bold` | `Object` |
| `bold.exec` | `Chalk` |
| `bold.expression` | `RegExp` |
| `inverse` | `Object` |
| `inverse.exec` | `Chalk` |
| `inverse.expression` | `RegExp` |
| `italic` | `Object` |
| `italic.exec` | `Chalk` |
| `italic.expression` | `RegExp` |
| `strikethrough` | `Object` |
| `strikethrough.exec` | `Chalk` |
| `strikethrough.expression` | `RegExp` |
| `underline` | `Object` |
| `underline.exec` | `Chalk` |
| `underline.expression` | `RegExp` |

#### Defined in

[util/markdown.ts:8](https://github.com/Norviah/logger/blob/8321782/src/util/markdown.ts#L8)

## Functions

### deconstruct

▸ **deconstruct**<`T`\>(`required`, `partial`): [`DeepRequired`](modules.md#deeprequired)<`T`\>

Applies the spread syntax for objects in all levels.
In JavaScript, the `spread` syntax allows an iterable expression to be
expanded onto places where arguments are expected. An example are arrays,
`[ ...array ]` can be used to initialize a copy of an existing array.

The `spread` syntax applies to objects as well, albeit it works a bit
different. Once two objects are spread into an object,
`{ ...object, ...object }` for example, the properties of the first object
are applied and the properties of the second object are applied on top. If
both objects contains a property that is an object, the property from the
second object is used, regardless if the two set objects contains the same
properties or not.

`deconstruct` aims to apply the spread syntax on all levels from both
specified objects, thus allowing properties from the second object to
override the set values from the first object and allowing properties that
weren't touched within the second object to exist.

**`example`**
```TypeScript
// To portray how spreading works over objects, we'll initialize an interface
// regarding options, loosely similar to expected options for `Logger`.

interface Options {
  format?: { date?: string; title?: string; format?: string };
}

// Here we initialize default values for options.
// We'll initialize an instance through `DeepRequired<T>`, ensuring
// properties in all levels are set.

const defaults: DeepRequired<Options> = {
  format: { date: '[ MMMM dddd ]', title: '%t: ', format: '%d %t%m' },
};

// During the constructor for `Logger`, a partial instance of `Options` is
// passed to reference any specified values. Let's assume that this instance
// represents the passed object.

const specified: DeepPartial<Options> = {
  format: { date: '[ L ]' },
};

// The passed options override `format.date`.
// In the constructor of `Logger`, we want to reference default options along
// with any passed options, however, if we use the spread syntax, the
// applied properties are only first level.

const options = { ...defaults, ...specified };

// If we were to observe the contents of `options`, we would see:
// `{ format: { date: '[ L ]' } }`
// As the spread syntax only applies on the first level, the other contents
// of `defaults.format` is gone as it's overridden.

// `deconstruct` aims to solve this by overriding properties per level.
// Given two objects, the first consisting of default values and the other
// representing values to override, `deconstruct` iterates through every
// level and overwrites any specified values from the latter object.

// With the same example, if we were to use `deconstruct` instead, i.e.

const options = deconstruct<Options>(defaults, specified);

// We would get:
// `{ format: { date: '[ L ]', title: '%t: ', format: '%d %t%m' } }`
```

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> | The interface representing the structure for each object. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | [`DeepRequired`](modules.md#deeprequired)<`T`\> | An instance of `T` with all properties set. |
| `partial` | [`DeepPartial`](modules.md#deeppartial)<`T`\> | An instance of `T` to override any values within `required`. |

#### Returns

[`DeepRequired`](modules.md#deeprequired)<`T`\>

A copy of `required` with any values overridden by `partial`.

#### Defined in

[util/deconstruct.ts:76](https://github.com/Norviah/logger/blob/8321782/src/util/deconstruct.ts#L76)
