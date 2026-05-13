import { CheckCircle } from "lucide-react";

interface InsuranceItemProps {
  name: string;
}

export function InsuranceItem({ name }: InsuranceItemProps) {
  return (
    <div className="flex items-center gap-3 bg-muted rounded-xl px-5 py-4">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
      <span className="font-medium text-foreground">{name}</span>
    </div>
  );
}
