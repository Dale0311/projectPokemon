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
import type { TPokemonAllNames } from "@/types/pokemon";

export default function HomeSearchbar({
  setSearchPokemon,
  pokemonNames,
}: {
  setSearchPokemon: React.Dispatch<React.SetStateAction<string>>;
  pokemonNames: TPokemonAllNames[];
}) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = pokemonNames
    ?.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 5);

  const handleSelect = async (value: string) => {
    setQuery(value);
    setShowSuggestions(false);
    setSearchPokemon(value);
  };

  const clearSelect = () => {
    setQuery("");
    setSearchPokemon("");
  };

  return (
    <div className="relative flex-1">
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
              z-50 max-h-60 overflow-y-auto 
            "
          >
            <CommandEmpty>No Pokémon found.</CommandEmpty>

            <CommandGroup>
              {filtered?.map((item) => (
                <CommandItem
                  key={item.name}
                  value={item.name}
                  onSelect={handleSelect}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
