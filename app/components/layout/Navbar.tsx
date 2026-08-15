'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { portfolioContent } from '@/app/data/content';

const NAV_LINKS = [
  { label: 'Arcane Arts',         href: '#arcane-arts' },
  { label: 'The Journey',         href: '#the-journey' },
  { label: 'Portal to the Realms', href: '#portal-to-the-realms' },
  { label: 'Scholarly Pursuits',  href: '#scholarly-pursuits' },
  { label: 'Scroll of Mastery',   href: '#scroll-of-mastery' },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { profile } = portfolioContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface-container-low/95 backdrop-blur-md shadow-sm border-b border-outline-variant'
          : 'bg-surface-container-low/60 backdrop-blur-sm',
      )}
    >
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={toTop}
          className="font-garamond text-primary italic tracking-tighter hidden md:block text-2xl hover:opacity-80 transition-opacity"
        >
          {profile.name}
        </a>
        <a
          href="#"
          onClick={toTop}
          className="font-garamond text-primary italic tracking-tighter md:hidden text-xl hover:opacity-80 transition-opacity"
        >
          A. Azzam
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              id={`nav-${href.replace('#', '')}`}
              onClick={() => scrollTo(href)}
              className="font-garamond text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer text-base"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Wax Seal + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label="Email me"
            className="wax-seal w-14 h-14 flex items-center justify-center text-on-error font-serif4 text-[10px] text-center leading-tight"
          >
            <span className="relative z-10 select-none pointer-events-none">
              Summon<br />Me
            </span>
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-surface-container-low/97 backdrop-blur-md border-t border-outline-variant">
          <nav
            className="max-w-[1120px] mx-auto px-6 py-5 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left font-garamond text-on-surface-variant hover:text-primary transition-colors duration-200 py-1 text-lg"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
