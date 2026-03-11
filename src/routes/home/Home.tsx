import PokemonCards from "@/components/PokemonCards";
import { Suspense } from "react";

const Home = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-full h-full text-5xl text-white font-bold">
            <h1>Loading...</h1>
          </div>
        }
      >
        <PokemonCards />
      </Suspense>
    </>
  );
};

export default Home;
