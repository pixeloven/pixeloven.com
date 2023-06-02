import { defineConfig } from 'cypress'
import defaultConfig from 'testing/config'

export default defineConfig({
  ...defaultConfig,
  e2e: {
    baseUrl: 'http://localhost:3020',
  },
})
