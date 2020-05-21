[@norviah/logger](../README.md) › [Globals](../globals.md) › ["util"](_util_.md)

# Module: "util"

## Index

### Functions

* [format](_util_.md#format)
* [loop](_util_.md#loop)
* [mkdir](_util_.md#mkdir)

## Functions

###  format

▸ **format**(`message`: string, `color`: typeof Color | undefined, `defaults`: typeof Color): *string*

*Defined in [util.ts:91](https://github.com/norviah/logger/blob/095e0ad/src/util.ts#L91)*

Applies the given color to the message, if Chalk doesn't
support the color, apply the default color instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The message. |
`color` | typeof Color &#124; undefined | The color to apply to the message. |
`defaults` | typeof Color | If the given color isn't supported, this color is used. |

**Returns:** *string*

The given message with the given color applied to it.

___

###  loop

▸ **loop**(`base`: string, `sub`: string): *string*

*Defined in [util.ts:10](https://github.com/norviah/logger/blob/095e0ad/src/util.ts#L10)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base` | string | The base directory returned from the last loop. |
`sub` | string | The sub directory from the current element to create in the base directory. |

**Returns:** *string*

The base and sub directory combined as an absolute path.

___

###  mkdir

▸ **mkdir**(`base`: string, `sub`: string): *void*

*Defined in [util.ts:32](https://github.com/norviah/logger/blob/095e0ad/src/util.ts#L32)*

Creates the sub-directories in the base directory recursively,
if it doesn't exist. Meaning that if 'mkdir('Users/name/Desktop', 'base/sub/sub')'
is given, it checks to see if the directory 'base' exists within 'Users/name/Desktop'
and creates it if not, then creates the 'sub' directory in 'base', and
does the same thing for the sub-directory 'sub' in 'sub'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`base` | string | The base directory, this directory isn't touched as we know it exists. |
`sub` | string | The sub-directories to create within the base directory.  |

**Returns:** *void*
