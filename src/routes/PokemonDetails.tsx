import { Skeleton } from "@/components/ui/skeleton";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { Suspense } from "react";
import { redirect, useParams } from "react-router";
import PokemonsChain from "./pokemons/PokemonsChain";
import PokemonChainSkeleton from "@/components/skeletons/PokemonChainSkeleton";
import PokedexEntry from "./pokemons/PokedexEntry";
import PokedexHeader from "./pokemons/PokedexHeader";
import PokedexNav from "./pokemons/PokedexNav";

const PokemonDetails = () => {
  const { id } = useParams();

  if (!id) throw redirect("/");

  const parseId = +id;
  const { data: pokemon, isLoading, error } = usePokemonDetails(parseId ?? 0);

  if (isLoading) {
    return (
      <section className="md:w-4/5 mx-auto px-6 py-10 space-y-8">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-64 w-full md:w-1/2 mx-auto" />
        <Skeleton className="h-48 w-full rounded-xl" />
      </section>
    );
  }

  if (error || !pokemon) {
    return (
      <section className="md:w-4/5 mx-auto px-6 py-10 text-center text-red-500">
        <p>Failed to load Pokémon details.</p>
      </section>
    );
  }

  return (
    <section className="md:wq-4/5 xl:w-1/2 mx-auto px-6 py-10 space-y-10">
      <PokedexNav />
      <PokedexHeader pokemon={pokemon} />
      <PokedexEntry pokemon={pokemon} />
      <Suspense fallback={<PokemonChainSkeleton />}>
        <PokemonsChain url={pokemon.evolutionChainUrl} />
      </Suspense>
    </section>
  );
};

export default PokemonDetails;
