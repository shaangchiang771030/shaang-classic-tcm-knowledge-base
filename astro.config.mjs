// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import AutoImport from 'astro-auto-import';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Keystatic Starlight',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/jordangeizer/starlight-keystatic'
      },
      /* 
        The server needs to be manually restarted whenever 
        the sidebarData below is changed, since nothing 
        on this file is changing.

        Is there a way to "watch" a specific file for 
        change and trigger a server restart?
      */


      sidebar: [
  { label: 'Overview', link: '/overview' },
  {
    label: '天人之學：時空篇 (30個核心概念)',
    autogenerate: { directory: 'concept' },
  },
  {
    label: '天人之學：氣化生理篇 (30個核心概念)',
    autogenerate: { directory: 'qihua_physiology_concept' },
  },
  {
    label: '天人之學：經方篇 (30個核心概念)',
    autogenerate: { directory: 'jingfang_concept' },
  },
  {
    label: '天人之學：藥物篇 (30個核心概念)',
    autogenerate: { directory: 'drug_concept' },
  },
  { label: 'Components', autogenerate: { directory: 'components' } },
],
  { label: 'Components', autogenerate: { directory: 'components' } },
],
    }), // 👈 關鍵修正！把原本漏掉的 }) 和逗號補回來，完美關閉 starlight 設定
    keystatic(),
    react(),
    AutoImport({
      imports: [
        {
          '@astrojs/starlight/components': [
            'Aside',
            'Badge',
            'Card',
            'CardGrid',
            'FileTree',
            'Icon',
            'LinkButton',
            'LinkCard',
            'Steps',
            'TabItem',
            'Tabs',
          ],
        },
      ],
    }),
  ],
  output: 'hybrid',
  adapter: vercel(),
});
