import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { useState } from "react";
import HomeSearchbar from "./components/HomeSearchbar";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import HomeAdvanceSearch from "./components/HomeAdvanceSearch";
import { useAllPokemonNames } from "@/hooks/useAllPokemonNames";
const HomePage = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const { data: pokemonNames = [] } = useAllPokemonNames();
  const { data, isLoading } = usePokemonSearch(searchPokemon, pokemonNames);
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
        <PokemonCards />
      )}
    </>
  );
};

export default HomePage;
