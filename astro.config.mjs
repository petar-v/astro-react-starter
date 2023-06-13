import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  cacheDir: '/tmp/astro/astro-react-starter'
  compressHTML: true,
  output: 'static',
  // TODO: add site with env variables
  integrations: [react(), mdx(), prefetch()]
});