# Project Pokémon

A Pokédex web application built with **React + TypeScript** using the **PokeAPI**.

This project is part of my journey learning **modern frontend development**, focusing on React architecture, custom hooks, routing, and API data handling.

---

# Live Demo

Netlify Deployment:

https://pokedexv26.netlify.app/

---

# Features

### Pokédex List

- Displays Pokémon in a card layout
- Fetches data from the PokeAPI
- Responsive layout

### Pokémon Details Page

Implemented dynamic routing using **React Router**.

Route structure:

```
/pokemons/:id
```

Each Pokémon has its own detail page.

### Theme Toggle

- Light / Dark mode
- Implemented using a **Theme Context**
- Minimalist toggle switch

### Sidebar Layout

Using **shadcn/ui sidebar**

Features:

- Collapsible sidebar
- Layout abstraction using `RootLayout`

---

# Custom Hooks

### usePokemon

Responsible for:

- Fetching Pokémon list
- Flattening API data
- Preparing data for UI components

### usePokemonDetails

Responsible for:

- Fetching Pokémon details
- Preparing data for the details page

Separating API logic into hooks keeps components **clean and reusable**.

---

# Tech Stack

Frontend

- React
- TypeScript
- Vite
- React Router

UI

- TailwindCSS
- shadcn/ui

API

- PokeAPI

Deployment

- Netlify

---

# Project Structure

```
src
│
├── components
│   ├── PokemonCard
│   └── PokemonCards
│
├── hooks
│   ├── usePokemon
│   └── usePokemonDetails
│
├── layouts
│   └── RootLayout
│
├── pages
│   ├── Home
│   └── PokemonDetails
│
├── context
│   └── ThemeContext
│
└── router
    └── AppRouter
```

---

# Project Progress

### March 2026

- Migrated deployment from **GitHub Pages → Netlify**
- Added **React Router**
- Implemented **dynamic route `/pokemons/:id`**
- Created **usePokemonDetails hook**
- Initialized **PokemonDetails page**
- Refactored **usePokemon hook**
- Flattened API data before passing to components
- Fixed deployment issues
- Improved TypeScript types

### Earlier Progress

- Implemented **theme toggle**
- Created **PokemonCard & PokemonCards components**
- Built **API fetch helper**
- Initialized project structure

---

# Future Improvements

Planned features:

- Pokémon evolution chain
- Abilities and stats display
- Search functionality
- Pagination / infinite scroll
- Loading skeletons
- Better mobile layout

---

# Installation

Clone the repository

```bash
git clone https://github.com/Dale0311/projectPokemon.git
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

---
