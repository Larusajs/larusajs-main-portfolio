# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist, monochrome personal portfolio website built with React, TypeScript, and Vite. The portfolio showcases professional experience, projects, publications, and social links in a sleek dark-themed interface with a modular card layout.

## Development Commands

### Development
```bash
npm install        # Install dependencies (also works with bun install)
npm run dev        # Start development server at http://localhost:3000
```

### Build & Preview
```bash
npm run build      # Build for production
npm run preview    # Preview production build
```

## Architecture & Structure

### Entry Points
- `index.html` - HTML entry point with Tailwind CDN and custom styling
- `index.tsx` - React app entry point that mounts the App component
- `App.tsx` - Main application component containing all UI sections

### Component Structure
The portfolio uses a **flat, single-page architecture** with no routing:

- **App.tsx**: Main component containing all sections (Hero, Experience, Projects, Publications, Connect)
- **components/Card.tsx**: Reusable card wrapper with dark theme styling and glow effects
- **components/SectionHeader.tsx**: Consistent section title formatting across the page

### Data Layer
All portfolio content is centralized in **constants.tsx**:
- `PERSONAL_INFO` - Name, role, location, email, availability status
- `PROJECTS` - Featured project list with descriptions and icons
- `EXPERIENCES` - Professional experience timeline
- `PUBLICATIONS` - Research papers and publications
- `SOCIAL_LINKS` - Social media links with icons

**To update portfolio content**, modify the data in `constants.tsx` rather than changing JSX directly.

### Type Definitions
- **types.ts** defines TypeScript interfaces for `Project`, `Experience`, `SocialLink`, and `Publication`
- All content objects in constants.tsx must conform to these interfaces

### Styling Approach
- Uses **Tailwind CSS via CDN** (loaded in index.html)
- Custom CSS in `index.html` defines dark theme utilities:
  - `.inner-shadow` - Subtle inset highlight for depth
  - `.card-glow` - Border gradient effect for cards
  - Custom scrollbar styling
- Color palette: `#050505` (bg), `#0f0f0f` (cards), `#1a1a1a` (borders), `#262626` (accents)

### Icon System
- Uses **lucide-react** for all icons
- The `getIcon()` function in App.tsx maps string names to icon components
- Icons are referenced by string names in data objects (e.g., `"Briefcase"`, `"Terminal"`)

### Environment Variables
- `GEMINI_API_KEY` should be set in `.env.local` (referenced in README but not currently used in code)
- Vite config maps `GEMINI_API_KEY` to both `process.env.API_KEY` and `process.env.GEMINI_API_KEY`

## Path Aliases
- `@/*` resolves to the project root (configured in both vite.config.ts and tsconfig.json)
- Example: `import { Card } from '@/components/Card'`

## Key Implementation Details

### Responsive Layout
- Uses CSS Grid: `lg:grid-cols-12` for desktop two-column layout
- Left column (8 cols): Hero, Experience
- Right column (4 cols): Connect, Publications, Projects, Stats
- Mobile: Single column, stacked sections

### Interactive Elements
- Email copy-to-clipboard with temporary success state
- Hover states on cards, buttons, and social links
- Active scaling effects on buttons (`.active:scale-95`)
- Profile image grayscale with hover color effect

### Asset Management
- Profile image: `./enes-foto.jpeg` (referenced in App.tsx, stored in `public/`)
- All static assets should be placed in `public/` directory
