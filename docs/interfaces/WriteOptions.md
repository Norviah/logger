[@norviah/logger](../README.md) / [Exports](../modules.md) / WriteOptions

# Interface: WriteOptions

## Hierarchy

- **`WriteOptions`**

  ↳ [`LoggingOptions`](LoggingOptions.md)

## Table of contents

### Properties

- [both](WriteOptions.md#both)
- [name](WriteOptions.md#name)
- [subDir](WriteOptions.md#subdir)
- [write](WriteOptions.md#write)

## Properties

### both

• `Optional` **both**: `boolean`

If `WriteOptions.subDir` is specified, this property determines if a
log should be saved within the root directory and any subdirectories.

#### Defined in

[types/WriteOptions.ts:19](https://github.com/Norviah/logger/blob/f795ed6/src/types/WriteOptions.ts#L19)

___

### name

• `Optional` **name**: `string`

The name of the file that logs will be saved into.
If not provided, logs will be saved as `MM-DD-YYYY.txt`.

#### Defined in

[types/WriteOptions.ts:6](https://github.com/Norviah/logger/blob/f795ed6/src/types/WriteOptions.ts#L6)

___

### subDir

• `Optional` **subDir**: `string`

If provided, logs will be saved into this subdirectory,
or multiple, within the root dir for logs provided within
`LoggingOptions`,

#### Defined in

[types/WriteOptions.ts:13](https://github.com/Norviah/logger/blob/f795ed6/src/types/WriteOptions.ts#L13)

___

### write

• `Optional` **write**: `boolean`

Determines if a specific log should be saved into a file.
Overrides the value set within `Options`.

#### Defined in

[types/WriteOptions.ts:25](https://github.com/Norviah/logger/blob/f795ed6/src/types/WriteOptions.ts#L25)
