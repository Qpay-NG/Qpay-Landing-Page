import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { contactApiPlugin } from './src/utils/localContactApi.js'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const localEnv = loadEnv(mode, process.cwd(), '')

  for (const key of ['RESEND_API_KEY', 'QPAY_CONTACT_FROM_EMAIL', 'QPAY_CONTACT_TO_EMAIL']) {
    if (process.env[key] === undefined && localEnv[key] !== undefined) {
      process.env[key] = localEnv[key]
    }
  }

  return {
    plugins: [react(), contactApiPlugin],
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
      globals: true,
    },
  }
})
