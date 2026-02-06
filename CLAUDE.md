# CLAUDE.md

## Project Overview

Personal portfolio website for Richard Ngo, a Full-Stack Developer. Built as a single-page application with a cyberpunk/Tron-inspired dark theme featuring animated grid backgrounds, glow effects, and a bento grid layout.

## Tech Stack

- **Framework**: React 18.2 with TypeScript 5.0
- **Build Tool**: Vite 6.3
- **Styling**: Tailwind CSS 3.3 (utility-first) + custom CSS variables in `src/index.css`
- **Linting**: ESLint 8 with `@typescript-eslint`, `react-hooks`, and `react-refresh` plugins
- **Formatting**: Prettier 3.0 with `prettier-plugin-tailwindcss` for class sorting
- **Icons**: `@heroicons/react`, `react-icons`
- **UI**: `@headlessui/react` for accessible unstyled components
- **Drag & Drop**: `@dnd-kit/core` and `@dnd-kit/sortable` (imported, not yet in active use)

## Commands

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # TypeScript type-check (tsc) then Vite production build
npm run lint      # ESLint with --max-warnings 0 (zero tolerance for warnings)
npm run preview   # Preview production build locally
```

**No test framework is configured.** There are no test commands or test files.

## Project Structure

```
src/
├── main.tsx                  # React DOM entry point
├── App.tsx                   # Root component wrapper
├── App.css                   # Global app styles
├── index.css                 # Tailwind directives + CSS variables + custom styles
├── vite-env.d.ts             # Vite TypeScript declarations
├── ModernPortfolio.tsx       # Main layout component — contains all portfolio data and page layout
└── components/
    ├── index.ts              # Barrel exports for all components and types
    ├── TronGridBackground.tsx  # Animated canvas background with light trails
    ├── Navigation.tsx          # Fixed header nav with mobile hamburger menu
    ├── Footer.tsx              # Page footer
    ├── BentoTile.tsx           # Reusable tile container with glow effects and entrance animation
    ├── HeroSection.tsx         # Main hero content block
    ├── ProjectCard.tsx         # Project display card
    ├── SkillBadge.tsx          # Tech skill pill/badge
    ├── StatTile.tsx            # Statistics display tile
    ├── SocialLink.tsx          # Social media link button
    ├── SocialIcons.tsx         # SVG icon definitions (GitHub, LinkedIn, Instagram, Twitter, Email)
    ├── ContactCTA.tsx          # Contact call-to-action block
    └── SectionHeader.tsx       # Section title divider
```

### Component Flow

```
main.tsx → App.tsx → ModernPortfolio.tsx
  ├── TronGridBackground (canvas animation)
  ├── Navigation (fixed header)
  ├── BentoTile grid layout
  │   ├── HeroSection
  │   ├── SocialLink (×3)
  │   ├── About Me content
  │   ├── SkillBadge (×10)
  │   ├── ProjectCard (×3)
  │   ├── ContactCTA
  │   └── StatTile (×3)
  └── Footer
```

## Architecture & Conventions

### Data Management

- All portfolio content is defined as constants at the top of `src/ModernPortfolio.tsx` (`PROFILE_DATA`, `ABOUT_CONTENT`, `SKILLS_DATA`, `PROJECTS_DATA`, `STATS_DATA`, `SOCIAL_LINKS`).
- No external API calls, no state management library (no Redux/Context), no routing (no React Router).
- Data flows down via props; there is no global state.

### Component Patterns

- **Functional components only** — no class components.
- **TypeScript interfaces** exported alongside components (e.g., `Skill`, `Project`, `Stat`, `GlowColor`, `SocialLinkData`).
- **Default exports** for components; **named exports** for types and icons.
- **Barrel exports** via `src/components/index.ts` — always import from `'./components'`, not individual files.
- Props typing uses inline interfaces or exported types; `React.FC<Props>` pattern is used.

### Styling Conventions

- **Tailwind CSS** utility classes are the primary styling method.
- **Inline `style` props** are used for dynamic values (box-shadow, gradients) that cannot be expressed as Tailwind classes.
- **CSS variables** in `src/index.css` define the dark/light theme (dark mode is the default).
- **Color palette**: Dark backgrounds with cyan (`#06b6d4`), purple (`#6366f1`), pink, and orange accent gradients.
- **Glow effects**: Implemented via `box-shadow` with rgba colors — see `BentoTile` for the pattern.
- Custom breakpoints defined in `tailwind.config.js`: `xs` (480px), `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1536px).
- Fonts: Space Grotesk (imported via Google Fonts in `index.css`), Noto Sans (default body).

### TypeScript Configuration

- **Strict mode** is enabled.
- `noUnusedLocals` and `noUnusedParameters` are enforced — unused variables will fail the build.
- Target: ES2020, module resolution: bundler mode.
- JSX transform: `react-jsx` (automatic runtime, no need to import React for JSX — though some files still do).

### Code Style

- **Single quotes** (enforced by Prettier via `.prettierrc.json`).
- Tailwind classes are auto-sorted by `prettier-plugin-tailwindcss`.
- ESLint enforces zero warnings (`--max-warnings 0`).
- `react-refresh/only-export-components` rule is set to warn — avoid exporting non-component values from component files.

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/ModernPortfolio.tsx` | Central file — all data + page layout. Edit here to change portfolio content. |
| `src/components/index.ts` | Barrel exports. Update when adding/removing components. |
| `src/components/BentoTile.tsx` | Core layout primitive. Defines `GlowColor` type and tile animation. |
| `src/components/TronGridBackground.tsx` | Canvas-based animated background. Performance-sensitive. |
| `src/index.css` | Theme CSS variables, Tailwind directives, global styles. |
| `tailwind.config.js` | Custom breakpoints and content paths. |

## Accessibility

- `aria-label` attributes on interactive elements.
- Semantic HTML structure.
- Focus styles defined globally in `index.css`.
- `prefers-reduced-motion` media query disables animations for users who prefer it.

## Deployment

- Static SPA — builds to `dist/` directory.
- No CI/CD pipelines or deployment configuration in the repo.
- Can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).
