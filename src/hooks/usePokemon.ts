import { useEffect, useState } from "react";
import { fetchAPI } from "../lib/api";
import type { TPokemon } from "@/types/pokemon";

export function usePokemon(limit: number) {
  const [pokemons, setPokemons] = useState<TPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getPokemons() {
      try {
        const data = await fetchAPI(`/pokemon?limit=${limit}`, {
          signal: controller.signal,
        });

        const d = data.results.map(async (pokemon: TPokemon) => {
          const p = await fetchAPI(`pokemon/${pokemon.name}`);
          const pokemonBasic = {
            id: p.id,
            name: p.name,
            img: p.sprites.other["official-artwork"].front_default,
            types: p.types.map((t: any) => t.type.name),
          };
          return pokemonBasic;
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
