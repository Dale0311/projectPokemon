import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { Suspense } from "react";
import { redirect, useParams } from "react-router";
import PokemonsChain from "./components/PokemonsChain";
import PokemonChainSkeleton from "@/components/skeletons/PokemonChainSkeleton";
import PokedexEntry from "./components/PokedexEntry";
import PokedexHeader from "./components/PokedexHeader";
import PokedexNav from "./components/PokedexNav";
import NotFoundPage from "../NotFound";
import { PokedexSkeleton } from "./components/PokedexSkeleton";

const PokedexPage = () => {
  const { id } = useParams();

  if (!id) throw redirect("/");

  const parseId = +id;
  const { data: pokemon, isLoading, isError } = usePokemonDetails(parseId ?? 0);

  if (isLoading) {
    return (
      <div className="md:w-4/5 xl:w-1/2 mx-auto px-6 py-10 space-y-10">
        <PokedexNav currentId={parseId} isLoading={isLoading} />
        <PokedexSkeleton />
      </div>
    );
  }

  if (isError || !pokemon) {
    return <NotFoundPage />;
  }

  return (
    <section className="md:w-4/5 xl:w-1/2 mx-auto px-6 py-10 space-y-10">
      <PokedexNav currentId={parseId} isLoading={isLoading} />
      <PokedexHeader pokemon={pokemon} />
      <PokedexEntry pokemon={pokemon} />
      <Suspense fallback={<PokemonChainSkeleton />}>
        <PokemonsChain url={pokemon.evolutionChainUrl} />
      </Suspense>
    </section>
  );
};

export default PokedexPage;
