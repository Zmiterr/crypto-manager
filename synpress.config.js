import synpressPlugins from '@synthetixio/synpress/plugins'
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://crypto-manager-ashy.vercel.app/', //'http://localhost:3000/',
    specPattern: 'tests/e2e/specs',
    supportFile: 'tests/support/index.js',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config)

      return config
    },
  },
})
