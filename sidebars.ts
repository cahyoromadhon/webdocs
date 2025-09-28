import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'academy',
    {
      type: 'category',
      label: '1. Getting Started',
      collapsed: false,
      items: [
        'Getting Started/Why Move on Sui was Created',
      ],
    },
    {
      type: 'category',
      label: '2. Deploying Your First Hello World Contract on Sui',
      collapsed: true,
      items: [
        'Deploying Your First Hello World Contract on Sui/Set Up the Development Environment',
        'Deploying Your First Hello World Contract on Sui/Deploy Your First Sui Contract',
        'Deploying Your First Hello World Contract on Sui/Set Up Sui Wallet',
      ],
    },
    {
      type: 'category',
      label: '3. Move on Sui Package Architecture',
      collapsed: true,
      items: [
        'Move on Sui Package Architecture/Understand Move toml and Move lock File',
        'Move on Sui Package Architecture/Basic Module Structure in Move on Sui - I',
        'Move on Sui Package Architecture/Basic Module Structure in Move on Sui - II',
      ],
    },
    {
      type: 'category',
      label: '4. Move on Sui Basics',
      collapsed: true,
      items: [
        'Move on Sui Basics/How to Declare Variables and Constants',
        'Move on Sui Basics/What are the Different Data Types',
        'Move on Sui Basics/How Control Flow Works in Move on Sui',
        'Move on Sui Basics/Move Expressions, Scope, and Operators',
      ],
    },
    {
      type: 'category',
      label: '5. Move on Sui Functions',
      collapsed: true,
      items: [
        'Move on Sui Functions/Functions Basics',
        'Move on Sui Functions/What are the Different Visibility Specifiers',
      ],
    },
    {
      type: 'category',
      label: '6. Move on Sui Types with Abilities',
      collapsed: true,
      items: [
        'Move on Sui Types with Abilities/Custom Types and Abilities',
      ],
    },
    {
      type: 'category',
      label: '7. Object in Move on Sui',
      collapsed: true,
      items: [
        'Object in Move on Sui/Basics of Objects in Move on Sui',
        'Object in Move on Sui/Using Objects in Move',
        'Object in Move on Sui/Objects Ownership',
      ],
    },
    {
      type: 'category',
      label: '8. Back to Hello World',
      collapsed: true,
      items: [
        'Back to Hello World/Understand the Hello World Program',
      ],
    },
    {
      type: 'category',
      label: '9. Advanced Concepts in Move on Sui',
      collapsed: true,
      items: [
        'Advanced Concepts in Move on Sui/Object Wrapping',
        'Advanced Concepts in Move on Sui/Events in Move on Sui',
      ],
    },
    {
      type: 'category',
      label: '10. Challenge',
      collapsed: true,
      items: [
        'Challange/Challenge Create a Calculator Contract using Move',
        'Challange/Solution Create a Calculator Contract using Move on Sui',
      ],
    },
    {
      type: 'category',
      label: '11. Let\'s Wrap It Up',
      collapsed: true,
      items: [
        'Let\'s Wrap It Up/Wrap Up',
      ],
    },
  ],
};

export default sidebars;