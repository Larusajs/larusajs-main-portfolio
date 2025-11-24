# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern developer portfolio website built with React 19, TypeScript, and Vite. It features an AI-powered chat widget using Google's Gemini API to answer questions about the developer's experience, projects, and skills.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

The application requires a Gemini API key to enable the AI chat widget:
- Set `GEMINI_API_KEY` in `.env.local`
- The key is exposed to the client via `vite.config.ts` as `process.env.API_KEY`

## Architecture

### Component Structure

The app follows a single-page layout pattern with these main sections:
- **App.tsx**: Root component orchestrating all sections in linear order
- **Header**: Sticky navigation with smooth scroll to sections
- **Hero**: Landing section with developer name and title
- **Partners**: Horizontal scrolling partner logos
- **About**: Bio and skills showcase
- **Experience**: Timeline of work experience
- **Projects**: Grid of featured projects with SpotlightCard UI
- **Publications**: List of articles/publications
- **Contact**: Contact form/links
- **ChatWidget**: Fixed floating AI chat interface

### Data Layer

All portfolio data is centralized in `constants.ts`:
- `DEV_NAME`, `DEV_TITLE`, `BIO`: Personal information
- `SKILLS`: Array of technical skills
- `PROJECTS`: Array of `Project` objects (defined in `types.ts`)
- `EXPERIENCE`: Array of `Experience` objects (defined in `types.ts`)
- `PUBLICATIONS`, `SOCIAL_LINKS`, `PARTNERS`: Supporting data
- `SYSTEM_INSTRUCTION`: Defines the AI assistant's behavior and knowledge scope

### AI Chat Integration

The chat widget architecture:
1. **ChatWidget.tsx**: UI component managing chat state, streaming display, and user interactions
2. **services/geminiService.ts**: Handles Gemini API initialization and streaming responses
3. **constants.ts**: Provides system instructions that scope the AI to portfolio data only

The chat session is stateful (persists across messages) and uses streaming responses for real-time display.

### Styling Approach

- Uses Tailwind CSS loaded from CDN in `index.html`
- Custom Tailwind config extends default theme with scroll animations
- Black and white minimalist aesthetic throughout
- Custom scrollbar styles defined in `index.html`
- Responsive design with mobile-first approach

### Module System

The app uses ESM with import maps defined in `index.html`:
- React 19 and dependencies are loaded from `aistudiocdn.com` CDN
- Vite bundles TypeScript source files
- Path alias `@/*` maps to project root (configured in both `vite.config.ts` and `tsconfig.json`)

## Key Implementation Details

**Gemini Integration**: The service initializes a chat session with `gemini-2.5-flash` model. The system instruction in constants.ts constrains the AI to only answer questions based on the portfolio data.

**State Management**: Uses React hooks (useState, useEffect, useRef) without external state libraries. Chat history is stored in component state.

**Streaming UI**: The chat displays responses incrementally as they arrive from the Gemini API, with a pulsing cursor indicating active streaming.

**Type Safety**: TypeScript interfaces in `types.ts` define the shape of `Project`, `Experience`, and `ChatMessage` objects used throughout the app.
