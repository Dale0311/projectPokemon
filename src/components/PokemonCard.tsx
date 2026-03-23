import { cn, padID } from "@/lib/utils";
import type { TPokemonCard } from "@/types/pokemon";
import { Link } from "react-router";

type Props = {
  pokemon: TPokemonCard;
};

export default function PokemonCard({ pokemon }: Props) {
  const id = padID(pokemon.id);

  return (
    <Link to={`/pokedex/${id}`}>
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
        <div className="p-4 flex flex-col items-center">
          {/* ID */}
          <p className="text-sm text-muted-foreground tracking-widest">#{id}</p>
          {/* Name */}
          <h2 className="line-clamp-2 text-sm font-medium leading-tight">
            {pokemon.name}
          </h2>
        </div>
      </div>
    </Link>
  );
}
