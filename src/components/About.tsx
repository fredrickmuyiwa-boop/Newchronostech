import { Target, Handshake, Award, Globe2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { Eyebrow } from './ui/Eyebrow';

const PILLARS = [
  { icon: Target, label: 'Efficient Sourcing' },
  { icon: Handshake, label: 'Candidate Screening' },
  { icon: Award, label: 'Tailored Solutions' },
  { icon: Globe2, label: 'Global Reach' },
];

const POINTS = [
  'Tailored recruitment strategies for every industry.',
  'A rigorously screened, expanding international talent pool.',
  'End-to-end support from sourcing to onboarding.',
];

export function About() {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Illustration */}
        <Reveal>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl gradient-cta opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />

            <div className="glass rounded-[2rem] p-8 shadow-soft">
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-primary-50 to-accent-400/10" />
                <div className="absolute inset-6 rounded-[1.25rem] bg-white/70 backdrop-blur" />

                <div className="absolute inset-0">
                  <svg viewBox="0 0 400 400" className="h-full w-full">
                    <g stroke="#2563eb" strokeOpacity="0.25" strokeWidth="2">
                      <line x1="80" y1="80" x2="200" y2="200" />
                      <line x1="320" y1="80" x2="200" y2="200" />
                      <line x1="80" y1="320" x2="200" y2="200" />
                      <line x1="320" y1="320" x2="200" y2="200" />
                      <line x1="80" y1="80" x2="320" y2="80" />
                      <line x1="80" y1="320" x2="320" y2="320" />
                    </g>
                  </svg>
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl gradient-cta text-white shadow-glow">
                  <Handshake className="h-9 w-9" />
                </div>

                <Node className="left-6 top-6" icon={<Globe2 className="h-5 w-5" />} />
                <Node className="right-6 top-6" icon={<Award className="h-5 w-5" />} tone="accent" />
                <Node className="left-6 bottom-6" icon={<Target className="h-5 w-5" />} tone="accent" />
                <Node className="right-6 bottom-6" icon={<Handshake className="h-5 w-5" />} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2.5 rounded-2xl border border-primary-100 bg-white/80 px-4 py-3 text-sm font-semibold text-navy shadow-soft backdrop-blur"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary">
                    <p.icon className="h-4 w-4" />
                  </span>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={120}>
          <Eyebrow>About ChronosTech</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
            A trusted partner in global recruitment
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-600 sm:text-lg">
            ChronosTech is a global recruitment company dedicated to connecting
            businesses with exceptional talent across multiple industries. We
            simplify international hiring through efficient talent sourcing,
            candidate screening, and recruitment solutions tailored to each
            client's needs.
          </p>

          <div className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full gradient-cta text-white">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-navy-700">{point}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

interface NodeProps {
  className?: string;
  icon: React.ReactNode;
  tone?: 'primary' | 'accent';
}

function Node({ className = '', icon, tone = 'primary' }: NodeProps) {
  const tones = {
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-navy',
  };
  return (
    <div
      className={`absolute flex h-12 w-12 items-center justify-center rounded-xl shadow-soft ${tones[tone]} ${className}`}
    >
      {icon}
    </div>
  );
}
