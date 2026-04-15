import { fetchAllPokemonByTypes, fetchAllPokemonName } from "@/lib/api";
import type { TPokemonReturnDataShape } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonListU(types: string[] = []) {
  return useQuery({
    queryKey: ["pokemonList", types.length && types.sort().join("-")],
    queryFn: async () => {
      if (types.length === 0) {
        const pokemonDetails: { results: TPokemonReturnDataShape[] } =
          await fetchAllPokemonName();
        return pokemonDetails.results;
      } else {
        const pokemons: {
          pokemon: { pokemon: TPokemonReturnDataShape }[];
          name: string;
        }[] = await Promise.all(types.map((t) => fetchAllPokemonByTypes(t)));
        if (pokemons.length === 1) {
          const pokemon = pokemons[0].pokemon;
          return pokemon.map((p) => p.pokemon);
        }
        const z = pokemons.flatMap((t) => {
          return t.pokemon.map((p) => ({
            pokemon: p.pokemon,
            type: t.name,
          }));
        });
        const map = new Map<string, TPokemonReturnDataShape>();
        z.forEach((pokemon) => {
          if (!map.has(pokemon.pokemon.name)) {
            return map.set(pokemon.pokemon.name, {
              ...pokemon.pokemon,
              type: [pokemon.type],
            });
          }
          map.get(pokemon.pokemon.name)?.type?.push(pokemon.type);
        });
        const data = Array.from(map.values());
        return data;
      }
    },
  });
}
