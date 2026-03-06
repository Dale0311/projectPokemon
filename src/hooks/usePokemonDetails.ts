import { fetchAPI } from "@/lib/api";

async function fetchPokemonDetails(id: string) {
  const data = await fetchAPI(`pokemon/${id}`);
}
