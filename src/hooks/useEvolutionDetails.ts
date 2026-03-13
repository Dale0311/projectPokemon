import { fetchEvolutionChain, getChainDetails } from "@/lib/api";
import { flattenEvolutionChain } from "@/lib/utils";
import type { TEvolutionNode, TPokemonCard } from "@/types/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useEvolutionDetails(url: string) {
  return useSuspenseQuery<TPokemonCard[]>({
    queryKey: ["pokemon", url],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      const chain: { chain: TEvolutionNode } = await fetchEvolutionChain(url);
      const flattenChain: string[] = flattenEvolutionChain(chain.chain);
      const evolution = await Promise.all(
        flattenChain.map((name) => getChainDetails(name)),
      );

      return evolution;
    },
  });
}
