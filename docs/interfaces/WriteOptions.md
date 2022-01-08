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

## Properties

### both

• `Optional` **both**: `boolean`

If `WriteOptions.subDir` is specified, this property determines if a
log should be saved within the root directory and any subdirectories.

#### Defined in

types/WriteOptions.ts:19

___

### name

• `Optional` **name**: `string`

The name of the file that logs will be saved into.
If not provided, logs will be saved as `MM-DD-YYYY.txt`.

#### Defined in

types/WriteOptions.ts:6

___

### subDir

• `Optional` **subDir**: `string`

If provided, logs will be saved into this subdirectory,
or multiple, within the root dir for logs provided within
`LoggingOptions`,

#### Defined in

types/WriteOptions.ts:13
