import PokemonCards from "@/components/PokemonCards";
import { usePokemonList } from "@/hooks/usePokemonList";

const Home = () => {
  // const { loading, pokemons } = usePokemon(20);
  const { data: pokemonList, error, isLoading } = usePokemonList(40);
  if (isLoading) {
    return <div className="mx-auto w-full">Loading.....</div>;
  }
  if (error)
    return <div className="mx-auto w-full">Error..... {error.message}</div>;
  if (!pokemonList) {
    return <div className="mx-auto w-full">No Pokemon Found</div>;
  }

  return (
    <>
      <div className="mx-auto w-full">
        <PokemonCards pokemons={pokemonList} />
      </div>
    </>
  );
};

export default Home;
