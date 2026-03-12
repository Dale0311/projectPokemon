import PokemonCardsContainer from "./PokemonCardsContainer";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const PokemonCardsSkeleton = () => {
  const skeletons = Array.from({ length: 20 }, (_, i) => (
    <PokemonCardSkeleton key={i} />
  ));
  return <PokemonCardsContainer>{skeletons}</PokemonCardsContainer>;
};

export default PokemonCardsSkeleton;
