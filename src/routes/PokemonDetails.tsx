import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { useParams } from "react-router";

const PokemonDetails = () => {
  const { id } = useParams();
  const { loading, pokemonDetails, error } = usePokemonDetails(id || "1");

  if (loading) return <p>getting the data....</p>;
  if (error) return <p>Something went wrong - {error}</p>;

  return (
    <div className="p-4 mx-auto w-full">
      <h1>{JSON.stringify(pokemonDetails)}</h1>
    </div>
  );
};

export default PokemonDetails;
