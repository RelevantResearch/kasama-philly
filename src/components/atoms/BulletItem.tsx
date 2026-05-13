interface BulletItemProps {
  children: React.ReactNode;
}

export function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
      <span className="text-foreground">{children}</span>
    </li>
  );
}
