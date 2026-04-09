import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { FilterIcon } from "lucide-react";
import SelectType from "./SelectType";
import type { SetURLSearchParams } from "react-router";

type Prop = {
  setSearchParams: SetURLSearchParams;
  selectedType: {
    slot: number;
    name: string;
  }[];
  setSelectedType: React.Dispatch<
    React.SetStateAction<
      {
        slot: number;
        name: string;
      }[]
    >
  >;
};

export function HomeAdvanceSearch({
  setSearchParams,
  selectedType,
  setSelectedType,
}: Prop) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="rounded-xl">
          <FilterIcon className="text-muted-foreground" />
          Filters
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mx-auto">Filters</AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
          <div className="flex w-full gap-4">
            {selectedType.map((t) => (
              <div key={t.slot} className="flex-1">
                <SelectType
                  index={t.slot}
                  setSelectedType={setSelectedType}
                  currentType={t.name}
                  currentSelectedTypes={selectedType.map((t) => t.name ?? null)}
                />
              </div>
            ))}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              const typeNames = selectedType
                .filter((t) => t.name)
                .map((t) => t.name);

              setSearchParams({ type: typeNames });
            }}
          >
            Apply Filter
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
