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
};

export type TPokemonCard = Pick<TPokemon, "id" | "name" | "img" | "types">;
