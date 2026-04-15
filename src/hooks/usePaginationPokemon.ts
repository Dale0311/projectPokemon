import type { TPokemonReturnDataShape } from "@/types/pokemon";
import { useMemo } from "react";

//responsible for exposing, totalPage, currentList, page
export function usePaginationPokemon(
  pokemons: TPokemonReturnDataShape[],
  rawPage: string,
  strict: boolean,
) {
  const POKEMONS_PER_PAGE = 40;
  const currentPokemons = strict
    ? pokemons.filter((p) => p.type?.length === 2)
    : pokemons;
  const totalPage = Math.ceil(currentPokemons.length / POKEMONS_PER_PAGE);
  const page = Math.min(Math.max(+rawPage, 1), totalPage);

  const currentList = useMemo(() => {
    const startIndex = POKEMONS_PER_PAGE * (page - 1);
    const endIndex = startIndex + POKEMONS_PER_PAGE;
    const sliced = currentPokemons.slice(startIndex, endIndex);
    return sliced;
  }, [currentPokemons, page]);

  return { currentList, totalPage, page };
}
