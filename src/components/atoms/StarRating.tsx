import { Star } from "lucide-react";

interface StarRatingProps {
  count?: number;
}

export function StarRating({ count = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}
