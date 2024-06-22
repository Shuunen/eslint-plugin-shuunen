import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    exclude: [
      '**/coverage/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/rules/*.test.js',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
    coverage: {
      exclude: ['*.sample.*', 'rules/*.js', 'rules/utils/run-tests.js', 'rules/utils/load-rules.js', '.dependency-cruiser.js'],
      reporter: ['text', 'lcov', 'html'],
      thresholds: {
        100: true,
      },
    },
  },
})
