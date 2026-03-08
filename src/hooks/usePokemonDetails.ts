import { fetchAPI } from "@/lib/api";
import { transformDataPokemon } from "@/lib/utils";
import type {
  TEvolutionNode,
  TPokemon,
  TPokemonResponse,
  TPokemonSpeciesResponse,
} from "@/types/pokemon";
import { useEffect, useState } from "react";

export function usePokemonDetails(id: string) {
  const [pokemon, setPokemon] = useState<TPokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPokemonDetails(id: string) {
      try {
        const data: TPokemonResponse = await fetchAPI(`pokemon/${id}`, {
          signal: controller.signal,
        });
        return data;
      } catch (error) {
        setError(`Error from fetchPokemonDetails - ${error}`);
      } finally {
        setLoading(false);
      }
    }
    async function fetchPokemonSpecies(id: string) {
      try {
        const data: TPokemonSpeciesResponse = await fetchAPI(
          `pokemon-species/${id}`,
          {
            signal: controller.signal,
          },
        );
        return data;
      } catch (error) {
        setError(`Error from fetchfetchPokemonSpecies - ${error}`);
      }
    }
    async function fetchPEvolutionChain(id: string) {
      try {
        const data: { chain: TEvolutionNode } = await fetchAPI(
          `evolution-chain/${id}`,
          {
            signal: controller.signal,
          },
        );
        return data;
      } catch (error) {
        setError(`Error from fetchPEvolutionChain - ${error}`);
      }
    }

    async function fetchPokemon(id: string) {
      const [pokemonDetails, pokemonSpecies, evolutionChain] =
        await Promise.all([
          fetchPokemonDetails(id),
          fetchPokemonSpecies(id),
          fetchPEvolutionChain(id),
        ]);

      const pokemon = transformDataPokemon(
        pokemonDetails!,
        pokemonSpecies!,
        evolutionChain!,
      );

      setPokemon(pokemon);
    }

    fetchPokemon(id);
  }, [id]);

  return { loading, error, pokemon };
}
