import { fetchPokemon, fetchPokemonSpecies } from "@/lib/api";
import { transformDataPokemon } from "@/lib/utils";
import type {
  TPokemon,
  TPokemonResponse,
  TPokemonSpeciesResponse,
} from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonDetails(id: number) {
  return useQuery<TPokemon>({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 5000));
      const pokemonDetails: TPokemonResponse = await fetchPokemon(id);
      const pokemonSpecies: TPokemonSpeciesResponse = await fetchPokemonSpecies(
        pokemonDetails.species.name,
      );

      return transformDataPokemon(pokemonDetails, pokemonSpecies);
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
}
