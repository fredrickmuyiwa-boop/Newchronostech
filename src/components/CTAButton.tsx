import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'gradient-cta text-white shadow-glow hover:-translate-y-0.5 hover:shadow-glow',
  outline:
    'border border-primary/30 bg-white/70 text-primary-700 backdrop-blur hover:border-primary hover:bg-white hover:-translate-y-0.5',
  ghost: 'text-navy-700 hover:text-primary hover:bg-primary-50',
  light:
    'bg-white text-primary-700 shadow-soft hover:-translate-y-0.5 hover:shadow-glow',
};

export function CTAButton({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: CTAButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
