import { fetchPokemon, fetchPokemonList } from "../lib/api";
import type { TPokemonCard, TPokemonResponse } from "@/types/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePokemonList(limit: number) {
  return useSuspenseQuery<TPokemonCard[]>({
    queryKey: ["pokemon-list", limit],
    queryFn: async () => {
      const data = await fetchPokemonList(limit);
      if (!data?.results) throw new Error("Invalid API response");

      const requests = data.results.map((d: { name: string }) =>
        fetchPokemon(d.name),
      );
      const pokemonResponses: TPokemonResponse[] = await Promise.all(requests);

      return pokemonResponses.map((p) => ({
        id: p.id,
        name: p.name,
        img: p.sprites.other["official-artwork"].front_default,
        types: p.types.map((t) => t.type.name),
      }));
    },
    staleTime: 1000 * 60 * 60 * 24, // 1day fresh
    gcTime: 1000 * 60 * 60 * 24,
  });
}
