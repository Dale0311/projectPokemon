import { Skeleton } from "@/components/ui/skeleton";

export const PokedexSkeleton = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left info section */}
        <div className="space-y-2 flex-1 w-full">
          {/* Pokemon Name */}
          <Skeleton className="h-10 md:h-14 w-2/3 rounded-md" />
          {/* Pokemon ID */}
          <Skeleton className="h-6 w-1/6 rounded-md" />
          {/* Genera */}
          <Skeleton className="h-5 w-1/3 rounded-md mt-1" />
          {/* Types */}
          <div className="flex gap-2 flex-wrap mt-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
        </div>
        {/* Right image section */}
        <div className="relative w-52 h-52 md:w-80 md:h-80">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 bg-card border text-card-foreground rounded-xl p-6 shadow-sm">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-5/6 rounded-md" />
          </div>

          {/* Physical Traits */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-32 rounded-md" />
            <div className="flex gap-6 mt-1">
              <div>
                <Skeleton className="h-4 w-12 rounded-md mb-1" />
                <Skeleton className="h-5 w-16 rounded-md" />
              </div>
              <div>
                <Skeleton className="h-4 w-12 rounded-md mb-1" />
                <Skeleton className="h-5 w-16 rounded-md" />
              </div>
            </div>
          </div>

          {/* Abilities */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-28 rounded-md" />
            <div className="flex flex-wrap gap-2 mt-1">
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-md" />
              <Skeleton className="h-6 w-16 rounded-md" />
            </div>
          </div>
        </div>

        <div className="space-y-4 relative">
          <Skeleton className="h-6 w-24 rounded-md" />{" "}
          {/* Base Stats Heading */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-sm mb-1">
                <Skeleton className="h-4 w-20 rounded-md" />
                <Skeleton className="h-4 w-6 rounded-md" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
