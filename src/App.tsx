import { usePokemon } from "./hooks/usePokemon";
import PokemonCards from "./components/PokemonCards";
import { ThemeSwitch } from "./components/ThemeSwitch";

const App = () => {
  const { loading, pokemons } = usePokemon(20);
  if (loading) {
    return <h1>fetching data...</h1>;
  }

  return (
    <>
      <div className="p-4 border mx-auto">
        <ThemeSwitch />
        <PokemonCards pokemons={pokemons} />
      </div>
    </>
  );
};

export default App;
