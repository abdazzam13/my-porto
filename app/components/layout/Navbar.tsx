'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { useLanguage } from '@/app/lib/languageContext';
import { SITE_CONFIG } from '@/app/constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, content, ui, navLinks } = useLanguage();
  const { profile } = content;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SITE_CONFIG.scrollOffset);
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
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16 gap-2 sm:gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={toTop}
            className="font-garamond text-primary italic tracking-tighter hidden sm:block text-xl md:text-2xl hover:opacity-80 transition-opacity"
          >
            {profile.name}
          </a>
          <a
            href="#"
            onClick={toTop}
            className="font-garamond text-primary italic tracking-tighter sm:hidden text-lg hover:opacity-80 transition-opacity"
          >
            {SITE_CONFIG.shortName}
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              id={`nav-${href.replace('#', '')}`}
              onClick={() => scrollTo(href)}
              className="font-garamond text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer text-sm xl:text-base whitespace-nowrap"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Language Switcher + Wax Seal + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Button */}
          <div
            className="flex items-center bg-surface-container-high/80 rounded-full p-0.5 border border-outline-variant text-xs font-serif4"
            role="group"
            aria-label="Language selector"
          >
            <button
              id="lang-toggle-en"
              onClick={() => setLanguage('en')}
              className={cn(
                'px-2 py-1 rounded-full transition-all duration-200 cursor-pointer',
                language === 'en'
                  ? 'bg-primary text-on-primary font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-primary',
              )}
            >
              EN
            </button>
            <button
              id="lang-toggle-id"
              onClick={() => setLanguage('id')}
              className={cn(
                'px-2 py-1 rounded-full transition-all duration-200 cursor-pointer',
                language === 'id'
                  ? 'bg-primary text-on-primary font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-primary',
              )}
            >
              ID
            </button>
          </div>

          {/* Wax Seal "Summon Me" Button */}
          <a
            href={`mailto:${profile.contact.email}`}
            aria-label={ui.summonMeSub}
            className="wax-seal w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-on-error font-serif4 text-[9px] sm:text-[10px] text-center leading-tight shadow-md hover:scale-105 transition-transform"
          >
            <span className="relative z-10 select-none pointer-events-none whitespace-pre-line">
              {ui.summonMe}
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={menuOpen}
            className="lg:hidden p-2 rounded-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-surface-container-low/97 backdrop-blur-md border-t border-outline-variant">
          <nav
            className="max-w-[1120px] mx-auto px-6 py-5 flex flex-col gap-3"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="text-left font-garamond text-on-surface-variant hover:text-primary transition-colors duration-200 py-1.5 text-lg border-b border-outline-variant/30"
              >
                {label}
              </button>
            ))}

            {/* Mobile Language Switcher Info */}
            <div className="flex items-center justify-between pt-3 text-sm font-serif4 text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-primary" />
                Language / Bahasa:
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    'px-3 py-1 rounded-sm border text-xs',
                    language === 'en'
                      ? 'bg-primary text-on-primary border-primary font-bold'
                      : 'border-outline-variant text-on-surface-variant',
                  )}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => setLanguage('id')}
                  className={cn(
                    'px-3 py-1 rounded-sm border text-xs',
                    language === 'id'
                      ? 'bg-primary text-on-primary border-primary font-bold'
                      : 'border-outline-variant text-on-surface-variant',
                  )}
                >
                  Indonesia (ID)
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
