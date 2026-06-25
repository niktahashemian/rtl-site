// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // نام مخزن خود را به جای 'rtl-site' قرار دهید
  base: '/rtl-site/',
  plugins: [react()],
})
