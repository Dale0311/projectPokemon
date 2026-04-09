import type { TPokemonAllNames } from "@/types/pokemon";
import { useMemo } from "react";

//responsible for exposing, totalPage, currentList, page
export function usePaginationPokemon(
  pokemons: TPokemonAllNames[],
  rawPage: string,
) {
  const POKEMONS_PER_PAGE = 40;
  const totalPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGE);
  const page = Math.min(Math.max(+rawPage, 1), totalPage);

  const currentList = useMemo(() => {
    const startIndex = POKEMONS_PER_PAGE * (page - 1);
    const endIndex = startIndex + POKEMONS_PER_PAGE;
    const sliced = pokemons.slice(startIndex, endIndex);
    return sliced;
  }, [pokemons, page]);

  return { currentList, totalPage, page };
}
