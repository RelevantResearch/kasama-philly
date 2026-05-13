interface SpecialtyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function SpecialtyCard({ icon, title, description }: SpecialtyCardProps) {
  return (
    <div className="bg-background rounded-2xl border border-border p-7">
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
