import type { TPokemonResponse } from "@/types/pokemon";
import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/";
export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const data = await res.json();

  return data;
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function fetchPokemonList(limit: number) {
  const data = await axiosInstance.get(`/pokemon?limit=${limit}`);
  return data.data;
}
export async function fetchPokemon(name: string) {
  const data = await axiosInstance.get(`/pokemon/${name}`);
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

export async function getChainDetails(name: string) {
  const data: TPokemonResponse = await fetchPokemon(name);
  return {
    name: data.name,
    id: data.id,
    types: data.types.map((t) => t.type.name),
    img: data.sprites.other["official-artwork"].front_default,
  };
}
