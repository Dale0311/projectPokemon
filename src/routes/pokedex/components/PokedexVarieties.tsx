import { usePokemonVariant } from "@/hooks/usePokemonVariant";
import type { TVarieties } from "@/types/pokemon";
import { Link } from "react-router";

type Props = {
  varieties: TVarieties[];
  currentPokemonId: number;
};

const PokedexVarieties = ({ varieties, currentPokemonId }: Props) => {
  const { data, isLoading } = usePokemonVariant(varieties);
  if (isLoading) return <>Loading....</>;
  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-muted-foreground">
        Genetic Variants
      </h2>

      <div className="grid md:grid-cols-2 gap-3 overflow-x-auto pb-2">
        {data.map((v) => {
          const isActive = currentPokemonId === v.id;

          return (
            <Link
              to={`/pokedex/${v.id}`}
              key={v.id}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl backdrop-blur border transition
              ${
                isActive
                  ? "bg-primary/20 border-primary"
                  : "bg-background/50 border-muted-foreground/20 hover:bg-accent"
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PokedexVarieties;
