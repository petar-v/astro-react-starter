import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  cacheDir: '/tmp/astro/astro-react-starter'
  compressHTML: true,
  output: 'static',
  // TODO: add site with env variables
});
