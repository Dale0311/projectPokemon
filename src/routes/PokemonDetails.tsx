import { useEvolutionDetails } from "@/hooks/useEvolutionDetails";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { useParams } from "react-router";

const PokemonDetails = () => {
  const { id } = useParams();
  const { loading, pokemon, error } = usePokemonDetails(id || "1");
  const { evolutionChain } = useEvolutionDetails(
    pokemon?.evolutionChainUrl || "",
  );

  if (loading) return <p>getting the data....</p>;
  if (error) return <p>Something went wrong - {error}</p>;
  if (!pokemon) return <p>No Pokemon found</p>;

  return (
    <section className="md:w-4/5 mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex flex-col lg:h-150 md:flex-row items-center justify-evenly gap-8 mb-10">
        <div className="space-y-3">
          <h1 className="text-3xl lg:text-5xl font-bold capitalize">
            {pokemon.name}
            <span className="ml-3 text-muted-foreground text-xl">
              #{pokemon.id.toString().padStart(3, "0")}
            </span>
          </h1>

          <p className="text-muted-foreground">The {pokemon.genera}</p>

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

        <img
          src={pokemon.img}
          alt={pokemon.name}
          className="w-44 h-44 lg:w-80 lg:h-80 object-contain"
        />
      </div>

      {/* Main Layout */}
      <div className="grid relative md:grid-cols-2 gap-12 bg-card border text-card-foreground px-2 md:px-8 py-16 rounded-xl shadow-sm">
        {/* LEFT */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-2">Pokédex Entry</h3>
            <p className="text-muted-foreground leading-relaxed">
              {pokemon.flavorText[0]}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Physical Traits</h3>

            <div className="flex gap-10">
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
            <h3 className="font-semibold mb-3">Abilities</h3>

            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability}
                  className="text-sm px-3 py-1 rounded-md border"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <h3 className="font-semibold mb-4">Base Stats</h3>

          <div className="space-y-4">
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
          </div>
          <img
            src={pokemon.img}
            className="h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60 absolute top-2.5 right-2.5 lg:right-20  opacity-10 grayscale contrast-0 brightness-0"
          />
        </div>
      </div>
      <div className="mt-16 bg-card border rounded-xl p-8 shadow-sm">
        {!evolutionChain ? (
          <div>
            <h3 className="font-semibold text-lg mb-8">
              No available evolution
            </h3>
          </div>
        ) : (
          <div>
            <h3 className="font-semibold text-lg mb-8">Evolution</h3>
            <div className="flex items-center gap-8 flex-wrap">
              {evolutionChain.map((name) => (
                <div key={name} className="flex items-center gap-8">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-xl border bg-muted flex items-center justify-center text-sm capitalize">
                      {name}
                    </div>
                    <span className="text-xs text-muted-foreground capitalize">
                      {name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PokemonDetails;
