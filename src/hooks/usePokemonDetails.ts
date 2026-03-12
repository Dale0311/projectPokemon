import { fetchPokemon, fetchPokemonSpecies } from "@/lib/api";
import { transformDataPokemon } from "@/lib/utils";
import type {
  TPokemon,
  TPokemonResponse,
  TPokemonSpeciesResponse,
} from "@/types/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePokemonDetails(name: string) {
  return useSuspenseQuery<TPokemon>({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const pokemonDetails: TPokemonResponse = await fetchPokemon(name);
      const pokemonSpecies: TPokemonSpeciesResponse =
        await fetchPokemonSpecies(name);

      return transformDataPokemon(pokemonDetails, pokemonSpecies);
    },
  });
}
