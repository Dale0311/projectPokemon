import PokemonCards from "@/components/PokemonCards";
import { usePokemon } from "@/hooks/usePokemon";

const Home = () => {
  const { loading, pokemons } = usePokemon(20);
  if (loading) {
    return <h1>fetching data...</h1>;
  }

  return (
    <>
      <div className="mx-auto w-full">
        <PokemonCards pokemons={pokemons} />
      </div>
    </>
  );
};

export default Home;
