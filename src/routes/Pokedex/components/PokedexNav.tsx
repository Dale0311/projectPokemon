import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function PokedexNav() {
  return (
    <div className="flex items-center justify-center gap-6 mt-6">
      <Link
        to={"/"}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition "
      >
        <ChevronLeft size={18} />
        <p>Prev</p>
      </Link>

      <Link to="/">
        <img src="/pokeball-logo.png" alt="pokeball" width={42} height={42} />
      </Link>
      <Link
        to={"/"}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-muted transition"
      >
        <p>Next</p>
        <ChevronRight />
      </Link>
    </div>
  );
}
