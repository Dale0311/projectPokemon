import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { Suspense, useState } from "react";
import HomeSearchbar from "./components/HomeSearchbar";
import PokemonCard from "@/components/PokemonCard";
import type { TPokemonCard } from "@/types/pokemon";

const HomePage = () => {
  const [queryPokemon, setQueryPokemon] = useState<TPokemonCard | null>(null);
  const setPokemon = (pokemon: TPokemonCard | null = null) => {
    setQueryPokemon(pokemon);
  };
  return (
    <>
      <HomeSearchbar setPokemon={setPokemon} />
      {queryPokemon ? (
        <div className="w-full md:w-1/2 xl:w-1/4 px-4 sm:px-6 lg:px-8 py-5 mt-4">
          <PokemonCard pokemon={queryPokemon} />
        </div>
      ) : (
        <Suspense fallback={<PokemonCardsSkeleton />}>
          <PokemonCards />
        </Suspense>
      )}
    </>
  );
};

export default HomePage;
