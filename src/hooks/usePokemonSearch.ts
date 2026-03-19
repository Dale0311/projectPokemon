import { fetchPokemonCard } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function usePokemonSearch(id: string) {
  return useQuery({
    queryKey: ["pokemonList", id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      const pokemon = await fetchPokemonCard(id);
      return pokemon;
    },
    enabled: !!id,
  });
}
