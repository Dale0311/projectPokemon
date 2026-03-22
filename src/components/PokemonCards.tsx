import PokemonCard from "@/components/PokemonCard";
import PokemonCardsContainer from "./PokemonCardsContainer";
import PokemonCardsSkeleton from "./PokemonCardsSkeleton";
import type { TPokemonCard } from "@/types/pokemon";
type Props = {
  pokemons: TPokemonCard[];
  isFetching: boolean;
};

export default function PokemonCards({ pokemons, isFetching }: Props) {
  if (isFetching) return <PokemonCardsSkeleton length={40} />;
  return (
    <PokemonCardsContainer>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonCardsContainer>
  );
}
