import { StarRating } from "@/components/atoms/StarRating";

interface TestimonialCardProps {
  quote: string;
  initials: string;
}

export function TestimonialCard({ quote, initials }: TestimonialCardProps) {
  return (
    <div className="bg-background rounded-2xl p-7 border border-border shadow-sm h-full">
      <div className="mb-4">
        <StarRating />
      </div>
      <blockquote className="text-foreground leading-relaxed mb-5 italic font-serif text-lg">
        "{quote}"
      </blockquote>
      <p className="text-muted-foreground text-sm font-medium">— {initials}</p>
    </div>
  );
}
