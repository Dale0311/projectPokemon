import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const TYPES: string[] = [
  "Normal",
  "Fighting",
  "Flying",
  "Poison",
  "Ground",
  "Rock",
  "Bug",
  "Ghost",
  "Steel",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Psychic",
  "Ice",
  "Dragon",
  "Dark",
  "Fairy",
  "Stellar",
  "Unknown",
];

type Props = {
  index: number;
  currentSelectedTypes: string[];
  currentType: string;
  setSelectedType: React.Dispatch<
    React.SetStateAction<
      {
        slot: number;
        name: string;
      }[]
    >
  >;
};

const SelectType = ({
  setSelectedType,
  index,
  currentType,
  currentSelectedTypes,
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (t: string) => {
    setSelectedType((prev) =>
      prev.map((p) => (p.slot === index ? { slot: index, name: t } : p)),
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${!currentType && "text-muted-foreground"} w-full flex justify-between`}
        >
          {currentType ? (
            <>
              {currentType} <ChevronDown />
            </>
          ) : (
            <>
              Select Type <ChevronDown />
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="mx-auto">Select Type</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto pr-4">
          <RadioGroup value={currentType || ""} onValueChange={handleSelect}>
            {TYPES.map((t) => {
              const currentlyCheck = t === currentType;
              const toDisable =
                currentSelectedTypes.filter(
                  (type) => type !== currentType,
                )[0] === t;
              return (
                <FieldLabel
                  key={t}
                  htmlFor={t}
                  className={`border-none hover:bg-muted ${
                    toDisable ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  <Field orientation="horizontal" data-disabled={toDisable}>
                    <FieldContent>
                      <FieldTitle className="flex justify-between">
                        {t} {currentlyCheck && <Check size={"15"} />}
                      </FieldTitle>
                    </FieldContent>
                    <RadioGroupItem
                      value={t}
                      id={t}
                      className="sr-only"
                      disabled={toDisable}
                    />
                  </Field>
                </FieldLabel>
              );
            })}
          </RadioGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectType;
