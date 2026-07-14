interface BadgeProps {
  children: string;
  className?: string;
}

/** Small glassy pill for blog category labels and similar tags. */
export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary-700 backdrop-blur ${className}`}
    >
      {children}
    </span>
  );
}
