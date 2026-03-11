import { fetchAPI } from "@/lib/api";
import { transformDataPokemon } from "@/lib/utils";
import type {
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

    async function fetchPokemon(id: string) {
      const [pokemonDetails, pokemonSpecies] = await Promise.all([
        fetchPokemonDetails(id),
        fetchPokemonSpecies(id),
      ]);
      if (!pokemonDetails || !pokemonSpecies) return;
      const pokemon = transformDataPokemon(pokemonDetails, pokemonSpecies);
      setPokemon({ ...pokemon });
    }

    fetchPokemon(id);
  }, [id]);

  return { loading, error, pokemon };
}
