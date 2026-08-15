'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import type { Language } from '@/app/constants';
import { SITE_CONFIG, UI_STRINGS, NAV_LINKS } from '@/app/constants';
import { portfolioContentEn, portfolioContentId } from '@/app/data/content';
import type { PortfolioContent } from '@/app/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  content: PortfolioContent;
  ui: typeof UI_STRINGS['en'];
  navLinks: typeof NAV_LINKS['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(SITE_CONFIG.defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(SITE_CONFIG.localStorageKey) as Language;
      if (savedLang === 'en' || savedLang === 'id') {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage error in restricted environments
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(SITE_CONFIG.localStorageKey, lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const content = useMemo(() => {
    return language === 'id' ? portfolioContentId : portfolioContentEn;
  }, [language]);

  const ui = useMemo(() => {
    return UI_STRINGS[language] || UI_STRINGS.en;
  }, [language]);

  const navLinks = useMemo(() => {
    return NAV_LINKS[language] || NAV_LINKS.en;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        content,
        ui,
        navLinks,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
