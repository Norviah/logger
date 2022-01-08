[@norviah/logger](../README.md) / [Exports](../modules.md) / Format

# Interface: Format

Allows the possibility to customize the output for logs.
With `Format`, you can customize how logs will appear when printed into the
console and, if specified, saved into files.

## Table of contents

### Properties

- [date](Format.md#date)
- [general](Format.md#general)
- [title](Format.md#title)

## Properties

### date

• `Optional` **date**: `string`

Represents the format for dates.
Dates are parsed similar to the `date` command, minus the `%` operator. Any
formatting valid through the `date` command is valid here.
[Here](https://day.js.org/docs/en/display/format) is a good reference for
all valid options, if desired, `[text]` can be used to escape characters.

**`example`**
For example, if we were to parse using the format `D r`, it would output:
```
11/07/21 06:17:37 PM
```
Of course, you can escape characters if desired, `[date]: L :: [time]: LTS`
would produce the output:
```
date: 08/16/2018 :: time: 8:02:18 PM
```

#### Defined in

types/Format.ts:26

___

### general

• `Optional` **general**: `string`

Represents the general format for a log.
`%d` is replaced with the date, `%t` is replaced with the title, and `%c`
replaced with the actual contents for the lag.

**`example`**
For an example, let's say we have `Format` initialized as:
```TypeScript
{
  date: '[ LLL ]',
  title: '%t: ',
  general: '%d %t%c',
}
```
If we were to print with a title, the output would look like:
```text
[ August 16, 2018 8:02 PM ] hello: world
```
If we were to print without specifying a title, it would output:
```
[ August 16, 2018 8:02 PM ] world
```
If desired, you can omit a specific section within `format` and not worry
about it. For example, you can omit `%d`, thus preventing the date from
being printed within all logs.

#### Defined in

types/Format.ts:74

___

### title

• `Optional` **title**: `string`

Represents the desired format for titles, `%t` replaced with the actual
title. With this and the `format` property, you can have consistent
formatting when a title is specified or not when printing logs.

**`example`**
For an example, let's say we have the specific format for the title as
`%t: ` and the general format for logs as `%t%c`. If a log with a title is
printed, it will output:
```
hello: world
```
As the format for the title consists of a space. If a title isn't specified
when printing, the output will look like:
```
world
```

#### Defined in

types/Format.ts:46
