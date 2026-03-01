const BASE_URL = "https://pokeapi.co/api/v2/";
export async function fetchAPI(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${BASE_URL}/${endpoint}`, options);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  const data = await res.json();

  return data;
}
