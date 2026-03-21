import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { useAllPokemonNames } from "@/hooks/useAllPokemonNames";

import { X } from "lucide-react";

export default function HomeSearchbar({
  setSearchPokemon,
}: {
  setSearchPokemon: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data: pokemonNames } = useAllPokemonNames();
  const filtered = pokemonNames
    ?.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
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
    <div className="relative w-full sm:w-4/5 xl:w-3/4 px-4 mx-auto mt-5">
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
                <CommandItem key={item} value={item} onSelect={handleSelect}>
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
}
