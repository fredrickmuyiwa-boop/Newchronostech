interface EyebrowProps {
  children: string;
  light?: boolean;
  className?: string;
}

/** Small uppercase pill with a dot — the recurring section label across the site. */
export function Eyebrow({ children, light = false, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
        light ? 'bg-white/10 text-accent-400' : 'bg-primary-50 text-primary-600'
      } ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
