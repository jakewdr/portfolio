import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://jakewdr.dev/",
  csp: true,
  vite: {
    css: {
      transformer: "lightningcss",
    },
    cssMinify: "lightningcss",
    chunkSizeWarningLimit: 100,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    plugins: [tailwindcss()]
  }
});
