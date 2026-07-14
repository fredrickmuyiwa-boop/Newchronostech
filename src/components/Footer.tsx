import { Globe } from 'lucide-react';
import { FOOTER_COLUMNS, CONTACT_ITEMS, SOCIAL_LINKS } from '../data/content';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-slate-300">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
          {/* Brand + socials */}
          <div className="lg:pr-6">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-cta text-white shadow-glow">
                <Globe className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                Chronos<span className="text-accent">Tech</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Connecting global talent with global opportunities. A trusted
              partner in international recruitment and talent acquisition.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:gradient-cta hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              {CONTACT_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-start gap-3 text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/5 text-accent transition-colors group-hover:gradient-cta group-hover:text-white">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-slate-500">
                        {item.label}
                      </span>
                      {item.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <p className="text-center text-sm text-slate-500">
            © 2026 ChronosTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
