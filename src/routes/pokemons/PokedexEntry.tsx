import type { TPokemon } from "@/types/pokemon";

type Props = {
  pokemon: TPokemon;
};

const PokedexEntry = ({ pokemon }: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-10 bg-card border text-card-foreground rounded-xl p-6 shadow-sm">
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
          className="h-40 w-40 lg:h-60 lg:w-60 absolute top-2.5 right-2.5 lg:right-5 xl:right-0 opacity-10 grayscale contrast-0 brightness-0"
        />
      </div>
    </div>
  );
};

export default PokedexEntry;
