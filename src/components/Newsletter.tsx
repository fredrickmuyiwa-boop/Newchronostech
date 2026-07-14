import { useState, type FormEvent } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-navy to-navy-800" />
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.15),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-400 backdrop-blur">
            <Mail className="h-4 w-4" />
            Newsletter
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Stay Ahead of Global Hiring Trends
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            Subscribe to receive recruitment insights, career advice, hiring
            trends, and exclusive international job opportunities delivered
            directly to your inbox.
          </p>

          {submitted ? (
            <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-2xl glass-dark px-6 py-4 text-left">
              <CheckCircle2 className="h-6 w-6 flex-none text-accent" />
              <p className="text-sm font-medium text-white">
                Thanks for subscribing! Check your inbox to confirm.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-slate-400 backdrop-blur transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-accent" />
            No spam. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
