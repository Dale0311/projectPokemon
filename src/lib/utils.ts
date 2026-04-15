import type {
  TEvolutionNode,
  TPokemon,
  TPokemonAllNames,
  TPokemonResponse,
  TPokemonSpeciesResponse,
} from "@/types/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function flattenEvolutionChain(
  evolutionChain: TEvolutionNode,
): string[] {
  const chain = [];
  let current: TEvolutionNode = evolutionChain;
  while (current) {
    const id = extractID(current.species.url) + "";
    chain.push(id);
    if (current.evolves_to.length === 0) break;
    current = current.evolves_to[0];
  }
  return chain;
}

function getPokemonSpeciesDetails(pokemonSpecies: TPokemonSpeciesResponse) {
  const flavorText = [
    ...new Set(
      pokemonSpecies.flavor_text_entries
        .filter((text) => text.language.name === "en")
        .map((text) => text.flavor_text),
    ),
  ];

  const genera = pokemonSpecies.genera.find(
    (gen) => gen.language.name === "en",
  )?.genus;

  return {
    flavorText,
    genera,
  };
}

export function transformDataPokemon(
  pokemonDetails: TPokemonResponse,
  pokemonSpecies: TPokemonSpeciesResponse,
) {
  const { flavorText, genera } = getPokemonSpeciesDetails(pokemonSpecies);
  const pokemon: TPokemon = {
    id: pokemonDetails.id,
    name: pokemonDetails.name,
    img: pokemonDetails.sprites.other["official-artwork"].front_default,
    types: pokemonDetails.types.map((t) => t.type.name),
    height: pokemonDetails.height,
    weight: pokemonDetails.weight,
    abilities: pokemonDetails.abilities.map((a) => a.ability.name),
    stats: pokemonDetails.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    moves: pokemonDetails.moves.slice(0, 4).map((m) => m.move.name),
    flavorText,
    genera,
    evolutionChainUrl: pokemonSpecies.evolution_chain.url,
    varieties: pokemonSpecies.varieties,
  };

  return pokemon;
}

export function padID(id: number | undefined) {
  return id?.toString().padStart(4, "0");
}
export function extractID(url: string) {
  const id = url.split("/").at(-2);
  return typeof id === "string" ? +id : 1;
}

export function createPokemonCardData(pokemon: TPokemonAllNames) {
  const id = extractID(pokemon.url);
  return {
    id,
    name: pokemon.name,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
  };
}
export function createStaticImg(id: number) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return url;
}
export function createSelectedTypeDefault(
  types: string[] = [],
): { slot: number; name: string }[] {
  let def = [
    { slot: 1, name: "" },
    { slot: 2, name: "" },
  ];

  if (types.length) {
    def = def.map((t, i) => (types[i] ? { slot: i, name: types[i] } : t));
  }

  return def;
}
