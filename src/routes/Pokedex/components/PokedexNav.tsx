import { padID } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function PokedexNav({
  currentId,
  isLoading,
}: {
  currentId: number;
  isLoading: boolean;
}) {
  const [prev, next] = [padID(currentId - 1), padID(currentId + 1)];
  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      {currentId > 1 && (
        <Link
          to={`/pokedex/${prev}`}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition disabled:cursor-not-allowed ${isLoading ? "pointer-events-none opacity-50" : "hover:bg-muted"}`}
        >
          <ChevronLeft size={18} />
          <p>{prev}</p>
        </Link>
      )}

      <Link to="/">
        <img src="/pokeball-logo.png" alt="pokeball" width={42} height={42} />
      </Link>
      {currentId < 1025 && (
        <Link
          to={`/pokedex/${next}`}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition disabled:cursor-not-allowed ${isLoading ? "pointer-events-none opacity-50" : "hover:bg-muted"}`}
        >
          <p>{next}</p>
          <ChevronRight size={18} />
        </Link>
      )}
    </div>
  );
}
