import { fetchPokemon, fetchPokemonList } from "../lib/api";
import type { TPokemonCard, TPokemonResponse } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonList(limit: number) {
  return useQuery({
    queryKey: ["pokemon-list", limit],
    queryFn: async () => {
      const data = await fetchPokemonList(limit);

      // get pokemon data
      const pokemons = data.results.map(async (d: { name: string }) => {
        const pokemonResponse: TPokemonResponse = await fetchPokemon(d.name);
        const pokemonCard: TPokemonCard = {
          id: pokemonResponse.id,
          name: pokemonResponse.name,
          img: pokemonResponse.sprites.other["official-artwork"].front_default,
          types: pokemonResponse.types.map((t) => t.type.name),
        };

        return pokemonCard;
      });

      return Promise.all(pokemons);
    },
  });
}
