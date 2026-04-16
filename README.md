# Dish 🍽️

A cross-platform, real-time application designed to gamify the classic dinner party rotation among friend groups.

## Architecture

- **Monorepo**: Turborepo
- **Web App** (`apps/web`): TanStack Start + Tailwind CSS
- **Mobile App** (`apps/mobile`): React Native / Expo + NativeWind
- **Backend & Database** (`packages/backend`): Convex
- **Authentication**: WorkOS (Web and Deep-linked Mobile)

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
dish-app/
├── apps/
│   ├── web/          # TanStack Start web application
│   └── mobile/       # Expo React Native mobile app
├── packages/
│   └── backend/      # Convex backend & database
├── turbo.json        # Turborepo configuration
└── package.json      # Root workspace configuration
```
