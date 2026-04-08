import { fetchAllPokemonByTypes } from "@/lib/api";
import type { TVarieties } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonListU(types: string[]) {
  return useQuery({
    queryKey: ["pokemonList", types.join("-")],
    queryFn: async () => {
      const pokemons: { pokemon: TVarieties[] }[] = await Promise.all(
        types.map((t) => fetchAllPokemonByTypes(t)),
      );
      return pokemons;
    },
    select: (data) => {
      if (data.length === 1) {
        const p = data[0].pokemon;
        return p;
      }
      const lookup = new Set(data[0].pokemon.map((p) => p.pokemon.name));
      const p = data[1].pokemon
        .filter((p) => lookup.has(p.pokemon.name))
        .map((v) => v.pokemon);

      return p;
    },
    enabled: types.length > 0,
  });
}
