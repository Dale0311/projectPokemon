import type { TPokemon } from "@/types/pokemon";
import { useState } from "react";

type Props = {
  pokemon: TPokemon;
};
const PokedexHeader = ({ pokemon }: Props) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-5xl font-bold capitalize">
          {pokemon.name}{" "}
          <span className="text-muted-foreground text-xl">
            #{pokemon.id.toString().padStart(4, "0")}
          </span>
        </h1>
        <p className="text-muted-foreground">The {pokemon.genera}</p>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map((type) => (
            <span key={type} className="px-3 py-1 rounded-full text-sm border">
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-52 h-52 md:w-80 md:h-80">
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
  );
};

export default PokedexHeader;
