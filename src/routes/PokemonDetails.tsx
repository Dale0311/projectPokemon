import { Skeleton } from "@/components/ui/skeleton";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { Suspense, useState } from "react";
import { useParams } from "react-router";
import PokemonsChain from "./pokemons/PokemonsChain";
import PokemonChainSkeleton from "@/components/skeletons/PokemonChainSkeleton";

const PokemonDetails = () => {
  const { name } = useParams();
  const { data: pokemon, isLoading, error } = usePokemonDetails(name ?? "");

  const [imgLoaded, setImgLoaded] = useState(false);

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
    <section className="md:w-4/5 mx-auto px-6 py-10 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold capitalize">
            {pokemon.name}{" "}
            <span className="text-muted-foreground text-xl">
              #{pokemon.id.toString().padStart(3, "0")}
            </span>
          </h1>
          <p className="text-muted-foreground">{pokemon.genera}</p>
          <div className="flex gap-2 flex-wrap">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="px-3 py-1 rounded-full text-sm border"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-44 h-44 md:w-64 md:h-64">
          <img
            src={pokemon.img}
            alt={pokemon.name}
            className={`w-full h-full object-contain transition-all duration-500 ${
              imgLoaded ? "blur-0" : "blur-lg"
            }`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>

      {/* Main Info */}
      <div className="grid md:grid-cols-2 gap-10 bg-card border text-card-foreground rounded-xl p-6 shadow-sm">
        {/* Left */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Pokédex Entry</h3>
            <p className="text-muted-foreground">{pokemon.flavorText[0]}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Physical Traits</h3>
            <div className="flex gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Height</p>
                <p className="font-medium">{pokemon.height} m</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Weight</p>
                <p className="font-medium">{pokemon.weight} kg</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Abilities</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability}
                  className="px-3 py-1 text-sm border rounded-md"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Base Stats */}
        <div className="space-y-4 relative">
          <h3 className="font-semibold">Base Stats</h3>
          {pokemon.stats.map((stat) => (
            <div key={stat.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground capitalize">
                  {stat.name}
                </span>
                <span>{stat.value}</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{
                    width: `${Math.min((stat.value / 150) * 100, 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}

          {/* Faint background Pokémon image */}
          <img
            src={pokemon.img}
            className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60 absolute top-2.5 right-2.5 lg:right-20 opacity-10 grayscale contrast-0 brightness-0"
          />
        </div>
      </div>
      <Suspense fallback={<PokemonChainSkeleton />}>
        <PokemonsChain url={pokemon.evolutionChainUrl} />
      </Suspense>
    </section>
  );
};

export default PokemonDetails;
