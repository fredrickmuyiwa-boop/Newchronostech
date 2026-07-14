import { useEffect, useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { CTAButton } from './CTAButton';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <a href="#home" className="flex items-center gap-2.5" aria-label="ChronosTech home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-cta text-white shadow-glow">
            <Globe className="h-5 w-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-navy">
            Chronos<span className="text-primary">Tech</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CTAButton href="#contact" className="px-5 py-2.5">
            Hire Talent
          </CTAButton>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl text-navy transition-colors hover:bg-primary-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-primary-100/60 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <CTAButton href="#contact" className="w-full">
              Hire Talent
            </CTAButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
