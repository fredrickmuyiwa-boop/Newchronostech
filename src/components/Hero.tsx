import { ArrowRight, Search, Users, Briefcase, Globe2, Building2, CheckCircle2 } from 'lucide-react';
import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-radial pt-28 lg:pt-36"
    >
      {/* Floating background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-[8%] top-32 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl animate-float-slow" />
        <div className="absolute right-[10%] top-20 h-64 w-64 rounded-full bg-accent-400/30 blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[40%] h-48 w-48 rounded-full bg-primary-100/60 blur-3xl animate-float-slow" />
        <div className="absolute right-[28%] bottom-24 h-3 w-3 rounded-full bg-accent animate-float" />
        <div className="absolute left-[20%] bottom-40 h-2 w-2 rounded-full bg-primary animate-float-slow" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-32">
        {/* Copy */}
        <div className="max-w-xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-soft backdrop-blur">
            <Globe2 className="h-4 w-4 text-accent" />
            Global Recruitment & Talent Acquisition
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Connecting Global Talent with{' '}
            <span className="text-gradient">Global Opportunities</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-navy-600 sm:text-lg">
            ChronosTech helps employers hire exceptional professionals while
            empowering job seekers to build successful international careers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="#contact">
              Hire Talent
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <CTAButton href="#blog" variant="outline">
              <Search className="h-4 w-4" />
              Find Jobs
            </CTAButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {['25+ Countries', '10,000+ Candidates', '98% Satisfaction'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-navy-700">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] gradient-cta opacity-20 blur-2xl" />

            <div className="glass rounded-[2rem] p-6 shadow-glow sm:p-8">
              {/* Orbiting globe composition */}
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <div className="absolute inset-0 rounded-full border border-primary/20" />
                <div className="absolute inset-8 rounded-full border border-accent/30" />
                <div className="absolute inset-16 rounded-full border border-primary/10" />

                {/* Central globe */}
                <div className="absolute inset-1/4 flex items-center justify-center rounded-full gradient-cta shadow-glow">
                  <Globe2 className="h-16 w-16 text-white" />
                  <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse-ring" />
                </div>

                {/* Orbiting role chips */}
                <FloatChip className="left-0 top-6" icon={<Users className="h-4 w-4" />} label="Candidates" tone="primary" />
                <FloatChip className="right-0 top-1/3" icon={<Briefcase className="h-4 w-4" />} label="Employers" tone="accent" delay="2s" />
                <FloatChip className="bottom-8 left-6" icon={<Building2 className="h-4 w-4" />} label="Industries" tone="primary" delay="4s" />
                <FloatChip className="bottom-12 right-8" icon={<Globe2 className="h-4 w-4" />} label="Global" tone="accent" delay="6s" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="-mb-px" aria-hidden="true">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,64 C240,120 480,16 720,48 C960,80 1200,128 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}

interface FloatChipProps {
  className?: string;
  icon: React.ReactNode;
  label: string;
  tone: 'primary' | 'accent';
  delay?: string;
}

function FloatChip({ className = '', icon, label, tone, delay = '0s' }: FloatChipProps) {
  const tones = {
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-navy',
  };
  return (
    <div
      className={`absolute flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-navy shadow-soft animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${tones[tone]}`}>
        {icon}
      </span>
      {label}
    </div>
  );
}
