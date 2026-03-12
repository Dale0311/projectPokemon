import { Skeleton } from "@/components/ui/skeleton";

export default function EvolutionCardSkeleton() {
  const evolutions = Array.from({ length: 3 });

  return (
    <div className="mt-10 bg-card border rounded-xl p-6 shadow-sm animate-pulse w-full">
      {/* Title */}
      <Skeleton className="h-8 w-48 mb-6" />

      {/* Evolution grid */}
      <div className="flex gap-8 flex-wrap justify-between w-full">
        {evolutions.map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 w-[30%] min-w-37.5"
          >
            {/* Image */}
            <Skeleton className="w-full h-40 rounded-xl border" />

            {/* Name */}
            <Skeleton className="h-5 w-24 rounded-md" />

            {/* Types */}
            <div className="flex gap-2 flex-wrap justify-center w-full">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
