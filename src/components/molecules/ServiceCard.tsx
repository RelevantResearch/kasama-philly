import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full group">
      <div className="h-full p-7 rounded-2xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
          {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <span className="mt-5 inline-flex items-center text-xs font-medium text-primary">
          Learn more <ChevronRight className="h-3 w-3 ml-1" />
        </span>
      </div>
    </Link>
  );
}
