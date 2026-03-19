import { fetchAllPokemonName } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function useAllPokemonNames() {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () => {
      const pokemonDetails: { results: { name: string }[] } =
        await fetchAllPokemonName();
      return pokemonDetails;
    },
    select: (res) => res.results.map((r) => r.name),
    staleTime: Infinity,
  });
}
