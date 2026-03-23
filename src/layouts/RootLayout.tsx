import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { fetchAllPokemonName } from "@/lib/api";
import type { TPokemonAllNames } from "@/types/pokemon";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { Outlet } from "react-router";

export default function RootLayout() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["allPokemonNames"],
      queryFn: async () => {
        const pokemonDetails: { results: TPokemonAllNames[] } =
          await fetchAllPokemonName();
        return pokemonDetails.results;
      },
      staleTime: Infinity,
    });
  }, [queryClient]);

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="flex w-full md:w-3/4 lg:w-1/2 mx-auto transition-colors duration-300 ease-in-out">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
