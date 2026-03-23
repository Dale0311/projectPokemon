import { useState } from "react";

type TVariety = {
  id: number;
  name: string;
  img: string;
  is_default: boolean;
  types: string[];
};

type Props = {
  varieties: TVariety[];
};

const PokedexVarieties = ({ varieties }: Props) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  if (!varieties || varieties.length <= 1) return null;

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground">
        Genetic Variants
      </h2>

      <div className="grid md:grid-cols-2 gap-3 overflow-x-auto pb-2">
        {varieties.map((v) => {
          const isActive = activeId === v.id;

          return (
            <div
              key={v.id}
              onClick={() => setActiveId(v.id)}
              className={`flex w-full items-center gap-3 px-4 py-2 rounded-xl border transition cursor-pointer
                ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted border border-muted-foreground/20 hover:border-primary"
                }
              `}
            >
              {/* Sprite */}
              <img
                src={v.img}
                alt={v.name}
                className="w-12 h-12 object-contain rounded-md"
              />

              {/* Info */}
              <div className="flex flex-col">
                <span className="text-[10px] uppercase">{v.name}</span>
                <span className="text-sm font-medium capitalize">
                  {v.types.join(" / ")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokedexVarieties;
