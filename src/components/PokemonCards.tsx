import type { TPokemon } from "@/types/pokemon";
import PokemonCard from "@/components/PokemonCard";

type Props = {
  pokemons: TPokemon[];
  onCardClick?: (pokemon: TPokemon) => void;
};

export default function PokemonCards({ pokemons, onCardClick }: Props) {
  if (!pokemons.length) {
    return (
      <div className="flex justify-center items-center py-20 text-muted-foreground">
        No Pokémon found.
      </div>
    );
  }

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-4">
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => onCardClick?.(pokemon)}
          />
        ))}
      </div>
    </section>
  );
}
