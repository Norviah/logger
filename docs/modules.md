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

## Type aliases

### Color

Ƭ **Color**: typeof `Color`

Represents the colors that `logger` supports.
As `chalk` is used to output color, the supported colors are from `chalk`.

#### Defined in

types/Color.ts:7

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

types/DeepPartial.ts:41

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
| `T` | extends `Record`<`string`, `any`\> | The interface to construct from, ensuring all levels are required. |

#### Defined in

types/DeepRequired.ts:45

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

[util/markdown.ts:8](https://github.com/Norviah/logger/blob/6d4b76d/src/util/markdown.ts#L8)
