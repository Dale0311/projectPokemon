import { useAllPokemonNames } from "./useAllPokemonNames";
import { createPokemonCardData } from "@/lib/utils";
import { useMemo } from "react";

export function usePokemonList(page: number) {
  const { data: allPokemonNames = [], isFetching } = useAllPokemonNames();
  const PAGE_SIZE = 40;
  const totalPage = Math.ceil(allPokemonNames.length / PAGE_SIZE);

  const data = useMemo(() => {
    const start = PAGE_SIZE * (page - 1);
    const end = start + PAGE_SIZE;
    const sliced = allPokemonNames.slice(start, end);
    return sliced.map((p) => createPokemonCardData(p));
  }, [allPokemonNames, page]);

  return { data, isFetching, totalPage };
}
