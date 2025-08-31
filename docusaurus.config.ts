import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sui Surabaya Workshop',
  tagline: 'Master Sui Blockchain Development',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://your-domain.com',
  baseUrl: '/',

  organizationName: 'your-github-user-or-org',
  projectName: 'your-repo-name',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cahyoromadhon/webdocs',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  // Hapus plugin search untuk menghilangkan search bar dan menghindari error index
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      { redirects: [{ from: ['/docs'], to: '/docs/intro' }] },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '', // tanpa brand text
      // Jangan definisikan logo agar tidak muncul; kalau masih muncul, CSS akan menyembunyikannya.
      items: [
        { to: '/', label: 'Home', position: 'left' },
        { to: '/docs/intro', label: 'Academy', position: 'left' },
        // Tidak ada search bar
      ],
    },
    // Footer diabaikan karena dioverride menjadi null
    footer: { style: 'dark', links: [] },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: { sidebar: { hideable: true } },
    // Biarkan toggle theme tetap ada
    // colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
  } satisfies Preset.ThemeConfig,
};

export default config;