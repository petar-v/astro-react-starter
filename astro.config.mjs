import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  cacheDir: '/tmp/astro/astro-react-starter'
  compressHTML: true,
  output: 'static',
  experimental: {
    assets: true,
  },
  // TODO: add site with env variables
  integrations: [react(), mdx(), prefetch(), image()],
});
