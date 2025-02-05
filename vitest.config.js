import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['configs/*.js', 'src/*.js', 'rules/utils/*.js', 'index.js'],
      reporter: ['text', 'lcov', 'html'],
      thresholds: {
        100: true,
      },
    },
    exclude: [
      '**/coverage/**',
      '**/node_modules/**',
      '**/dist/**',
      '**/rules/*.test.js',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
    ],
  },
})
