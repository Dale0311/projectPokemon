import PokemonCard from "@/components/PokemonCard";
import { usePokemonList } from "@/hooks/usePokemonList";

export default function PokemonCards() {
  const { data: pokemons } = usePokemonList(40);

  return (
    <section className="mx-auto px-4 sm:px-6 lg:px-8 py-5 mt-4">
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
}
