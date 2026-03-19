export type TPokemonResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
  moves: {
    move: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  species: {
    name: string;
  };
};

export type TPokemonSpeciesResponse = {
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
  genera: {
    genus: string;
    language: {
      name: string;
    };
  }[];
  evolution_chain: {
    url: string;
  };
};
export type TEvolutionNode = {
  species: {
    name: string;
  };
  evolves_to: TEvolutionNode[];
};

export type TPokemon = {
  id: number;
  name: string;
  img: string;
  types: string[];
  stats: {
    name: string;
    value: number;
  }[];
  height: number;
  weight: number;

  moves: string[];
  abilities: string[];
  flavorText: string[]; //e.g: Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.
  genera: string | undefined; //toad pokemon
  evolutionChainUrl: string;
};

export type TPokemonCard = Pick<TPokemon, "id" | "name" | "img" | "types">;
