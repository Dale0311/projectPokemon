import PokemonCard from "@/components/PokemonCard";
import PokemonCardsContainer from "./PokemonCardsContainer";
import type { TPokemonAllNames } from "@/types/pokemon";
type Props = {
  currentList: TPokemonAllNames[];
};

export default function PokemonCards({ currentList }: Props) {
  return (
    <PokemonCardsContainer>
      {currentList?.map((pokemon) => (
        <PokemonCard key={pokemon.name} url={pokemon.url} />
      ))}
    </PokemonCardsContainer>
  );
}
