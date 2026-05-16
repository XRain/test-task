# Monorepo Bootstrap

This repository is a `pnpm` workspace with:

- `apps/web`: Next.js app (SSR + React Server Components)
- `apps/mobile`: React Native CLI app (NativeWind/TailwindCSS)
- `packages/shared`: Shared TypeScript module for API access and reusable React helpers

## Getting started

```bash
pnpm install
pnpm dev:web
pnpm dev:mobile
```

## Validation

```bash
rtk pnpm typecheck
rtk pnpm build
```
