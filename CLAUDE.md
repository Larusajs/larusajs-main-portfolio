# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Enes Kutay Yarkan (AI & Backend Developer) built with React, TypeScript, Vite, and Tailwind CSS. Features a "hand-drawn" design aesthetic with monochrome colors.

Use 'bun' as a package manager.

## Development Commands

```bash
# Install dependencies
bun install

# Run development server (starts on port 3000)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Architecture

### Component Structure

- **App.tsx**: Main application shell with floating centered navbar and section layout
- **components/**: Feature components (Hero, About, Experience, Projects, Pricing)
- **components/ui/SketchyComponents.tsx**: Reusable UI primitives (buttons, cards, inputs, badges) with "hand-drawn" styling
- **types.ts**: Shared TypeScript interfaces (Project, ExperienceItem, Section)

### Design System

The site uses a monochrome "hand-drawn" design system defined in index.html:
- Font: "Patrick Hand" (Google Fonts)
- Colors: `paper` (#fdfbf7), `ink` (#1a1a1a), `highlight` (#e5e5e5), `accent` (#9ca3af)
- Shadows: `shadow-sketch` (4px offset), `shadow-sketch-hover` (2px offset)
- Background: Dotted paper texture via radial-gradient

All interactive elements use Framer Motion for animations (whileHover, whileTap).

### Path Aliases

TypeScript and Vite are configured with `@/*` alias pointing to the root directory. Use `@/components/*` for imports.

## Key Implementation Details

### Component Patterns

- All components are React Functional Components with TypeScript
- Use `motion` components from framer-motion for animations
- Shared styling through SketchyComponents UI library
- Icons from `lucide-react`

### State Management

No global state management library. Uses React hooks (useState, useRef, useEffect) for local component state.

## Styling Conventions

- Tailwind CSS via CDN (configured in index.html)
- Custom theme extends default Tailwind config
- Use `font-hand` for Patrick Hand font
- Use `shadow-sketch` for consistent border shadows
- Use `bg-paper` for background, `text-ink` for text
- Border pattern: `border-2 border-ink`
