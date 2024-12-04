import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    prefetch(),
  ],
  site: 'https://your-domain.com', // Update this with your domain
});
