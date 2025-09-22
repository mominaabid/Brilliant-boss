# Copilot Instructions for Brilliant_Boss

## Project Overview
- **Stack:** React + TypeScript + Vite
- **Structure:**
  - `src/components/` — UI components, organized by feature/domain (e.g., `Jobs/`, `login/`, `Main/`, `services/`)
  - `src/store/` — State management (e.g., `store.tsx`, `theme.tsx`)
  - `src/utils/` — Shared helpers and icons
  - `public/` — Static assets (images, videos)
- **Entry Points:** `src/main.tsx` (app bootstrap), `src/App.tsx` (root component)

## Key Patterns & Conventions
- **Component Organization:**
  - Feature-based folders (e.g., `Jobs/`, `Forms/`, `services/`)
  - Use TypeScript types from `components/types.tsx` for props and data models
- **Styling:**
  - Tailwind CSS utility classes are used for layout and design
- **Date Formatting:**
  - Use `toLocaleDateString('en-GB', ...)` for displaying dates (see `jobCard.tsx`)
- **Description Truncation:**
  - Use helper functions to preview long text (see `truncateDescription` in `jobCard.tsx`)

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint, see `eslint.config.js`)
- **Type Checking:** `tsc --noEmit` (uses `tsconfig.app.json` and `tsconfig.node.json`)

## Integration & Data Flow
- **Job Data:**
  - Passed as props to components (see `JobCardProps` in `jobCard.tsx`)
  - No backend API integration is visible; data is likely static or passed from parent
- **Forms:**
  - Located in `components/Forms/` (e.g., `CandidateForm.tsx`, `ContactForm.tsx`)

## External Dependencies
- **React Icons:** Used for UI icons (e.g., `react-icons/io5`, `react-icons/bi`)
- **Vite Plugins:** See `vite.config.ts` for customizations

## Project-Specific Notes
- **No custom test setup** is visible; add tests in `src/` if needed
- **No API layer** is present; add integration in `src/utils/` or feature folders if required
- **Follow feature folder structure** for new components and logic

## Example: Adding a New Job Card
1. Define the job type in `components/types.tsx`
2. Add a new component in `components/Jobs/`
3. Use Tailwind classes for styling
4. Pass job data as props and use helpers for formatting

---

_If you update project structure or conventions, please update this file to keep AI agents productive._
