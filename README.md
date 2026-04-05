# Tears of the Kingdom — Ultimate Guide

A comprehensive, interactive guide website for *The Legend of Zelda: Tears of the Kingdom* on Nintendo Switch. Built with React, Vite, TypeScript, and Tailwind CSS.

![TOTK Guide](https://img.shields.io/badge/Zelda-Tears%20of%20the%20Kingdom-emerald?style=flat-square)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-teal?style=flat-square)

## What's Included

| Section | Description |
|---|---|
| **Overview** | Hero landing with quick navigation to every section |
| **Walkthrough** | Step-by-step main quest guide from Sky Island tutorial to final boss |
| **Shrines** | All 152 shrines organized by region with puzzle hints, filterable |
| **Weapons** | Full weapon database — attack, durability, special effects, locations (sortable) |
| **Shields** | Complete shield database with defense values and locations |
| **Bows** | All bows including Savage Lynel multishot variants |
| **Gear & Armor** | Every armor set with upgrade tiers, set bonuses, and how to obtain |
| **Secrets & Easter Eggs** | Dragon's Tears, Master Sword, Gloom Hands, Bargainer Statues, and more |
| **Hidden Areas** | Lomei Labyrinths, Eventide Island, Ancient Zora Waterworks, sky islands, and more |
| **Interactive Map** | Embedded Zelda Dungeon interactive map with filter chips |

## Prerequisites

- **Node.js** v20 or higher — [Download](https://nodejs.org/)
- **pnpm** v9 or higher — Install with `npm install -g pnpm`

Check your versions:
```bash
node --version   # should be v20+
pnpm --version   # should be 9+
```

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/mekaziah/totk-guide.git
cd totk-guide

# 2. Install all dependencies
pnpm install

# 3. Start the development server
pnpm --filter @workspace/totk-guide run dev
```

The site will open at **http://localhost:3000**

> No environment variables are required for local development — everything works out of the box.

## Project Structure

```
totk-guide/
├── artifacts/
│   └── totk-guide/          # The main React + Vite web app
│       ├── src/
│       │   ├── pages/       # One file per section (home, shrines, weapons, etc.)
│       │   ├── components/  # Shared UI components
│       │   ├── lib/         # Data constants (weapons, shrines, armor, etc.)
│       │   ├── App.tsx      # Router and layout shell
│       │   └── index.css    # Global styles and Tailwind theme
│       ├── package.json
│       └── vite.config.ts
├── lib/                     # Shared workspace libraries
├── pnpm-workspace.yaml      # pnpm monorepo config
├── package.json             # Root workspace
└── README.md
```

## Available Scripts

Run all commands from the **repository root** unless noted.

| Command | Description |
|---|---|
| `pnpm --filter @workspace/totk-guide run dev` | Start dev server at http://localhost:3000 |
| `pnpm --filter @workspace/totk-guide run build` | Build for production (output: `artifacts/totk-guide/dist/public`) |
| `pnpm --filter @workspace/totk-guide run serve` | Preview the production build locally |
| `pnpm --filter @workspace/totk-guide run typecheck` | TypeScript type check |

## Building for Production

```bash
# Build the site
pnpm --filter @workspace/totk-guide run build

# The static files are in:
# artifacts/totk-guide/dist/public/

# Preview the production build locally
pnpm --filter @workspace/totk-guide run serve
```

The `dist/public/` folder contains a fully static site — you can deploy it to any static host:
- **Netlify** — drag and drop the `dist/public` folder
- **Vercel** — `vercel --cwd artifacts/totk-guide`
- **GitHub Pages** — push `dist/public` to `gh-pages` branch
- **Cloudflare Pages** — connect repo, set build command and output directory

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** — fast development server and bundler
- **Tailwind CSS v4** — utility-first styling
- **Wouter** — lightweight client-side routing
- **Framer Motion** — animations and transitions
- **Lucide React** — icons
- **Radix UI** — accessible UI primitives
- **pnpm workspaces** — monorepo management

## Customizing Content

All game data lives in `artifacts/totk-guide/src/lib/` as TypeScript constants. To update or add content:

1. Open the relevant data file (e.g., `weapons.ts`, `shrines.ts`, `armor.ts`)
2. Add or edit entries following the existing TypeScript types
3. The UI updates automatically

## Troubleshooting

**Port already in use?**
```bash
PORT=4000 pnpm --filter @workspace/totk-guide run dev
```

**pnpm not found?**
```bash
npm install -g pnpm
```

**Node version too old?**
Use [nvm](https://github.com/nvm-sh/nvm) to switch versions:
```bash
nvm install 20
nvm use 20
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
pnpm store prune
pnpm install
```

## License

This is a fan-made guide. All Zelda content, names, and assets belong to Nintendo. This project is not affiliated with or endorsed by Nintendo.
