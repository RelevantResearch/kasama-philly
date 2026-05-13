interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`text-primary font-medium tracking-widest text-sm uppercase mb-3 ${className}`}>
      {children}
    </p>
  );
}
