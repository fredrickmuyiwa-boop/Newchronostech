import type { ReactNode } from 'react';
import { Reveal } from '../Reveal';

interface IconCardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnStyles: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/** Responsive grid that staggers a scroll-reveal on each child. */
export function IconCardGrid({
  children,
  columns = 4,
  className = '',
}: IconCardGridProps) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={`mt-16 grid gap-6 ${columnStyles[columns]} ${className}`}>
      {items.map((child, i) => (
        <Reveal key={i} delay={i * 90}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
