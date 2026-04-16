import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";

import { X } from "lucide-react";
import { useAllPokemonNames } from "@/hooks/useAllPokemonNames";
import { Link, useNavigate } from "react-router";
import { createStaticImg, extractID } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function HomeSearchbar() {
  const { data: pokemonNames = [] } = useAllPokemonNames();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const filtered = pokemonNames.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = async (value: string) => {
    const pokemon = pokemonNames.find((p) => p.name === value);
    if (!pokemon) return;
    navigate(`/pokedex/${extractID(pokemon.url)}`);
    setShowSuggestions(false);
  };

  const clearSelect = () => {
    setQuery("");
  };
  return (
    <div className="relative flex-1 w-full">
      <Command className="rounded-xl border shadow-md">
        <div className="flex items-center justify-between px-3">
          <div className="flex-1 ">
            <CommandInput
              placeholder="Search Pokémon..."
              value={query}
              onValueChange={(value) => {
                setQuery(value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full"
            />
          </div>
          {query && (
            <span>
              <X size={18} onClick={clearSelect} />
            </span>
          )}
        </div>

        {query && showSuggestions && (
          <CommandList
            className="
              absolute top-full left-0 w-full mt-2
              rounded-xl border bg-background shadow-md
              z-50 max-h-78.5 overflow-y-auto 
            "
          >
            <CommandEmpty>No Pokémon found.</CommandEmpty>

            <CommandGroup>
              {filtered.slice(0, 5)?.map((item) => (
                <CommandItem
                  key={item.url}
                  value={item.name}
                  onSelect={handleSelect}
                >
                  <Link
                    to={`/pokedex/${extractID(item.url)}`}
                    key={item.name}
                    className="opacity-90 flex items-center p-2 gap-4 w-full rounded"
                  >
                    {/* Image */}
                    <div className="w-6 h-6">
                      <img
                        src={createStaticImg(extractID(item.url))}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Name */}
                    <div className="font-semibold capitalize">{item.name}</div>
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
            {filtered.length > 5 && (
              <>
                <hr />
                <CommandGroup forceMount>
                  <CommandItem value="view-all" onSelect={() => setOpen(true)}>
                    View all result
                  </CommandItem>
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="h-[80vh] max-w-lg flex flex-col">
                      <DialogHeader>
                        <DialogTitle className="mx-auto">
                          All pokemons
                        </DialogTitle>
                      </DialogHeader>
                      <DialogDescription></DialogDescription>
                      {/* Scrollable content */}
                      <div className="flex-1 overflow-y-auto space-y-2 pr-4">
                        {filtered.map((pokemon) => (
                          <Link
                            to={`/pokedex/${extractID(pokemon.url)}`}
                            key={pokemon.name}
                            className="hover:bg-accent opacity-90 flex items-center p-4 gap-4 rounded"
                          >
                            {/* Image */}
                            <div className="w-12 h-12">
                              <img
                                src={createStaticImg(extractID(pokemon.url))}
                                alt={pokemon.name}
                                loading="lazy"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            {/* Name */}
                            <div className="font-semibold capitalize">
                              {pokemon.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CommandGroup>
              </>
            )}
          </CommandList>
        )}
      </Command>
    </div>
  );
}
