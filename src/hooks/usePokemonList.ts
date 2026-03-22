import type { TPokemonCard } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";
import { useAllPokemonNames } from "./useAllPokemonNames";
import { createPokemonCardData } from "@/lib/utils";

export function usePokemonList(pageNumber: number = 1) {
  const PAGE_SIZE = 40;
  const { data: allPokemonNames = [] } = useAllPokemonNames();
  return useQuery<TPokemonCard[]>({
    queryKey: ["pokemonList", pageNumber],
    queryFn: async (): Promise<TPokemonCard[]> => {
      let pokemons: { name: string; url: string }[] = [];
      const start = PAGE_SIZE * (pageNumber - 1);
      const end = start + PAGE_SIZE;
      pokemons = allPokemonNames.slice(start, end);
      return pokemons.map((pokemon) => createPokemonCardData(pokemon));
    },
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    enabled: allPokemonNames.length > 0,
  });
}
