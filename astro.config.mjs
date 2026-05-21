import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jens-byte.github.io',
  base: '/amplify-website',
  integrations: [tailwind()],
});
