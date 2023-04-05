# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [7.0.0](https://github.com/norviah/logger/compare/v6.1.1...v7.0.0) (2023-04-05)


### ⚠ BREAKING CHANGES

* change method 'colorize' to the static method 'Colorize'
* remove the 'color' method
* implement the static 'Plain' method to remove ANSI codes from a string
* remove the static 'Characters' method

### Features

* change method 'colorize' to the static method 'Colorize' ([17293eb](https://github.com/norviah/logger/commit/17293ebcf9021a9a47a479e41ded022d842fc616))
* implement the static 'Plain' method to remove ANSI codes from a string ([ce45701](https://github.com/norviah/logger/commit/ce45701fc821b0d3029e5b7bd3e1c87d172e988b))


### Bug Fixes

* implement 'Plain' for deprecated 'Characters' method ([9826d7d](https://github.com/norviah/logger/commit/9826d7d8c03e1b93856346a2732ab20295bc8409))


### removal

* remove the 'color' method ([8774782](https://github.com/norviah/logger/commit/877478283bb899e137344f1dae9ebff26a475340))
* remove the static 'Characters' method ([568cf01](https://github.com/norviah/logger/commit/568cf01d7b04228261b488c127eb5a5e131ac9b6))

### [6.1.1](https://github.com/norviah/logger/compare/v6.1.0...v6.1.1) (2022-10-21)


### Bug Fixes

* don't input an extra new line when saving logs into a file ([024da92](https://github.com/norviah/logger/commit/024da92869295ed413f750b9219ce8ef5092dac2))

## [6.1.0](https://github.com/norviah/logger/compare/v6.0.0...v6.1.0) (2022-01-10)


### Features

* implement support for multi-line logs ([0927ba4](https://github.com/norviah/logger/commit/0927ba46fa8d6983ed3abda246f164995eb6cafa))

## [6.0.0](https://github.com/norviah/logger/compare/v5.0.0...v6.0.0) (2022-01-08)


### Features

* extract regular expressions into a separate file ([44c9988](https://github.com/norviah/logger/commit/44c9988f1f5811f1208888a8dcf7d492d0b79cef))
* implement a script to represent absolute paths ([9a378c4](https://github.com/norviah/logger/commit/9a378c4313c3f4d286e7ee6143c8701728b1fa03))
* implement a type to reference the structure for the format of logs ([3839a7c](https://github.com/norviah/logger/commit/3839a7c3270755602971b773601ae86c130c38cb))
* implement types to ensure whether or not all properties of an object are provided ([e00f491](https://github.com/norviah/logger/commit/e00f491baeb6abb524c8be3d9cfdba6e9ad443ed))
* implement types to represent options ([bbd418a](https://github.com/norviah/logger/commit/bbd418af4bf48ec82612851c2f686cf0128bcb78))
* modify the markdown set to an object instead ([fc9c6f2](https://github.com/norviah/logger/commit/fc9c6f29790eac5e117105150bf4a3c8342c5ffb))
* modify the markdown set to an object instead ([ee5d247](https://github.com/norviah/logger/commit/ee5d2473e90389fc0217b37b5e259916b44d9517))

## [5.0.0](https://github.com/norviah/logger/compare/v4.0.0...v5.0.0) (2021-10-16)


### ⚠ BREAKING CHANGES

* rename the log method to info

### Features

* rename the log method to info ([e978216](https://github.com/norviah/logger/commit/e9782165b8cd08700d846dd795c6f76005e40524))

## [4.0.0](https://github.com/norviah/logger/compare/v3.0.0...v4.0.0) (2021-08-02)


### Features

* delegate the writing of logs into a separate method ([032e412](https://github.com/norviah/logger/commit/032e4120e31a3fdc8c732fca7f98b4a697040840))

## [3.0.0](https://github.com/norviah/logger/compare/v2.1.1...v3.0.0) (2021-07-31)


### Features

* improve the implementation of determining whether a log should be printed ([22ebba1](https://github.com/norviah/logger/commit/22ebba11c7610df18d1f7fa1e6e1dab337679a35))

### [2.1.1](https://github.com/norviah/logger/compare/v2.0.1...v2.1.1) (2021-03-05)


### Features

* change LoggingOptions into separate interfaces ([b7be255](https://github.com/norviah/logger/commit/b7be25582245fe19042db05e8a6e3bb804480de8))
* implement a quick and dirty way to only write logs ([14646f0](https://github.com/norviah/logger/commit/14646f002bc5cb207842a28d4ff57ef458530622))

## [2.1.0](https://github.com/norviah/logger/compare/v2.0.1...v2.1.0) (2021-03-05)


### Features

* change LoggingOptions into separate interfaces ([b7be255](https://github.com/norviah/logger/commit/b7be25582245fe19042db05e8a6e3bb804480de8))
* implement a quick and dirty way to only write logs ([14646f0](https://github.com/norviah/logger/commit/14646f002bc5cb207842a28d4ff57ef458530622))

### [2.0.1](https://github.com/norviah/logger/compare/v2.1.0...v2.0.1) (2020-08-03)

## [2.1.0](https://github.com/norviah/logger/compare/v2.0.0...v2.1.0) (2020-08-03)


### Bug Fixes

* save logs to MM-DD-YYYY ([7f44bca](https://github.com/norviah/logger/commit/7f44bca48358f39fd0507617cc66dd358b3c4d71))

## [2.0.0](https://github.com/norviah/logger/compare/v1.5.0...v2.0.0) (2020-08-03)


### ⚠ BREAKING CHANGES

* **options:** renamed the option 'log' to 'format'

### Features

* **options:** renamed the option 'log' to 'format' ([78340e1](https://github.com/norviah/logger/commit/78340e1b8bf4b13fff2419f81d8c4718d6a3db4e))

## [1.5.0](https://github.com/norviah/logger/compare/v1.4.0...v1.5.0) (2020-06-19)


### Features

* added an option to save logs into the base directory when saving into a sub directory ([4552f79](https://github.com/norviah/logger/commit/4552f798e5add82285347ee3aeb37ff909a9837e))

## 1.4.0 (2020-06-12)


### Bug Fixes

* fixed indentation in the documentation ([f043fee](https://github.com/norviah/logger/commit/f043fee6354d01ad8e30d1b13a7eb5b13fe5aa68))
* fixed link to correctly point to the main documentation file ([c91a221](https://github.com/norviah/logger/commit/c91a221ec8b06eebf00b54dc6205e6e0db5c37d0))
* fixed the documentation link to point to the main documentation for Logger ([3aa5537](https://github.com/norviah/logger/commit/3aa55379f7292f5118f8b97d11218be80def45d7))
* fixed the script used to generate the documentation ([ed326ab](https://github.com/norviah/logger/commit/ed326ab26f5b70751203070839403a2020366b21))
* fixed typo ([976ce7e](https://github.com/norviah/logger/commit/976ce7e4f857fbfa578fdfb70a557722fe008414))
* simplified .gitignore ([801729f](https://github.com/norviah/logger/commit/801729fd6736d6721bee184cbc25806873703828))
