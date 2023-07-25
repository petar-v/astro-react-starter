import mdx from '@astrojs/mdx';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import remarkCollapse from 'remark-collapse';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
    cacheDir: '/tmp/astro/astro-react-starter',
    compressHTML: true,
    experimental: {
        assets: true,
    },
    // TODO: add site with env variables
    integrations: [
        AutoImport({
            imports: ['@shortcodes/Button'],
        }),
        react(),
        mdx({
            gfm: false,
            remarkPlugins: [remarkToc],
            remarkRehype: { footnoteLabel: 'Footnotes' },
            shikiConfig: { theme: 'dracula' },
            syntaxHighlight: 'shiki',
        }),
        prefetch(),
        sitemap(),
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
    ],
    markdown: {
        extendDefaultPlugins: true,
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
    },
    output: 'static',
});
