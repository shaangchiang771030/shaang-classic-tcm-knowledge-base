// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import AutoImport from 'astro-auto-import';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://cosmosorder.org',
  integrations: [
    starlight({
      title: 'COSMOS ORDER｜天人之學',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
      defaultLocale: 'root',
      locales: {
        root: { label: '繁體', lang: 'zh-TW' },
        'zh-cn': { label: '简体', lang: 'zh-CN' },
        en: { label: 'EN', lang: 'en' },
        ja: { label: '日文', lang: 'ja' },
      },
      customCss: ['./src/styles/cosmos-order.css'],
      components: {
        SocialIcons: './src/components/HeaderActions.astro',
        LanguageSelect: './src/components/CosmosLanguageSelect.astro',
      },
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0a0e14' } },
      ],
      sidebar: [
        { label: '首頁', link: '/' },
        { label: '研究領域', link: '/research/' },
        { label: '開始閱讀', link: '/start-here/' },
        { label: '關於', link: '/about/' },
        { label: '食療報告', link: '/food-report/' },
        {
          label: '研究領域',
          items: [
            { label: '時空篇', link: '/research/spacetime/' },
            { label: '氣化生理篇', link: '/research/qihua-physiology/' },
            { label: '經方篇', link: '/research/jingfang/' },
            { label: '藥物篇', link: '/research/materia-medica/' },
            { label: '針灸篇', link: '/research/acupuncture/' },
            { label: '扁鵲鏡經篇', link: '/research/bianque-mirror/' },
          ],
        },
      ],
    }),
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
