import { Link } from "wouter";
import { BookOpen, ChevronRight } from "lucide-react";

interface BlogCardProps {
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

export function BlogCard({ date, title, excerpt, href }: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-background rounded-2xl border border-border p-8 hover:shadow-md hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
            {date}
          </p>
          <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{excerpt}</p>
          <span className="inline-flex items-center text-sm font-medium text-primary">
            Read the article <ChevronRight className="h-4 w-4 ml-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
