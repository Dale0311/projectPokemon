import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function PokemonCardSkeleton() {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card text-card-foreground",
        "overflow-hidden",
      )}
    >
      {/* Image Section */}
      <div className="flex items-center justify-center p-8 border-b bg-muted/30">
        <Skeleton className="w-28 h-28 rounded-full" />
      </div>

      {/* Info Section */}
      <div className="p-6 space-y-4">
        {/* ID */}
        <Skeleton className="h-4 w-16" />

        {/* Name */}
        <Skeleton className="h-7 w-32" />

        {/* Types */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}
