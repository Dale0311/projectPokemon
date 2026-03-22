import { useQuery } from "@tanstack/react-query";
import type { TPokemonAllNames } from "@/types/pokemon";
import { createPokemonCardData } from "@/lib/utils";

export function usePokemonSearch(name: string, pokemons: TPokemonAllNames[]) {
  const isEnabled = pokemons?.length > 0 && Boolean(name);
  return useQuery({
    queryKey: ["pokemonList", name],
    queryFn: async () => {
      const pokemon = pokemons.find((pokemon) => pokemon.name === name);
      if (pokemon) return createPokemonCardData(pokemon);
    },
    staleTime: 1000 * 60 * 5,
    enabled: isEnabled,
  });
}
