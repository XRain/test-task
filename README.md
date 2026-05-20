# Monorepo Bootstrap

This repository is a `pnpm` workspace with:

- `apps/web`: Next.js app (SSR + React Server Components)
- `apps/mobile`: React Native CLI app (NativeWind/TailwindCSS)
- `packages/shared`: Shared TypeScript module for API access and reusable React helpers

Why pnpm? I worked with specialized monorepo tools (nx, lerna) and found them too opinionated and conservative
## Start demo project:
 You should have React Native runtime set up (I'm sure you have it already, or run ```npx react-native doctor``` to check what's missing)

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
