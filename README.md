# Vue 3 + Vite + Tailwind 4 Quickstarter

A minimal, production-ready Vue 3 boilerplate setup with:

- ✌️ [Vue 3](https://vuejs.org/)
- ⚡️ [Vite](https://vitejs.dev)
- 🧭 [Vue Router](https://router.vuejs.org) (lazy-loaded)
- 🧠 [Pinia](https://pinia.vuejs.org) store
- 🎨 [Tailwind 4](https://tailwindcss.com) with design tokens
- 🧹 [ESLint](https://eslint.org) for code
- ✨ [Prettier](https://prettier.io) for formatting

Mostly a no-TS, no-testing, prototype booster for my funny little ideas.  
Could be a great project foundation to build upon too I guess...

---

In future I'll work to attempt to bring ESLint up to v9, but it was being annoying so no promises.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

---

## 📁 Project Structure

```
src/
├── App.vue              # Root layout
├── main.js              # App, Pinia, Router
├── assets/              # Static files
├── components/          # UI + layout components
├── router/              # Route config (lazy-loaded)
├── stores/              # Pinia stores
├── styles/              # Tailwind theme
├── views/               # Route views
```

---

## 🧠 Features

- Vue 3 Composition API w/ \<script setup\>
- Basic router w/ dummy view
- Pinia store w/ counter as per law
- Basic Tailwind 4 setup with the start of a theme
- ESLint for errors & structure
- Prettier for prettiness, with my opinions tho
- VS Code settings, recommended extensions
- Github action for linting on push
- The most basic structural sample to build upon
- BYO Typescript & Testing framework, soz

---

## 🧪 Commands

```bash
npm run dev       # Run locally
npm run build     # Build for prod
npm run preview   # Preview prod build
npm run lint      # Find lint issues
npm run lint:fix  # Auto-fix lint issues
npm run format    # Prettify the code
```

---

## 🛠 Recommended VSCode Extensions

VSCode buddies for making life with this boilerplate much easier:

- Prettier (`esbenp.prettier-vscode`)
- ESLint (`dbaeumer.vscode-eslint`)
- Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)
- Vue Volar (`vue.volar`)

---

## 📋 License

[MIT](./LICENSE) — freely usable with attribution.
