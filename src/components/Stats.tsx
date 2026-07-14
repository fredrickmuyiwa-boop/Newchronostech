import { STATS } from '../data/content';
import { AnimatedCounter } from './AnimatedCounter';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HIGHLIGHTS = [
  'Trusted by employers worldwide',
  'Verified candidate network',
  'Placements across 25+ countries',
];

export function Stats() {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.18),transparent_60%)]" />
      </div>

      <div
        ref={ref}
        className={`reveal relative mx-auto max-w-7xl px-5 sm:px-8 ${visible ? 'is-visible' : ''}`}
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-slate-400">
          {HIGHLIGHTS.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
