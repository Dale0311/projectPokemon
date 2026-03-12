import PokemonCards from "@/components/PokemonCards";
import PokemonCardsSkeleton from "@/components/PokemonCardsSkeleton";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Suspense fallback={<PokemonCardsSkeleton />}>
        <PokemonCards />
      </Suspense>
    </>
  );
};

export default Home;
