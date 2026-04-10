import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { useEffect, useRef, useState, type ReactElement } from "react";
import HomeSearchbar from "./components/HomeSearchbar";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import { useAllPokemonNames } from "@/hooks/useAllPokemonNames";
import HomePagination from "./components/HomePagination";
import { usePokemonList } from "@/hooks/usePokemonList";
import { useSearchParams } from "react-router";
import { HomeAdvanceSearch } from "./components/HomeAdvanceSearch";
import { usePokemonListU } from "@/hooks/usePokemonListU";
import { usePaginationPokemon } from "@/hooks/usePaginationPokemon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { createSelectedTypeDefault } from "@/lib/utils";

const HomePage = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const { data: pokemonNames = [] } = useAllPokemonNames();
  const { data: pokemon, isLoading } = usePokemonSearch(
    searchPokemon,
    pokemonNames,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedType, setSelectedType] = useState<
    { slot: number; name: string }[]
  >(createSelectedTypeDefault(searchParams.getAll("type")));

  const { data: pokemons } = usePokemonListU(searchParams.getAll("type") || []);
  const { currentList, page, totalPage } = usePaginationPokemon(
    pokemons ?? [],
    searchParams.get("page") || "",
  );
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!listRef.current || searchParams.get("page") === null) return;
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams]);

  // filter
  const activeFilters: ReactElement[] = [];

  searchParams.forEach((v, k) => {
    if (k !== "page")
      activeFilters.push(
        <Badge key={v} variant={"outline"}>
          {v}
          <Button
            variant={"ghost"}
            size={"xs"}
            onClick={() => {
              setSearchParams((searchParams) => {
                searchParams.delete(k, v);
                return searchParams;
              });
              setSelectedType((prev) =>
                prev.map((p) =>
                  p.name === v ? { slot: p.slot, name: "" } : p,
                ),
              );
            }}
          >
            <X />
          </Button>
        </Badge>,
      );
  });
  return (
    <>
      <div className="flex items-center my-4 justify-center gap-2 sm:gap-4 px-4 w-full sm:w-3/4 mx-auto">
        <HomeSearchbar
          setSearchPokemon={setSearchPokemon}
          pokemonNames={pokemonNames}
        />
        <HomeAdvanceSearch
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          setSearchParams={setSearchParams}
        />
      </div>
      {activeFilters.length > 0 && (
        <div className="flex gap-2 flex-col items-center justify-center">
          <div className=" mx-auto">Active Filters:</div>
          <div className="flex w-full flex-wrap justify-center gap-2">
            {activeFilters.map((p) => p)}
          </div>
        </div>
      )}
      <div ref={listRef}>
        {currentList.length ? (
          <div>
            {currentList.length > 1 ? (
              <PokemonCards currentList={currentList} />
            ) : (
              <div className="w-1/4">
                <PokemonCards currentList={currentList} />
              </div>
            )}
            <HomePagination
              page={page}
              totalPage={totalPage}
              setSearchParams={setSearchParams}
            />
          </div>
        ) : (
          <div className="flex justify-center mt-5">No Pokémon found</div>
        )}
      </div>
    </>
  );
};

export default HomePage;
