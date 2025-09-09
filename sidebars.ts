import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Coinflip Program',
      collapsed: false,
      items: [
        'coinflip/intro',
        'coinflip/init',
        'coinflip/module',
        'coinflip/struct',
        'coinflip/functions',
        'coinflip/deploy',
        'coinflip/kesimpulan',
      ],
    },
    // Tambah kategori lain jika perlu, misalnya Hari 2, Hari 3, dsb.
  ],
};

export default sidebars;