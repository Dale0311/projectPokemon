export type Pokemon = {
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
