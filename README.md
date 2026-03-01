# 🧬 Pokédex — React + TypeScript

A modern, minimalist Pokédex built with:

- ⚛️ React
- 🟦 TypeScript
- 🎨 TailwindCSS
- 🧩 shadcn/ui
- 🔗 PokeAPI

---

## 🚀 Project Goal

To build a clean, scalable, and production-quality Pokédex application while strengthening:

- API data handling
- Component architecture
- Responsive layout design
- UI/UX decisions
- Theme system implementation
- Real-world frontend structuring

This project is being built progressively and intentionally — focusing on clean structure over speed.

---

## 📦 Current Features

✅ Pokémon card component  
✅ Responsive card grid wrapper  
✅ Fetch API helper abstraction  
✅ Clean project initialization  
⬜ Pokémon details page  
⬜ Evolution chain integration  
⬜ Stats visualization  
⬜ Type weakness logic  
⬜ Theme toggle (planned)  
⬜ Pagination / Infinite Scroll

---

## 🧱 Architecture Decisions

### Component Structure

- `PokemonCard` → Pure UI component
- `PokemonCards` → Layout wrapper (grid system)

Separation of concerns applied early.

---

## 📜 Commit History Progress

### 🟢 Initial Setup

**Commit:** `3ac33ad`  
📅 March 1, 2026

> Initialize repository

---

### 🧰 Fetch Abstraction

**Commit:** `62bf6f7`  
📅 March 2, 2026

> Created fetch API helper

Purpose:

- Centralized API logic
- Prevent duplicated fetch patterns
- Prepare for scalable data layer

---

### 🛟 Safety Snapshot

**Commit:** `09959fc`  
📅 March 2, 2026

> Save before disaster

---

### 🧩 Core UI Components

**Commit:** `45cbc0b`  
📅 March 2, 2026

> Created PokemonCard & PokemonCards component

- Minimalist card design
- Responsive grid layout
- Theme-ready structure
- Clean data typing

---

## 🎨 Design Philosophy

Minimal first.

No heavy gradients.
No unnecessary glow.
Theme-toggle friendly.

The goal is long-term maintainability and professional presentation.

---

## 📐 Responsive Strategy

Using modern CSS Grid:

```css
grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
```
