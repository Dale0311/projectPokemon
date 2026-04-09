import { fetchPokemon } from "@/lib/api";
import type { TPokemonResponse } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemon(id: number) {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      const data: TPokemonResponse = await fetchPokemon(id);
      return {
        name: data.name,
        id: data.id,
        img: data.sprites.other["official-artwork"].front_default,
        types: data.types,
      };
    },
    staleTime: 1000 * 60 * 60,
  });
}
