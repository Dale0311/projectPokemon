import { fetchAPI } from "@/lib/api";
import { flattenEvolutionChain } from "@/lib/utils";
import type { TEvolutionNode } from "@/types/pokemon";
import { useEffect, useState } from "react";

export function useEvolutionDetails(url: string) {
  const [evolutionChain, setEvolutionChain] = useState<string[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPEvolutionChain(url: string) {
      const endpoint = url.slice(url.search("evolution-chain"));
      try {
        const data: { chain: TEvolutionNode } = await fetchAPI(endpoint, {
          signal: controller.signal,
        });

        const eChain = flattenEvolutionChain(data.chain);
        setEvolutionChain(eChain);
      } catch (error) {
        setError(`Error from fetchPEvolutionChain - ${error}`);
      } finally {
        setLoading(false);
      }
    }
    fetchPEvolutionChain(url);
  }, [url]);

  return { error, loading, evolutionChain };
}
