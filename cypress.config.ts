import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 't8fma9',
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
