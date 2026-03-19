import PokemonCard from "@/components/PokemonCard";
import { usePokemonList } from "@/hooks/usePokemonList";
import PokemonCardsContainer from "./PokemonCardsContainer";

export default function PokemonCards() {
  const { data: pokemons } = usePokemonList(15);

  return (
    <PokemonCardsContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonCardsContainer>
  );
}
