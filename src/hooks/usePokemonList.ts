import { useAllPokemonNames } from "./useAllPokemonNames";
import { createPokemonCardData } from "@/lib/utils";
import { useMemo } from "react";

export function usePokemonList(rawPage: number) {
  const { data: allPokemonNames = [], isFetching } = useAllPokemonNames();
  const PAGE_SIZE = 40;
  const totalPage = Math.ceil(allPokemonNames.length / PAGE_SIZE);
  const page = Math.min(Math.max(rawPage, 1), totalPage || 1);

  const data = useMemo(() => {
    const start = PAGE_SIZE * (page - 1);
    const end = start + PAGE_SIZE;
    const sliced = allPokemonNames.slice(start, end);
    return sliced.map((p) => createPokemonCardData(p));
  }, [allPokemonNames, page]);

  return { data, isFetching, totalPage, page };
}
