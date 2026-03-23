"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const TYPES = [
  "Normal",
  "Grass",
  "Fire",
  "Water",
  "Electric",
  "Bug",
  "Flying",
  "Rock",
  "Poison",
  "Ground",
  "Ice",
  "Fighting",
  "Psychic",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];

const REGIONS = [
  "Kanto",
  "Johto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola",
  "Galar",
  "Hisui",
  "Paldea",
];

const HomeAdvanceSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full px-4 mx-auto mt-5">
      <Collapsible open={open} onOpenChange={setOpen}>
        {/* 🔽 Trigger */}
        <div className="flex justify-center">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-sm">
              {open ? "Hide Advanced Search" : "Show Advanced Search"}
              <ChevronsUpDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>

        {/* 🔽 Content */}
        <CollapsibleContent>
          <div className="border rounded-xl p-6 mt-4 space-y-6 bg-background">
            {/* TYPE + ABILITY */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* TYPE */}
              <div>
                <h3 className="mb-3 font-medium">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map((type) => (
                    <button
                      key={type}
                      className="px-3 py-1 rounded-full border text-sm hover:bg-muted transition"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* ABILITY */}
              <div>
                <h3 className="mb-3 font-medium">Ability</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All abilities" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="overgrow">Overgrow</SelectItem>
                    <SelectItem value="blaze">Blaze</SelectItem>
                    <SelectItem value="torrent">Torrent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* REGION */}
            <div>
              <h3 className="mb-3 font-medium">Region</h3>
              <div className="flex flex-wrap gap-2">
                {REGIONS.map((region) => (
                  <button
                    key={region}
                    className="px-3 py-1 rounded-full border text-sm hover:bg-muted transition"
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between gap-4 pt-4">
              <Button variant="outline">Reset</Button>
              <Button className="flex-1 md:w-auto">Search</Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default HomeAdvanceSearch;
