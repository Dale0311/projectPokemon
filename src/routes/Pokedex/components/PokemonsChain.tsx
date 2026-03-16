import { useEvolutionDetails } from "@/hooks/useEvolutionDetails";
import { padID } from "@/lib/utils";
import { Link } from "react-router";
type TProps = {
  url: string;
};
const PokemonsChain = ({ url }: TProps) => {
  const { data: chain } = useEvolutionDetails(url);

  return (
    <div className="mt-10 bg-card border rounded-xl p-6 shadow-sm w-full">
      <h3 className="font-semibold text-lg mb-6">Evolution</h3>

      {!chain || chain.length === 0 ? (
        <p className="text-muted-foreground">No available evolution</p>
      ) : (
        <div className="flex gap-8 flex-col items-center justify-center md:justify-normal lg:flex-row w-full">
          {chain.map((evo) => (
            <Link
              to={`/pokedex/${padID(evo.id)}`}
              key={evo.id}
              className="flex flex-col items-center gap-4 w-[30%] min-w-37.5"
            >
              {/* Image */}
              <img
                src={evo.img}
                alt={evo.name}
                className="w-full h-40 object-contain rounded-xl border"
              />

              {/* Name */}
              <span className="text-base font-medium capitalize">
                {evo.name}
              </span>

              {/* Types */}
              <div className="flex gap-2 flex-wrap justify-center w-full">
                {evo.types.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 text-sm border rounded-full capitalize"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonsChain;
