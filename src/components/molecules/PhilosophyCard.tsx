interface PhilosophyCardProps {
  index: number;
  title: string;
  description: string;
}

export function PhilosophyCard({ index, title, description }: PhilosophyCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <div className="flex items-start gap-4">
        <span className="font-serif text-4xl text-primary/30 font-semibold leading-none mt-1">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
