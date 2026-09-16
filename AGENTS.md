# AGENTS.md

React 18 single-page portfolio, bootstrapped with Create React App (`react-scripts` 5). UI text is in Spanish. No test files exist (`npm test` enters watch mode with nothing to run).

## Commands

- `npm start` — dev server on `:3000`
- `npm run build` — production build to `build/` (gitignored); use to verify changes compile
- `npm test` — Jest watch; there are currently no tests

## Project layout

- `src/componentes/<Section>/` — one folder per page section (`Home`, `About`, `Project`, `Technology`, `Certificados`, `Reviews`, `Footer`, `NavBar`, `Inicio`). Component + matching `*.module.css` stay together; keep styles scoped there.
- `src/core/ui/` — reusable UI pieces (`Loader`, `SampleNextArrow`, `SamplePrevArrow`).
- `src/utils/data.jsx` — centralized section data; edit here instead of hardcoding content in components.
- `src/assets/`, `src/doc/`, `src/video/` — images, CV PDFs (referenced by import, e.g. `Home.jsx`), videos.
- `src/Redux/` — classic Redux store (`store.js`, `reducer.js`, `actions.js`) with redux-thunk and `__REDUX_DEVTOOLS_EXTENSION__`.
- `src/store/` — Zustand store (`store/ui/ui.store.js`), used for UI state via `useStoreUi`.

## Conventions and quirks

- **Router**: React Router v5, not v6 — use `<Route exact path=...>` / `<Switch>`. Imports mix `react-router-dom` and `react-router-dom/cjs/react-router-dom.min`; don't "fix" that or add v6 APIs.
- **Two state systems**: backend-facing state (reviews/count) lives in Redux, UI state lives in Zustand. Follow whichever store the file you're editing already uses; don't migrate between them.
- **Backend coupling**: `src/index.js` hardcodes `axios.defaults.baseURL` to a Railway API. `actions.js` calls `/count` and `/reviews`. These calls fail in dev if the backend is down — don't assume app bugs from failing network requests.
- **Bilingual copy**: `Home.jsx` holds an inline `translations = { es, en }` object; match that pattern for new UI copy.
- Import files/resources with explicit relative paths (PDFs, images, SVGs) like existing components do — CRA exposes them via imports.
- Keep copy in Spanish (site language); English only for the `en` translation branch.

## Repo-local OpenCode config

- `.opencode/agent/portfolio-dev.md` defines the project-specific primary agent (`npm run build` is the verification check).