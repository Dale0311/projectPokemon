import { fetchAllPokemonName } from "@/lib/api";
import type { TPokemonAllNames } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function useAllPokemonNames() {
  return useQuery({
    queryKey: ["allPokemonNames"],
    queryFn: async () => {
      const pokemonDetails: { results: TPokemonAllNames[] } =
        await fetchAllPokemonName();
      return pokemonDetails.results;
    },
    staleTime: Infinity,
  });
}
