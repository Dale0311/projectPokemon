import { cn } from "@/lib/utils";
import type { TPokemon } from "@/types/pokemon";
import { Link } from "react-router";

type Props = {
  pokemon: TPokemon;
  onClick?: (pokemon: TPokemon) => void;
};

export default function PokemonCard({ pokemon }: Props) {
  return (
    <Link to={`/pokemons/:${pokemon.id}`}>
      <div
        className={cn(
          "group rounded-2xl border bg-card text-card-foreground",
          "hover:shadow-md transition-all duration-300",
          "cursor-pointer overflow-hidden",
        )}
      >
        {/* Image Section */}
        <div className="flex items-center justify-center p-8 border-b bg-muted/30">
          <img
            src={pokemon.img}
            alt={pokemon.name}
            className="w-28 h-28 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {/* Info Section */}
        <div className="p-6 space-y-4">
          {/* ID */}
          <p className="text-sm text-muted-foreground tracking-widest">
            #{pokemon.id.toString().padStart(4, "0")}
          </p>
          {/* Name */}
          <h2 className="text-2xl font-semibold capitalize">{pokemon.name}</h2>
          {/* Types */}
          <div className="flex gap-2 flex-wrap">
            {pokemon.types.map((t) => (
              <span
                key={t.slot}
                className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground capitalize"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
