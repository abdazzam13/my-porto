'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ChevronDown, MessageCircle } from 'lucide-react';
import { ParchmentBox } from '@/app/components/ui/ParchmentBox';
import { useLanguage } from '@/app/lib/languageContext';

export function HeroSection() {
  const { content, ui } = useLanguage();
  const { profile } = content;

  const scrollToContent = () => {
    const el = document.getElementById('arcane-arts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${profile.contact.phone.replace(/\D/g, '')}`;
  const emailUrl = `mailto:${profile.contact.email}`;

  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center text-center min-h-[88vh] md:min-h-[92vh] justify-center relative py-16 md:py-24"
    >
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] bg-primary-container/10 rounded-full blur-3xl -z-10 pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-tertiary-container/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center mb-6 sm:mb-8 px-2"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.15em' }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif4 text-[11px] sm:text-xs text-primary uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-3 sm:mb-4"
        >
          {ui.portfolioOf}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-garamond text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-on-surface glow-hover cursor-default leading-[1.05] sm:leading-none mb-3 break-words max-w-full"
        >
          {profile.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-garamond text-lg sm:text-xl md:text-2xl text-primary italic mt-2 sm:mt-3 max-w-xl"
        >
          {profile.subtitle}
        </motion.h2>
      </motion.div>

      {/* Parchment summary card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="w-full max-w-2xl px-2 sm:px-0"
      >
        <ParchmentBox className="p-6 sm:p-8 md:p-10">
          <p className="font-garamond text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed text-center">
            {profile.summary}
          </p>

          {/* Contact Row 1: WhatsApp (masked) + Email (masked) */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary hover:text-primary transition-all group font-serif4 text-xs sm:text-sm tracking-wide shadow-sm"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {ui.whatsApp}
            </a>
            <a
              href={emailUrl}
              id="contact-email"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-surface-variant hover:bg-surface-container border border-outline-variant text-on-surface-variant hover:text-primary transition-all group font-serif4 text-xs sm:text-sm tracking-wide shadow-sm"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
              {ui.emailMe}
            </a>
          </div>

          {/* Contact Row 2: github + linkedin + location */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 mt-4">
            <a
              href={profile.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-serif4 text-xs sm:text-sm tracking-wide"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {profile.contact.github.username}
            </a>
            <a
              href={profile.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-serif4 text-xs sm:text-sm tracking-wide"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {profile.contact.linkedin.username}
            </a>
            <span className="flex items-center gap-2 text-on-surface-variant font-serif4 text-xs sm:text-sm tracking-wide">
              <MapPin className="w-4 h-4" />
              {profile.contact.location}
            </span>
          </div>
        </ParchmentBox>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="mt-10 sm:mt-14 text-outline hover:text-primary transition-colors animate-float cursor-pointer"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
