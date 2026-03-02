import { usePokemon } from "./hooks/usePokemon";
import PokemonCards from "./components/PokemonCards";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { loading, pokemons } = usePokemon(20);
  const { themeState, setTheme } = useTheme();
  if (loading) {
    return <h1>fetching data...</h1>;
  }

  return (
    <>
      <button
        onClick={() => {
          console.log(themeState);

          const newTheme = themeState != "dark" ? "dark" : "light";
          setTheme(newTheme);
        }}
        className="bg-[firebrick] text-white py-2 px-4 rounded"
      >
        Toggle
      </button>
      <div className="flex justify-center p-4 border">
        <PokemonCards pokemons={pokemons} />
      </div>
    </>
  );
};

export default App;
