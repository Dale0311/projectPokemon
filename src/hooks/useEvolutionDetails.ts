import { fetchEvolutionChain, fetchPokemonCard } from "@/lib/api";
import { extractID, flattenEvolutionChain } from "@/lib/utils";
import type { TEvolutionNode, TPokemonCardEvolution } from "@/types/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useEvolutionDetails(url: string) {
  return useSuspenseQuery<TPokemonCardEvolution[]>({
    queryKey: ["pokemon", `pokemonEvolution-${extractID(url)}`],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      const chain: { chain: TEvolutionNode } = await fetchEvolutionChain(url);

      if (chain.chain.evolves_to.length === 0) return [];
      const flattenChain: string[] = flattenEvolutionChain(chain.chain);

      const evolution = await Promise.all(
        flattenChain.map((id) => fetchPokemonCard(id)),
      );

      return evolution;
    },
    staleTime: 1000 * 60 * 5,
  });
}
