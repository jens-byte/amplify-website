import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jens-byte.github.io/amplify-website',
  integrations: [tailwind()],
});
