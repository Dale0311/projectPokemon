import { useEffect, useState } from "react";
import type { TPokemon } from "../types/pokemon";
import { fetchAPI } from "../lib/api";

export function usePokemon(limit: number) {
  const [pokemons, setPokemons] = useState<TPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getPokemons() {
      try {
        setLoading(true);
        const data = await fetchAPI(`/pokemon?limit=${limit}`, {
          signal: controller.signal,
        });

        // use pokemon-form instead of pokemon to reduce size
        const d = data.results.map(async (pokemon: TPokemon) => {
          const p = await fetchAPI(`pokemon/${pokemon.name}`);
          return {
            ...p,
            img: p.sprites.other["official-artwork"].front_default,
          };
        });

        const p = await Promise.all(d);
        setPokemons(p);
      } catch (error) {
        // btw, this is a type guard :)
        if (typeof error === "string") {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }
    getPokemons();
    return () => controller.abort();
  }, [limit]);

  return { pokemons, loading, error };
}
