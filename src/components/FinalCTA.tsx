import { ArrowRight, CalendarCheck } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { Reveal } from './Reveal';

export function FinalCTA() {
  return (
    <section id="contact" className="relative bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-cta px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
            {/* Decorative shapes */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-accent/30 blur-2xl" />
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
            </div>

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Hire or Find Your Next Opportunity?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-blue-50 sm:text-lg">
                Partner with ChronosTech to access world-class talent or take
                the next step in your international career.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <CTAButton href="#contact" variant="light">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <CTAButton
                  href="#contact"
                  className="border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:shadow-none"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book a Consultation
                </CTAButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
