[@norviah/logger](../README.md) / [Exports](../modules.md) / LoggingOptions

# Interface: LoggingOptions

## Hierarchy

- [`WriteOptions`](WriteOptions.md)

  ↳ **`LoggingOptions`**

## Table of contents

### Properties

- [both](LoggingOptions.md#both)
- [colors](LoggingOptions.md#colors)
- [name](LoggingOptions.md#name)
- [subDir](LoggingOptions.md#subdir)
- [title](LoggingOptions.md#title)
- [write](LoggingOptions.md#write)

## Properties

### both

• `Optional` **both**: `boolean`

If `WriteOptions.subDir` is specified, this property determines if a
log should be saved within the root directory and any subdirectories.

#### Inherited from

[WriteOptions](WriteOptions.md).[both](WriteOptions.md#both)

#### Defined in

[types/WriteOptions.ts:19](https://github.com/Norviah/logger/blob/8321782/src/types/WriteOptions.ts#L19)

___

### colors

• `Optional` **colors**: [`ColorOptions`](ColorOptions.md)

Represents colors to apply for different aspects of a log.

#### Defined in

[types/LoggingOptions.ts:8](https://github.com/Norviah/logger/blob/8321782/src/types/LoggingOptions.ts#L8)

___

### name

• `Optional` **name**: `string`

The name of the file that logs will be saved into.
If not provided, logs will be saved as `MM-DD-YYYY.txt`.

#### Inherited from

[WriteOptions](WriteOptions.md).[name](WriteOptions.md#name)

#### Defined in

[types/WriteOptions.ts:6](https://github.com/Norviah/logger/blob/8321782/src/types/WriteOptions.ts#L6)

___

### subDir

• `Optional` **subDir**: `string`

If provided, logs will be saved into this subdirectory,
or multiple, within the root dir for logs provided within
`LoggingOptions`,

#### Inherited from

[WriteOptions](WriteOptions.md).[subDir](WriteOptions.md#subdir)

#### Defined in

[types/WriteOptions.ts:13](https://github.com/Norviah/logger/blob/8321782/src/types/WriteOptions.ts#L13)

___

### title

• `Optional` **title**: `string`

The title of a log.
If not specified, a log won't have a title.

#### Defined in

[types/LoggingOptions.ts:14](https://github.com/Norviah/logger/blob/8321782/src/types/LoggingOptions.ts#L14)

___

### write

• `Optional` **write**: `boolean`

Determines if a specific log should be saved into a file.
Overrides the value set within `Options`.

#### Inherited from

[WriteOptions](WriteOptions.md).[write](WriteOptions.md#write)

#### Defined in

[types/WriteOptions.ts:25](https://github.com/Norviah/logger/blob/8321782/src/types/WriteOptions.ts#L25)
