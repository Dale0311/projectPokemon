import { motion } from "framer-motion";

export default function PokemonCard({ pokemon, onClick }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      onClick={() => onClick?.(pokemon)}
      className="cursor-pointer"
    >
      <Card className="relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 hover:opacity-100 transition duration-500" />

        <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
          {/* ID */}
          <span className="text-xs text-muted-foreground tracking-widest mb-2">
            #{pokemon.id.toString().padStart(4, "0")}
          </span>

          {/* Image */}
          <motion.img
            src={pokemon.img}
            alt={pokemon.name}
            className="w-28 h-28 object-contain drop-shadow-xl"
            initial={{ y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          {/* Name */}
          <h3 className="text-lg font-semibold capitalize mt-4 text-white">
            {pokemon.name}
          </h3>

          {/* Types */}
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            {pokemon.types.map((t) => (
              <Badge
                key={t.slot}
                variant="outline"
                className={`capitalize px-3 py-1 rounded-full border ${
                  typeColors[t.type.name] ||
                  "bg-gray-500/20 text-gray-300 border-gray-400/40"
                }`}
              >
                {t.type.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
