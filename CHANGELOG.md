## Unreleased

### Init

- initial commit <code>[2833021](https://github.com/Norviah/logger/commit/2833021351cb009d3345bdd345a804327c6d4a90)</code>

## [v7.0.0](https://github.com/Norviah/logger/compare/v6.1.1...v7.0.0) (2023-04-04)

### ⚠ Breaking Changes

- change method 'colorize' to the static method 'Colorize' <code>[17293eb](https://github.com/Norviah/logger/commit/17293ebcf9021a9a47a479e41ded022d842fc616)</code>

- remove the 'color' method <code>[8774782](https://github.com/Norviah/logger/commit/877478283bb899e137344f1dae9ebff26a475340)</code>

- implement the static 'Plain' method to remove ANSI codes from a string <code>[ce45701](https://github.com/Norviah/logger/commit/ce45701fc821b0d3029e5b7bd3e1c87d172e988b)</code>

- remove the static 'Characters' method <code>[568cf01](https://github.com/Norviah/logger/commit/568cf01d7b04228261b488c127eb5a5e131ac9b6)</code>

### Build System

- don't check lib types <code>[18fb89c](https://github.com/Norviah/logger/commit/18fb89c92e1f7bb96e7ccc942cd6b1d16b5808dd)</code>

### Bug Fixes

- implement 'Plain' for deprecated 'Characters' method <code>[9826d7d](https://github.com/Norviah/logger/commit/9826d7d8c03e1b93856346a2732ab20295bc8409)</code>

### Features

- change method 'colorize' to the static method 'Colorize' <code>[17293eb](https://github.com/Norviah/logger/commit/17293ebcf9021a9a47a479e41ded022d842fc616)</code>

- implement the static 'Plain' method to remove ANSI codes from a string <code>[ce45701](https://github.com/Norviah/logger/commit/ce45701fc821b0d3029e5b7bd3e1c87d172e988b)</code>

### removal

- remove the 'color' method <code>[8774782](https://github.com/Norviah/logger/commit/877478283bb899e137344f1dae9ebff26a475340)</code>

- remove the static 'Characters' method <code>[568cf01](https://github.com/Norviah/logger/commit/568cf01d7b04228261b488c127eb5a5e131ac9b6)</code>

## [v6.1.1](https://github.com/Norviah/logger/compare/v6.1.0...v6.1.1) (2022-10-21)

### Bug Fixes

- don't input an extra new line when saving logs into a file <code>[024da92](https://github.com/Norviah/logger/commit/024da92869295ed413f750b9219ce8ef5092dac2)</code>

## [v6.1.0](https://github.com/Norviah/logger/compare/v6.0.0...v6.1.0) (2022-01-10)

### Features

- implement support for multi-line logs <code>[0927ba4](https://github.com/Norviah/logger/commit/0927ba46fa8d6983ed3abda246f164995eb6cafa)</code>

## [v6.0.0](https://github.com/Norviah/logger/compare/v5.0.0...v6.0.0) (2022-01-07)

### Features

- implement types to represent options <code>[bbd418a](https://github.com/Norviah/logger/commit/bbd418af4bf48ec82612851c2f686cf0128bcb78)</code>

- implement types to ensure whether or not all properties of an object are provided <code>[e00f491](https://github.com/Norviah/logger/commit/e00f491baeb6abb524c8be3d9cfdba6e9ad443ed)</code>

- implement a type to reference the structure for the format of logs <code>[3839a7c](https://github.com/Norviah/logger/commit/3839a7c3270755602971b773601ae86c130c38cb)</code>

- modify the markdown set to an object instead <code>[fc9c6f2](https://github.com/Norviah/logger/commit/fc9c6f29790eac5e117105150bf4a3c8342c5ffb)</code>

- implement a script to represent absolute paths <code>[9a378c4](https://github.com/Norviah/logger/commit/9a378c4313c3f4d286e7ee6143c8701728b1fa03)</code>

- extract regular expressions into a separate file <code>[44c9988](https://github.com/Norviah/logger/commit/44c9988f1f5811f1208888a8dcf7d492d0b79cef)</code>

- modify the markdown set to an object instead <code>[ee5d247](https://github.com/Norviah/logger/commit/ee5d2473e90389fc0217b37b5e259916b44d9517)</code>

### Refactor

- refactor codebase <code>[1468eb3](https://github.com/Norviah/logger/commit/1468eb3fbd437986d1984c1efd41831f288d3b3a)</code>

## [v5.0.0](https://github.com/Norviah/logger/compare/v4.0.0...v5.0.0) (2021-10-15)

### ⚠ Breaking Changes

- rename the log method to info <code>[e978216](https://github.com/Norviah/logger/commit/e9782165b8cd08700d846dd795c6f76005e40524)</code>

### Features

- rename the log method to info <code>[e978216](https://github.com/Norviah/logger/commit/e9782165b8cd08700d846dd795c6f76005e40524)</code>

## [v4.0.0](https://github.com/Norviah/logger/compare/v3.0.0...v4.0.0) (2021-08-01)

### Features

- delegate the writing of logs into a separate method <code>[032e412](https://github.com/Norviah/logger/commit/032e4120e31a3fdc8c732fca7f98b4a697040840)</code>

## [v3.0.0](https://github.com/Norviah/logger/compare/v2.1.1...v3.0.0) (2021-07-30)

### Features

- improve the implementation of determining whether a log should be printed <code>[22ebba1](https://github.com/Norviah/logger/commit/22ebba11c7610df18d1f7fa1e6e1dab337679a35)</code>

## [v2.1.1](https://github.com/Norviah/logger/compare/v2.0.1...v2.1.1) (2021-03-05)

### Features

- implement a quick and dirty way to only write logs <code>[14646f0](https://github.com/Norviah/logger/commit/14646f002bc5cb207842a28d4ff57ef458530622)</code>

- change LoggingOptions into separate interfaces <code>[b7be255](https://github.com/Norviah/logger/commit/b7be25582245fe19042db05e8a6e3bb804480de8)</code>

## [v2.0.1](https://github.com/Norviah/logger/compare/v2.1.0...v2.0.1) (2020-08-03)

## [v2.1.0](https://github.com/Norviah/logger/compare/v2.0.0...v2.1.0) (2020-08-03)

### Bug Fixes

- save logs to MM-DD-YYYY <code>[7f44bca](https://github.com/Norviah/logger/commit/7f44bca48358f39fd0507617cc66dd358b3c4d71)</code>

## [v2.0.0](https://github.com/Norviah/logger/compare/v1.5.0...v2.0.0) (2020-08-03)

### ⚠ Breaking Changes

- **options**: renamed the option 'log' to 'format' <code>[78340e1](https://github.com/Norviah/logger/commit/78340e1b8bf4b13fff2419f81d8c4718d6a3db4e)</code>

### Features

- **options**: renamed the option 'log' to 'format' <code>[78340e1](https://github.com/Norviah/logger/commit/78340e1b8bf4b13fff2419f81d8c4718d6a3db4e)</code>

## [v1.5.0](https://github.com/Norviah/logger/compare/v1.4.0...v1.5.0) (2020-06-18)

### Features

- added an option to save logs into the base directory when saving into a sub directory <code>[4552f79](https://github.com/Norviah/logger/commit/4552f798e5add82285347ee3aeb37ff909a9837e)</code>

## v1.4.0 (2020-06-12)

### Refactor

- refactored codebase <code>[c3da9c4](https://github.com/Norviah/logger/commit/c3da9c4ed4c2d492f24e84e436be79c613b73383)</code>

- moved project to typescript <code>[5862d19](https://github.com/Norviah/logger/commit/5862d1976aedf76f0423368a0b350b038b9ddfcc)</code>

### Bug Fixes

- fixed link to correctly point to the main documentation file <code>[c91a221](https://github.com/Norviah/logger/commit/c91a221ec8b06eebf00b54dc6205e6e0db5c37d0)</code>

- fixed the documentation link to point to the main documentation for Logger <code>[3aa5537](https://github.com/Norviah/logger/commit/3aa55379f7292f5118f8b97d11218be80def45d7)</code>

- fixed the script used to generate the documentation <code>[ed326ab](https://github.com/Norviah/logger/commit/ed326ab26f5b70751203070839403a2020366b21)</code>

- fixed indentation in the documentation <code>[f043fee](https://github.com/Norviah/logger/commit/f043fee6354d01ad8e30d1b13a7eb5b13fe5aa68)</code>

- fixed typo <code>[976ce7e](https://github.com/Norviah/logger/commit/976ce7e4f857fbfa578fdfb70a557722fe008414)</code>

- simplified .gitignore <code>[801729f](https://github.com/Norviah/logger/commit/801729fd6736d6721bee184cbc25806873703828)</code>

### release

- released v1.3.0 <code>[b5434af](https://github.com/Norviah/logger/commit/b5434afd16b4fb7ae797a3108cc8fa6fe2d1c8b2)</code>

- released v1.2.2 to fix the README on npm <code>[0522667](https://github.com/Norviah/logger/commit/0522667a5a439c88857eb4223ac5aa41a3921b66)</code>

- released v1.2.1 to change README on npm <code>[8869634](https://github.com/Norviah/logger/commit/88696349de4da07aa26d834779634ec069349bba)</code>

- released v1.2.0 <code>[095e0ad](https://github.com/Norviah/logger/commit/095e0adc0a6d02273db79d20d132fcb0ecbd2afa)</code>

### update

- updated readme <code>[b82a82a](https://github.com/Norviah/logger/commit/b82a82a3a60f31b4ac91ab903c7592981cf12f42)</code>

- updated readme <code>[d712329](https://github.com/Norviah/logger/commit/d712329633ff03325ae4eb5b23ba73f494f6ddfd)</code>

- updated version to 1.0.1 <code>[f3c294e](https://github.com/Norviah/logger/commit/f3c294eed63873b0bfc631f1e8387c91f36f063b)</code>

- installed app-root-path to determine the root folder <code>[5412f65](https://github.com/Norviah/logger/commit/5412f65b6326c4ce4465c76cb94f4e2b32dd57cd)</code>

### Init

- initial commit <code>[4f72b98](https://github.com/Norviah/logger/commit/4f72b98bcc7608f279e21541e793d7432fdfce30)</code>