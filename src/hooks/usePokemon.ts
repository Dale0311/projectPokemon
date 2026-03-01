import { useEffect, useState } from "react";
import type { Pokemon } from "../types/pokemon";
import { fetchAPI } from "../lib/api";

export function usePokemon(limit: number) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getPokemons() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(true);
        const data = await fetchAPI(`?limit=${limit}`, {
          signal: controller.signal,
        });
        setPokemons(data);
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
