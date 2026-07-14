import type { ReactNode } from 'react';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/** Standard padded section wrapper with consistent max-width + horizontal padding. */
export function SectionContainer({ id, children, className = '' }: SectionContainerProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
