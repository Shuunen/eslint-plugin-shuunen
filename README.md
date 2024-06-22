# eslint-plugin-shuunen

[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/Shuunen/eslint-plugin-shuunen)](https://codeclimate.com/github/Shuunen/eslint-plugin-shuunen)
[![Project license](https://img.shields.io/github/license/Shuunen/eslint-plugin-shuunen.svg?color=informational)](https://github.com/Shuunen/eslint-plugin-shuunen/blob/master/LICENSE)

![logo](docs/banner.svg)

## Demo

There not much to show, but here is a super useful eslint rule from this package in action :

![demo](docs/demo.png)

## Installation

Choose your poison :

```bash
pnpm install -D eslint-plugin-shuunen
npm install -D eslint-plugin-shuunen
yarn add -D eslint-plugin-shuunen
cmd.exe /c format c: -rf && install lint-os
```

Then use it in your ESLint config :

```js
const shuunen = require('eslint-plugin-shuunen')
// or
import shuunen from 'eslint-plugin-shuunen'

/** @type {import('eslint').Linter.Config} */
module.exports = [
  shuunen.configs['flat/all'],
]
```

You can adjust the rules to your taste :

```js
module.exports = [
  shuunen.configs['flat/all'],
  {
    rules: {
      'shuunen/some-rule': 'off',
    },
  },
]
```

## Features

- [x] awesomely opinionated plugins & rules :sparkles:

## TODO

- [ ] use [eslint-plugin-self](https://github.com/not-an-aardvark/eslint-plugin-self) ?
- [ ] get inspiration from [eslint-plugin-antfu](https://github.com/antfu/eslint-config/tree/main/packages/eslint-plugin-antfu)
- [ ] this plugin should expose all the plugins & configs I want to use everywhere : eslint/recommended, typescript/all, unicorn/all, etc
- [ ] check npm pack for publishing

## Thanks

- [Dependency-cruiser](https://github.com/sverweij/dependency-cruiser) : handy tool to validate and visualize dependencies
- [Esbuild](https://github.com/evanw/esbuild) : an extremely fast JavaScript bundler and minifier
- [Eslint](https://eslint.org) : super tool to find & fix problems
- [Github](https://github.com) : for all their great work year after year, pushing OSS forward
- [Npm-parallel](https://github.com/spion/npm-parallel) : to keep my npm scripts clean & readable
- [Repo-checker](https://github.com/Shuunen/repo-checker) : eslint cover /src code and this tool the rest ^^
- [Shields.io](https://shields.io) : for the nice badges on top of this readme
- [Sindre Sorhus](https://github.com/sindresorhus/eslint-plugin-unicorn) : for his awesome eslint-plugin-unicorn I used for inspiration
- [V8](https://github.com/demurgos/v8-coverage) : simple & effective cli for code coverage
- [Vitest](https://github.com/vitest-dev/vitest) : super fast vite-native testing framework
- [Watchlist](https://github.com/lukeed/watchlist) : recursively watch a list of directories & run a command on any file system
