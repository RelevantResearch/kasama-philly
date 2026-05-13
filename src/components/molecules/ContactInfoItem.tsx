interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export function ContactInfoItem({ icon, label, value, href }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-0.5">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-foreground font-medium hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-foreground font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}
