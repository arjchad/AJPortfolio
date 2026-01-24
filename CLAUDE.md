# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AJPortfolio is an interactive portfolio website built with Next.js 15 and React 19. It features an immersive, animation-heavy experience with a space/rocket launch theme. The site uses scroll-driven narrative where users start at scroll position 6000px and animate downward through sections.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Run production server
```

No test or lint scripts are configured.

## Architecture

### Technology Stack
- **Framework**: Next.js 15.1.0 with React 19
- **Styling**: Tailwind CSS 3.4.16
- **3D Graphics**: Three.js 0.171.0
- **Animation**: GSAP 3.12.5 (scroll triggers, timelines), Framer Motion, Anime.js
- **Smooth Scrolling**: Lenis (@studio-freight/lenis)

### Key Directories
- `src/pages/` - Next.js pages (`index.js` is the main 6000px tall page)
- `src/components/` - React components (RocketScene, RotatingSphere, Countdown, etc.)
- `src/lib/` - Utility libraries (lenis.js, SmokeSystem.js, threeSetup.js)
- `src/utils/` - Utilities (rocketAnimations.js with RocketShake class)
- `src/hooks/` - Custom hooks (useWindowSize, useCursorPosition)
- `public/` - Static assets (GIF sprites, fonts, cloud sprite sheets)

### Core Animation Systems

1. **Rocket Launch Sequence**: `Countdown.js` → `RocketScene.js` → `SmokeSystem.js`
   - 3-second countdown with GSAP fade animations
   - SVG rocket with animated flames using sine wave variations
   - Canvas-based particle system for smoke effects

2. **Skills Sphere** (`RotatingSphere.js`): Three.js 3D sphere with skill words positioned on surface, continuous rotation, loads Helvetiker font from Three.js CDN

3. **Scroll Control**: Document uses `position: fixed` technique to lock/unlock scrolling during animation sequences

### Important Patterns

- **Scroll position manipulation**: Animations are tied to scroll position; user scrolling is locked during key sequences
- **Component refs**: Rocket, smoke, countdown all use refs for direct DOM manipulation
- **SSR guards**: Check `typeof window !== 'undefined'` for browser-only code
- **Canvas coordinates**: SmokeSystem calculates spawn positions relative to viewport
- **Custom cursor**: Native cursor hidden, replaced with animated GIF (`CustomCursor.js`)

### Known Issues (from recent development)
- Animation timing inconsistent across different display resolutions
- User scroll can break during takeoff sequence
- Dynamic window resizing affects rocket launch functionality
