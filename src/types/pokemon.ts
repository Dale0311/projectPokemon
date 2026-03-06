export type TPokemon = {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stat: {
    base_state: number;
    name: string;
  }[];
  height: number;
  weight: number;
  img: string;
};
