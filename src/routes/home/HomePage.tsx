import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { useEffect, useRef, useState } from "react";
import HomeSearchbar from "./components/HomeSearchbar";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import HomeAdvanceSearch from "./components/HomeAdvanceSearch";
import { useAllPokemonNames } from "@/hooks/useAllPokemonNames";
import HomePagination from "./components/HomePagination";
import { usePokemonList } from "@/hooks/usePokemonList";
import { useSearchParams } from "react-router";

const HomePage = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const { data: pokemonNames = [] } = useAllPokemonNames();
  const { data, isLoading } = usePokemonSearch(searchPokemon, pokemonNames);
  const [searchParams] = useSearchParams();
  const listRef = useRef<HTMLDivElement | null>(null);
  const {
    data: pokemons,
    isFetching,
    totalPage,
    page,
  } = usePokemonList(Number(searchParams.get("page")) || 1);

  useEffect(() => {
    if (!listRef.current || searchParams.get("page") === null) return;
    listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams]);
  return (
    <>
      <HomeSearchbar
        setSearchPokemon={setSearchPokemon}
        pokemonNames={pokemonNames}
      />
      <HomeAdvanceSearch />
      {isLoading ? (
        <div className="w-full md:w-1/2 xl:w-1/4">
          <PokemonCardsSkeleton length={1} />
        </div>
      ) : data ? (
        <div className="w-full md:w-1/2 xl:w-1/4 px-4 sm:px-6 lg:px-8 py-5 mt-4">
          <PokemonCard pokemon={data} />
        </div>
      ) : (
        <div ref={listRef}>
          <PokemonCards pokemons={pokemons} isFetching={isFetching} />
          <HomePagination page={page} totalPage={totalPage} />
        </div>
      )}
    </>
  );
};

export default HomePage;
