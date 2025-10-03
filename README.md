# 🚀 Sui Academy Documentation

A comprehensive learning resource for Sui blockchain development using Move programming language.

## 📖 About

This documentation website provides a complete guide to learning Move on Sui, from basic concepts to advanced blockchain development. Built with Docusaurus, it offers an interactive and user-friendly learning experience for developers interested in Sui blockchain technology.

## 🎯 What You'll Learn

- **Getting Started**: Understanding Move-Sui and its differences from Core Move
- **Development Environment**: Setting up your Sui development workspace
- **Package Architecture**: Move.toml, module structure, and project organization
- **Move Basics**: Variables, data types, control flow, and expressions
- **Functions**: Function basics, visibility specifiers, and best practices
- **Types & Abilities**: Custom types and the ability system in Move
- **Objects**: Object-oriented programming in Move on Sui
- **Advanced Concepts**: Object wrapping, events, and complex patterns
- **Hands-on Practice**: Building a calculator contract from scratch

## 🛠️ Built With

- [Docusaurus](https://docusaurus.io/) - Modern static website generator
- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [MDX](https://mdxjs.com/) - Markdown with JSX components

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cahyoromadhon/webdocs.git
cd webdocs
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

### Local Development

```bash
npm start
# or
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
# or
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:
```bash
USE_SSH=true yarn deploy
```

Not using SSH:
```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📁 Project Structure

```
├── docs/                    # Documentation content
│   ├── academy.md          # Main academy page
│   ├── 1. Getting Started/ # Introduction to Move-Sui
│   ├── 2. Deploying.../    # Development environment setup
│   ├── 3. Move on Sui.../  # Package architecture
│   ├── 4. Move on Sui.../  # Language basics
│   ├── 5. Move on Sui.../  # Functions
│   ├── 6. Move on Sui.../  # Types and abilities
│   ├── 7. Object in.../    # Object-oriented concepts
│   ├── 8. Back to.../      # Hello World deep dive
│   ├── 9. Advanced.../     # Advanced patterns
│   ├── 10. Challenge/      # Practical exercises
│   └── 11. Let's Wrap.../  # Course conclusion
├── src/                    # React components and pages
├── static/                 # Static assets
├── docusaurus.config.ts    # Docusaurus configuration
├── sidebars.ts            # Sidebar navigation
└── package.json           # Dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Site**: [https://cahyorom.dev](https://cahyorom.dev)
- **Sui Documentation**: [https://docs.sui.io](https://docs.sui.io)
- **Move Language**: [https://move-language.github.io](https://move-language.github.io)

## 📧 Contact

**Cahyo Romadhon** - [@cahyoromadhon](https://github.com/cahyoromadhon)

Project Link: [https://github.com/cahyoromadhon/webdocs](https://github.com/cahyoromadhon/webdocs)

---

⭐ If this project helped you learn Sui development, please give it a star!
