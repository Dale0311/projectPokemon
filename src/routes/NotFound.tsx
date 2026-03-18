import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      {/* Pokemon Image */}
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
        alt="Confused Psyduck"
        className="w-56 h-56 mb-6 animate-bounce"
      />

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">404</h1>

      {/* Message */}
      <p className="text-xl font-semibold mb-2">Psyduck is confused...</p>

      <p className="text-muted-foreground max-w-md mb-6">
        The page you're looking for doesn't exist in the Pokédex. Maybe this
        Pokémon escaped?
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
      >
        Back to Pokédex
      </Link>
    </div>
  );
}
