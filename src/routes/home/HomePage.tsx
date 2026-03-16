import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<PokemonCardsSkeleton />}>
        <PokemonCards />
      </Suspense>
    </>
  );
};

export default HomePage;
