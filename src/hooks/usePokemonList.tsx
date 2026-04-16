import {
  fetchAllPokemonByGen,
  fetchAllPokemonByTypes,
  fetchAllPokemonName,
} from "@/lib/api";
import { mergePokemonByType } from "@/lib/utils";
import type { TPokemonReturnDataShape } from "@/types/pokemon";
import { useQuery } from "@tanstack/react-query";

export function usePokemonListU(types: string[] = [], gen: string = "0") {
  const parsedGen = Number(gen);
  const hasGen = parsedGen > 0;
  const hasTypes = types.length > 0;

  return useQuery({
    queryKey: [
      "pokemon-list",
      hasGen ? `gen-${parsedGen}` : "all-gen",
      hasTypes ? [...types].sort().join("-") : "all-type",
    ],
    queryFn: async () => {
      if (!hasGen && !hasTypes) {
        const data: { results: TPokemonReturnDataShape[] } =
          await fetchAllPokemonName();
        return data.results;
      }

      if (hasGen && !hasTypes) {
        const data: { pokemon_species: TPokemonReturnDataShape[] } =
          await fetchAllPokemonByGen(gen);
        return data.pokemon_species;
      }

      if (!hasGen && hasTypes) {
        const data: {
          pokemon: { pokemon: TPokemonReturnDataShape }[];
          name: string;
        }[] = await Promise.all(types.map((t) => fetchAllPokemonByTypes(t)));

        if (types.length === 1) {
          return data[0].pokemon.map((p) => p.pokemon);
        }
        return mergePokemonByType(data);
      }

      const dataGen: { pokemon_species: TPokemonReturnDataShape[] } =
        await fetchAllPokemonByGen(gen);

      const dataType: {
        pokemon: { pokemon: TPokemonReturnDataShape }[];
        name: string;
      }[] = await Promise.all(types.map((t) => fetchAllPokemonByTypes(t)));

      const merged = mergePokemonByType(dataType);
      const genLookup = new Set(dataGen.pokemon_species.map((p) => p.name));
      return merged.filter((p) => genLookup.has(p.name));
    },
    staleTime: 1000 * 60 * 5,
  });
}
