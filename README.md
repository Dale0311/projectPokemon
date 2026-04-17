# 🧢 Pokédex App

A modern Pokédex web application built with **React**, focused on performance, scalability, and clean architecture.
This project showcases advanced data fetching, caching strategies, and dynamic filtering using real-world patterns.

🔗 Live Demo: https://pokedexv26.netlify.app/
📦 Repository: https://github.com/Dale0311/projectPokemon

---

## 🚀 Tech Stack

- ⚛️ React (Vite)
- 🟦 TypeScript
- 🔄 TanStack React Query
- 🌐 Axios
- 🎨 Tailwind CSS + shadcn/ui
- 🧭 React Router
- ☁️ Netlify (Deployment)

---

## ✨ Core Features

### 🔍 Pokémon Search

- Search Pokémon by name
- Cached search results for faster repeated queries
- “View All” dialog for expanded results

### 🧬 Advanced Filtering

- Filter by **type**
- Filter by **generation**
- Combined filtering (type + generation)
- Strict filtering mode for precise results

### ⚡ Optimized Data Fetching

- Built with **React Query**
- Smart query keys to prevent unnecessary refetching
- Configured `staleTime` for caching efficiency
- Reduced API calls by:
  - Using static image URLs instead of fetching per Pokémon
  - Refactoring query logic

### 📄 Pokémon Details Page

- Dynamic routing (`/pokemons/:id`)
- Displays:
  - Basic info
  - Evolution chain
  - Variants / forms

- Smooth navigation between Pokémon

### 🔁 Evolution System

- Separate hook for evolution data
- Uses Pokémon ID instead of name for accuracy
- Improved data structure handling

### 🎨 UI/UX Improvements

- Skeleton loaders for better perceived performance
- Theme toggle (light/dark mode)
- Responsive layout
- Sidebar navigation
- Prevents spam clicking during loading

---

## 🧠 Key Learnings

- Structuring scalable React applications
- Designing custom hooks for data fetching
- Managing server state using React Query
- Creating efficient query keys
- Handling complex API response shapes
- Reducing unnecessary re-renders and API calls
- Improving UX with loading states and caching

---

## 📁 Project Structure

```
src/
  components/
  hooks/
  layouts/
  lib/        # API + utilities
  routes/
  types/
```

---

## 🔧 Installation

```bash
git clone https://github.com/Dale0311/projectPokemon.git
cd projectPokemon
npm install
npm run dev
```

---

## 📜 Project History / Changelog

### 🟢 April 2026

- Implemented **generation filtering**
- Combined **type + generation filtering logic**
- Refactored query keys for better caching
- Improved Home layout structure
- Added **createStaticImg** utility for optimized image loading
- Enhanced search with **“View All” dialog**
- Prevented duplicate fetches in filtering logic

---

### 🟡 Late March 2026

- Implemented **advanced search (type selection)**
- Built **filter system architecture**
- Added **strict filtering mode**
- Created **Pokemon varieties / forms feature**
- Refactored evolution logic to use **ID instead of name**
- Improved pagination (initial version)

---

### 🔵 Mid March 2026

- Migrated to **React Query + Axios**
- Introduced **Suspense + useSuspenseQuery**
- Created:
  - `usePokemonDetails`
  - `useEvolutionDetails`

- Added **skeleton loading UI**
- Reduced loading delays
- Implemented **search caching hook**
- Improved navigation controls (prevent spam clicks)

---

### 🟣 Early March 2026

- Setup **React Router & layouts**
- Built **PokemonCard & listing UI**
- Implemented **theme toggle (dark/light mode)**
- Fixed build & deployment issues
- Migrated deployment from **GitHub Pages → Netlify**
- Added SPA redirect support

---

### ⚪ Project Initialization (March 1, 2026)

- Initialized repository
- Setup base project structure
- Created initial API fetching utilities

---

## 📈 Future Improvements

- 🔐 Add favorites / bookmarking system
- 📊 Pokémon stats visualization (charts)
- 🔎 Debounced search input
- 🧭 Improved navigation UX
- 📱 Better mobile optimization
- 🧪 Add testing (Vitest / React Testing Library)
- 🌍 Internationalization (i18n)

---

## 🧪 Challenges Faced

- Handling different API response structures
- Designing scalable query keys
- Avoiding duplicate fetches
- Managing nested evolution data
- Keeping UI responsive with multiple queries

---

## 🙌 Acknowledgements

- https://pokeapi.co/
- shadcn/ui

---

## 📌 Author

**Dale Cabarle**

---

## ⭐ Final Thoughts

This project started as a simple Pokédex but evolved into a deeper exploration of:

- data fetching strategies
- performance optimization
- scalable React architecture

It reflects my journey in learning modern React and building real-world applications.
