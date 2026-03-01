import { usePokemon } from "./hooks/usePokemon";

const App = () => {
  const { loading, pokemons } = usePokemon(20);
  if (loading) {
    return <h1>fetching data...</h1>;
  }
  console.log(pokemons);

  return <div>{pokemons[0]?.url}</div>;
};

export default App;
