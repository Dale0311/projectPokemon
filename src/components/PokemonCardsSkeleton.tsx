import PokemonCardsContainer from "./PokemonCardsContainer";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const PokemonCardsSkeleton = ({ length }: { length: number }) => {
  const skeletons = Array.from({ length }, (_, i) => (
    <PokemonCardSkeleton key={i} />
  ));
  return <PokemonCardsContainer>{skeletons}</PokemonCardsContainer>;
};

export default PokemonCardsSkeleton;
