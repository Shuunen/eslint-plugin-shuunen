# eslint-plugin-shuunen

[![Install size](https://badgen.net/packagephobia/install/eslint-plugin-shuunen)](https://packagephobia.com/result?p=eslint-plugin-shuunen)
[![Publish size](https://img.shields.io/bundlephobia/min/eslint-plugin-shuunen?label=publish%20size)](https://bundlephobia.com/package/eslint-plugin-shuunen)
[![Npm monthly downloads](https://img.shields.io/npm/dm/eslint-plugin-shuunen.svg?color=informational)](https://www.npmjs.com/package/eslint-plugin-shuunen)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/Shuunen/eslint-plugin-shuunen)](https://codeclimate.com/github/Shuunen/eslint-plugin-shuunen)
[![Project license](https://img.shields.io/github/license/Shuunen/eslint-plugin-shuunen.svg?color=informational)](https://github.com/Shuunen/eslint-plugin-shuunen/blob/master/LICENSE)

![logo](docs/banner.svg)

## Archived

This project is archived because of the poor `Eslint` performance compared to the newest kings like [Biome](https://biomejs.dev/) and [OxLint](https://oxc.rs/docs/guide/usage/linter.html).

See some metrics from my [other project](https://github.com/Shuunen/snippets/blob/master/docs/benchmarks.md) :

- Eslint : 4.1s
- Biome : 0.3s

This is the time taken by each tool to check a super small codebase containing 50 files... so you can imagine how long it takes on a real project with hundreds of files.

## Demo

There not much to show, but here is a super useful eslint rule from this package in action :

![demo](docs/demo.png)

## Installation

Choose your favorite package manager :

```bash
npm install -D eslint-plugin-shuunen
pnpm install -D eslint-plugin-shuunen
yarn install -D eslint-plugin-shuunen
bun install -D eslint-plugin-shuunen
```

## Features

- 🚀 **Modern ESLint Config**: Built for ESLint's new flat config system
- 🔧 **Comprehensive Rules**: Combines best practices from multiple ESLint plugins
- 📦 **Modular Design**: Pick and choose the configs you need
- ⚡ **Performance Optimized**: Minimal overhead, maximum value
- 🛠 **TypeScript Support**: Full TypeScript support with strict type checking
- 🎨 **Styling Rules**: Consistent code style across your project

## ES Module

In your `eslint.config.js` :

```js
import { base } from 'eslint-plugin-shuunen/configs/base'
// import { browser } from 'eslint-plugin-shuunen/configs/browser'
// same pattern for the other configs

export default [    // 🥗 compose your salad
  ...base,          // 🥚 eslint/all + unicorn/all + perfectionist/natural + jsdoc
  // ...browser,    // 🥑 globals for browser
  // ...tailwind,   // 🥭 tailwindcss class order
  // ...node,       // 🥕 globals for node
  // ...typescript, // 🍅 typescript/all
  // ...vue,        // 🥔 vue essential + stronglyRecommended + recommended
]
```

## CommonJS (legacy)

Last working version with CommonJS is `0.4.0`.

In your `eslint.config.cjs` :

```js
const shuunen = require('eslint-plugin-shuunen')

/** @type {import('eslint').Linter.Config} */
module.exports = [               
  ...shuunen.configs.base,       
  ...shuunen.configs.browser,    
  ...shuunen.configs.node,       
  ...shuunen.configs.typescript, 
  ...shuunen.configs.vue,        
]
```

You can adjust the rules to your taste :

```js
module.exports = [
  ...shuunen.configs.base,
  {
    rules: {
      'shuunen/some-rule': 'off',
      'unicorn/some-other-rule': 'warn',
    },
  },
]
```

## Included Plugins

- `@eslint/js`: Core ESLint rules
- `eslint-plugin-jsdoc`: JSDoc rules
- `eslint-plugin-perfectionist`: Code organization, sorting
- `eslint-plugin-tailwindcss`: Tailwind CSS class order
- `eslint-plugin-unicorn`: Additional ESLint rules
- `eslint-plugin-vue`: Vue.js support
- `typescript-eslint`: TypeScript support

## TODO

- [ ] use a plugin for react
- [ ] merge typescript into base because it works on js ^^
- [ ] search interesting plugins from [eslint-plugin-antfu](https://github.com/antfu/eslint-config)
- [ ] search interesting plugins from [eslint-plugin-hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore)
- [ ] when available, add bun coverage line exclusions and enable 100% thresholds to ensure coverage is not decreasing
- [ ] test to build a index.min.js file and see how it impact :
  - [ ] the install size
  - [ ] the performance
  - [ ] the source code readability in case of error

## Thanks

- [Anthony Fu](https://github.com/antfu/eslint-config) : for his config, for the inspiration
- [Boxy Svg](https://boxy-svg.com) : simple & effective svg editor
- [Bun](https://bun.sh) : super fast runtime for JavaScript and TypeScript
- [Eslint](https://eslint.org) : super tool to find & fix problems
- [Github](https://github.com) : for all their great work year after year, pushing OSS forward
- [Knip](https://github.com/webpro/knip) : super tool to find & fix problems
- [Npm-parallel](https://github.com/spion/npm-parallel) : to keep my npm scripts clean & readable
- [Repo-checker](https://github.com/Shuunen/repo-checker) : eslint cover /src code and this tool the rest ^^
- [Shields.io](https://shields.io) : for the nice badges on top of this readme
- [Sindre Sorhus](https://github.com/sindresorhus/eslint-plugin-unicorn) : for his awesome eslint-plugin-unicorn, for the inspiration
- [Svg Omg](https://jakearchibald.github.io/svgomg/) : the great king of svg file size reduction
- [Watchlist](https://github.com/lukeed/watchlist) : recursively watch a list of directories & run a command on any file system

## Stargazers over time

[![Stargazers over time](https://starchart.cc/Shuunen/eslint-plugin-shuunen.svg?variant=adaptive)](https://starchart.cc/Shuunen/eslint-plugin-shuunen)

## Page views

[![Free Website Counter](https://www.websitecounterfree.com/c.php?d=9&id=63928&s=12)](https://www.websitecounterfree.com)
