import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  cacheDir: '/tmp/astro/astro-react-starter'
  compressHTML: true,
  output: 'static'
  // TODO: add site with env variables
  ,
  integrations: [react()]
});