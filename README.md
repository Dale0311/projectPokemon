# 🧬 Pokédex — Developer Build Log

A Pokédex built with **React + TypeScript**, created as part of my journey toward becoming a stronger frontend engineer.

🔗 **Live Site:**  
[https://dale0311.github.io/projectPokemon/](https://dale0311.github.io/projectPokemon/)

---

## 🛠 Tech Stack

- ⚛️ React
- 🟦 TypeScript
- 🎨 TailwindCSS
- 🧩 shadcn/ui
- 🔗 PokeAPI
- 🚀 GitHub Pages (deployment)

---

## 🎯 Why I’m Building This

After revisiting core JavaScript fundamentals, I wanted to build something:

- Practical
- Scalable
- Cleanly structured
- Deployment-ready

This project is not rushed.

It’s intentionally built step-by-step, treating each feature like a real-world production decision.

---

# 📖 Development Log

---

## 🟢 March 1 — Project Initialized

**Commit:** `3ac33ad`  
Started the repository.

No fancy setup — just structure and direction.

---

## 🧰 March 2 — API Layer First

**Commit:** `62bf6f7`  
Created a fetch helper abstraction.

Why?

Because even in small projects, duplicated fetch logic becomes messy fast.  
I wanted early separation of concerns.

Lesson:

> Treat even small apps like they might grow.

---

## 🧩 March 2 — UI Foundation

**Commit:** `45cbc0b`  
Built:

- `PokemonCard`
- `PokemonCards` grid wrapper

Decisions made:

- Keep cards purely presentational.
- Grid handles layout.
- Clean prop typing.

Focus:  
Component clarity > speed.

---

## 🌗 March 2 — Theme System Architecture

**Commit:** `f716833`  
Initialized `ThemeContext`.

Instead of hardcoding dark mode, I built:

- Global theme provider
- `"light"` | `"dark"` | `"system"` support
- System preference detection
- Toggle-ready structure

---

## 🎛 March 2 — Theme Toggle UI

**Commit:** `cac4243` → `e5c6bce`

Implemented:

- Toggle button
- Proper state switching
- System theme fallback
- Tailwind dark mode integration

What I learned:  
Theme systems are more about architecture than styling.

---

## 🚀 March 3 — Deployment Struggles (GitHub Pages)

Commits:

- `935ca8a`
- `385ba24`
- `fixing build dist part#2`

Problem:

- MIME type error
- Wrong asset paths
- `dist` not loading properly

Root cause:  
Vite base path misconfiguration for GitHub Pages.

Fix:  
Proper production build + correct base configuration.

Lesson:

> Deployment is part of frontend engineering.  
> If it doesn’t deploy cleanly, it’s not finished.

Now live at:  
[https://dale0311.github.io/projectPokemon/](https://dale0311.github.io/projectPokemon/)

---

# ✅ Current Features

- Pokémon Card component
- Responsive Grid Layout
- Centralized Fetch Helper
- Theme Context (light/dark/system)
- Functional Toggle Button
- Production Deployment

---

# ⏳ Planned Features

- Pokémon Details Page
- Evolution Chain
- Stats Visualization
- Type Weakness Logic
- Pagination or Infinite Scroll
- Better loading states
- Error boundaries

---

# 🧠 What This Project Is Really About

This isn’t just a Pokédex.

It’s practice in:

- Clean architecture
- Thoughtful commits
- Incremental improvement
- Debugging real deployment issues
- Writing code I’m not embarrassed to show

---

## 🏗 Design Philosophy

Minimal first.

No heavy gradients.  
No flashy effects.  
Just clean UI that can scale.
