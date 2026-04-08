import { Button } from "@/components/ui/button";

import { useState } from "react";
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

export function HomeAdvanceSearch() {
  const [selectedType, setSelectedType] = useState<
    { slot: number; name: string }[]
  >([
    { slot: 1, name: "" },
    { slot: 2, name: "" },
  ]);

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
                  currentSelectedTypes={selectedType.map((t) => t.name)}
                />
              </div>
            ))}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
