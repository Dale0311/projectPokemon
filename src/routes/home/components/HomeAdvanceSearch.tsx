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
import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { createSelectedTypeDefault } from "@/lib/utils";

type Prop = {
  setSearchParams: SetURLSearchParams;
  strict: boolean;
  setStrict: React.Dispatch<React.SetStateAction<boolean>>;
  selectedType: {
    slot: number;
    name: string;
  }[];

  searchParams: URLSearchParams;
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
  searchParams,
  setSearchParams,
  strict,
  setStrict,
  selectedType,
  setSelectedType,
}: Prop) {
  const bothTypeFilled = selectedType.every((t) => t.name);

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

            <Field
              orientation="horizontal"
              data-disabled={!bothTypeFilled}
              className="w-fit relative"
            >
              <Switch
                id="strictType"
                disabled={!bothTypeFilled}
                onCheckedChange={(val) => setStrict(val)}
                defaultChecked={strict}
              />
              <FieldLabel htmlFor="strictType" className="group">
                Strict
                <div>
                  {bothTypeFilled && (
                    <FieldLabel
                      htmlFor="strictType"
                      className="p-2 w-40 text-wrap bg-accent-foreground text-accent rounded absolute opacity-0 group-hover:opacity-100 left-0 -top-20 transition-all duration-200 ease-in-out"
                    >
                      enable strict to filter pokemon that has both types.
                    </FieldLabel>
                  )}
                </div>
              </FieldLabel>
            </Field>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              // set types to default if searchparams has no types
              const existingType = createSelectedTypeDefault(
                searchParams.getAll("type"),
              );
              const strict = Boolean(searchParams.get("Strict"));

              setStrict(strict);
              setSelectedType(existingType);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              const typeNames = selectedType
                .filter((t) => t.name)
                .map((t) => t.name);

              setSearchParams((searchParams) => {
                const params = new URLSearchParams(searchParams);
                params.delete("type");
                params.delete("Strict");
                typeNames.forEach((t) => {
                  if (t) {
                    params.append("type", t);
                  }
                });

                if (strict) params.set("Strict", strict + "");
                return params;
              });
            }}
          >
            Apply Filter
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
