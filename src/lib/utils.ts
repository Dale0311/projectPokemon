import type {
  TEvolutionNode,
  TPokemon,
  TPokemonResponse,
  TPokemonSpeciesResponse,
} from "@/types/pokemon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function flattenEvolutionChain(evolutionChain: TEvolutionNode): string[] {
  const chain = [];
  let current: TEvolutionNode = evolutionChain;
  while (current) {
    chain.push(current.species.name);
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
  evolutionChain: { chain: TEvolutionNode },
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
    evolution_chain: flattenEvolutionChain(evolutionChain.chain),
    flavorText,
    genera,
  };

  return pokemon;
}
