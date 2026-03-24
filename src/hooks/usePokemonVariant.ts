import { fetchPokemonCard } from "@/lib/api";
import { extractID } from "@/lib/utils";
import type { TPokemonCardEvolution, TVarieties } from "@/types/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePokemonVariant(varieties: TVarieties[]) {
  return useSuspenseQuery<TPokemonCardEvolution[]>({
    queryKey: [
      "pokemon",
      `pokemonVariant-${extractID(varieties[0].pokemon.url)}`,
    ],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      const pokemons = await Promise.all(
        varieties.map((p) => fetchPokemonCard(extractID(p.pokemon.url))),
      );

      return pokemons;
    },
    staleTime: 1000 * 60 * 5,
  });
}
