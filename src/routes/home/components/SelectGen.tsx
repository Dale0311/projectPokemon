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
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type Prop = {
  gen: string;
  setGen: React.Dispatch<React.SetStateAction<string>>;
};

const SelectGen = ({ gen, setGen }: Prop) => {
  const [open, setOpen] = useState(false);
  const handleSelect = (generation: string) => {
    setGen(generation);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={`w-full flex justify-between`}>
          {+gen === 0 ? "All Generation" : "Generation " + gen}
          <ChevronDown />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="mx-auto">Select Type</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto pr-4">
          <RadioGroup value={gen} onValueChange={handleSelect}>
            {Array.from({ length: 10 }).map((_, i) => {
              const currentIndexString = i + "";

              return (
                <FieldLabel
                  key={currentIndexString}
                  htmlFor={currentIndexString}
                  className={`border-none hover:bg-muted ${gen === currentIndexString && "bg-muted"}`}
                >
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle className="flex justify-between">
                        {i === 0
                          ? "All Generation"
                          : `Generation ${currentIndexString}`}
                      </FieldTitle>
                    </FieldContent>
                    <RadioGroupItem
                      value={currentIndexString}
                      id={currentIndexString}
                      className="sr-only"
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

export default SelectGen;
