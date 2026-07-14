import { useScrollReveal } from '../hooks/useScrollReveal';
import { Eyebrow } from './ui/Eyebrow';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const { ref, visible } = useScrollReveal();
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div
      ref={ref}
      className={`reveal ${alignment} max-w-2xl ${visible ? 'is-visible' : ''}`}
    >
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? 'text-slate-300' : 'text-navy-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
