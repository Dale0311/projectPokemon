import PokemonCard from "@/components/PokemonCard";
import { usePokemonList } from "@/hooks/usePokemonList";
import PokemonCardsContainer from "./PokemonCardsContainer";
import PokemonCardsSkeleton from "./PokemonCardsSkeleton";

export default function PokemonCards() {
  const { data: pokemons, isFetching, isError } = usePokemonList(1);

  if (isFetching) return <PokemonCardsSkeleton length={40} />;
  if (isError) return <div>Something went wrong</div>;

  return (
    <PokemonCardsContainer>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonCardsContainer>
  );
}
