# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Tears of the Kingdom Guide (`artifacts/totk-guide`)
- **Type**: react-vite static frontend
- **Preview path**: `/`
- **Purpose**: Comprehensive TOTK guide website with 10 sections
- **Sections**: Overview, Walkthrough, Shrines (152), Weapons, Shields, Bows, Gear & Armor, Secrets & Easter Eggs, Hidden Areas, Interactive Map
- **Features**: Sortable weapon/shield/bow tables, filterable shrine list, armor upgrade cards, embedded interactive map, dark Hyrule-themed design
- **No backend needed** — all data stored as TypeScript constants
