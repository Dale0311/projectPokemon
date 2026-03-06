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
  abilities: {
    name: string;
    hidden: boolean;
  };
};
