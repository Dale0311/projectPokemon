export type TPokemon = {
  id: number;
  name: string;
  url?: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  img: string;
};
