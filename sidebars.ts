import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Day 1: Basics 🚀',
      collapsed: false,
      items: [
        'day1/introduction',
        'day1/module1-topik-utama',
        'day1/module2-topik-lanjutan',
        'day1/wrap-up',
      ],
    },
    // Tambah kategori lain jika perlu, misalnya Hari 2, Hari 3, dsb.
  ],
};

export default sidebars;