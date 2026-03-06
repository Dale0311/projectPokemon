import { fetchAPI } from "@/lib/api";
import type { TPokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";

export function usePokemonDetails(id: string) {
  const [pokemonDetails, setPokemonDetails] = useState<TPokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchPokemonDetails(id: string) {
      try {
        const data = await fetchAPI(`pokemon/${id}`, {
          signal: controller.signal,
        });
        const pokemonBasic = {
          id: data.id,
          name: data.name,

          img: data.sprites.other["official-artwork"].front_default,

          types: data.types.map((t) => t.type.name),

          height: data.height,
          weight: data.weight,

          abilities: data.abilities.map((a) => ({
            name: a.ability.name,
            hidden: a.is_hidden,
          })),

          stats: data.stats.map((s) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
          moves: data.moves.slice(0, 4).map((m) => m.move.name),
        };

        setPokemonDetails(pokemonBasic);
      } catch (error) {
        setError(`Error from fetchPokemonDetails - ${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonDetails(id);
  }, [id]);

  return { loading, error, pokemonDetails };
}
