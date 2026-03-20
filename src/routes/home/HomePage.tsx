import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { Suspense, useState } from "react";
import HomeSearchbar from "./components/HomeSearchbar";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
const HomePage = () => {
  const [searchPokemon, setSearchPokemon] = useState("");
  const { data, isLoading } = usePokemonSearch(searchPokemon);
  return (
    <>
      <HomeSearchbar setSearchPokemon={setSearchPokemon} />

      {isLoading ? (
        <div className="w-full md:w-1/2 xl:w-1/4">
          <PokemonCardsSkeleton length={1} />
        </div>
      ) : data ? (
        <div className="w-full md:w-1/2 xl:w-1/4 px-4 sm:px-6 lg:px-8 py-5 mt-4">
          <PokemonCard pokemon={data} />
        </div>
      ) : (
        <Suspense fallback={<PokemonCardsSkeleton length={15} />}>
          <PokemonCards />
        </Suspense>
      )}
    </>
  );
};

export default HomePage;
