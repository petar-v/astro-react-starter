import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    cacheDir: '/tmp/astro/astro-react-starter',
    compressHTML: true,
    output: 'static',
    experimental: {
        assets: true,
    },
    // TODO: add site with env variables
    integrations: [
        AutoImport({
            imports: [
                '@shortcodes/Button',
                '@shortcodes/Accordion',
                '@shortcodes/Notice',
                '@shortcodes/Video',
                '@shortcodes/Youtube',
            ],
        }),
        react(),
        mdx(),
        prefetch(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
        sitemap(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
    ],
    markdown: {
        remarkPlugins: [
            remarkToc,
            [
                remarkCollapse,
                {
                    test: 'Table of contents',
                },
            ],
        ],
        shikiConfig: {
            theme: 'one-dark-pro',
            wrap: true,
        },
        extendDefaultPlugins: true,
    },
});
