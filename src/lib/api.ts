import type { TPokemonResponse } from "@/types/pokemon";
import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchPokemonList(limit: number) {
  const data = await axiosInstance.get(`/pokemon?limit=${limit}`);
  return data.data;
}
export async function fetchPokemon(id: number | string) {
  const data = await axiosInstance.get(`/pokemon/${id}`);
  return data.data;
}
export async function fetchPokemonSpecies(name: string) {
  const data = await axiosInstance.get(`/pokemon-species/${name}`);
  return data.data;
}
export async function fetchEvolutionChain(url: string) {
  const endpoint = url.slice(url.search("evolution-chain"));
  const data = await axiosInstance.get(endpoint);
  return data.data;
}

export async function fetchPokemonCard(name: string | number) {
  const data: TPokemonResponse = await fetchPokemon(name);
  return {
    name: data.name,
    id: data.id,
    types: data.types.map((t) => t.type.name),
    img: data.sprites.other["official-artwork"].front_default,
  };
}
export async function fetchAllPokemonName() {
  const data = await axiosInstance.get(`/pokemon?limit=1350`);
  return data.data;
}
export const mockVarieties = [
  {
    id: 6,
    name: "charizard",
    is_default: true,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    types: ["fire", "flying"],
  },
  {
    id: 10034,
    name: "charizard-mega-x",
    is_default: false,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png",
    types: ["fire", "flying"],
  },
  {
    id: 10035,
    name: "charizard-mega-y",
    is_default: false,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png",
    types: ["fire", "flying"],
  },
  {
    id: 10195,
    name: "charizard-gmax",
    is_default: false,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10196.png",
    types: ["fire", "flying"],
  },
];
