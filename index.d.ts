// inspired from https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/index.d.ts
import type { ESLint, Linter } from 'eslint'

export type Configs = {
  base: Linter.FlatConfig[]
  node: Linter.FlatConfig[]
  browser: Linter.FlatConfig[]
  typescript: Linter.FlatConfig[]
  vue: Linter.FlatConfig[]
}

export type Plugin = ESLint.Plugin & { configs: Configs }

declare const eslintPluginShuunen: Plugin

export = eslintPluginShuunen
