import type { LucideIcon } from 'lucide-react';

type CardVariant = 'solid' | 'glass' | 'horizontal';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  solid:
    'rounded-3xl border border-primary-100/70 bg-white p-7 shadow-soft hover:shadow-glow',
  glass: 'rounded-3xl glass p-7 shadow-glass',
  horizontal:
    'flex items-start gap-5 rounded-3xl border border-primary-100/70 bg-white p-6 shadow-soft hover:shadow-glow',
};

const iconWrapBase: Record<CardVariant, string> = {
  solid:
    'bg-primary-50 text-primary group-hover:gradient-cta group-hover:text-white group-hover:shadow-glow',
  glass: 'gradient-cta text-white shadow-glow',
  horizontal:
    'bg-navy text-white group-hover:gradient-cta group-hover:shadow-glow',
};

const iconSize = 'h-14 w-14';

/** A single feature/service/industry card with an icon, title, and description. */
export function IconCard({
  icon: Icon,
  title,
  description,
  variant = 'solid',
}: IconCardProps) {
  return (
    <article
      className={`group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 ${variantStyles[variant]}`}
    >
      {variant === 'solid' && (
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-cta transition-transform duration-500 group-hover:scale-x-100" />
      )}
      {(variant === 'solid' || variant === 'horizontal') && (
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      )}

      <span
        className={`flex flex-none items-center justify-center rounded-2xl transition-all duration-300 ${iconSize} ${iconWrapBase[variant]}`}
      >
        <Icon className="h-7 w-7" />
      </span>

      <div className={variant === 'horizontal' ? '' : 'mt-6'}>
        <h3 className="text-lg font-bold text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600 sm:mt-3">
          {description}
        </p>
      </div>
    </article>
  );
}
