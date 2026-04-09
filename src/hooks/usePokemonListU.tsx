import { fetchAllPokemonByTypes, fetchAllPokemonName } from "@/lib/api";
import type { TPokemonAllNames, TVarieties } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonListU(types: string[] = []) {
  return useQuery({
    queryKey: ["pokemonList", types.length && types.join("-")],
    queryFn: async () => {
      if (types.length === 0) {
        const pokemonDetails: { results: TPokemonAllNames[] } =
          await fetchAllPokemonName();
        return pokemonDetails.results;
      } else {
        const pokemons: { pokemon: TVarieties[] }[] = await Promise.all(
          types.map((t) => fetchAllPokemonByTypes(t)),
        );
        if (pokemons.length === 1) {
          const pokemon = pokemons[0].pokemon;
          return pokemon.map((p) => p.pokemon);
        }
        const lookup = new Set(pokemons[0].pokemon.map((p) => p.pokemon.name));
        const p = pokemons[1].pokemon
          .filter((p) => lookup.has(p.pokemon.name))
          .map((v) => v.pokemon);
        return p;
      }
    },
  });
}
