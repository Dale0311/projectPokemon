import { usePokemon } from "./hooks/usePokemon";
import PokemonCards from "./components/PokemonCards";

const App = () => {
  const { loading, pokemons } = usePokemon(20);
  if (loading) {
    return <h1>fetching data...</h1>;
  }

  return (
    <div className="flex justify-center p-4 border">
      <PokemonCards pokemons={pokemons} />
    </div>
  );
};

export default App;
