'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import { ParchmentBox } from '@/app/components/ui/ParchmentBox';
import { portfolioContent } from '@/app/data/content';

const { profile } = portfolioContent;

export function HeroSection() {
  const scrollToContent = () => {
    const el = document.getElementById('arcane-arts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center text-center min-h-[92vh] justify-center relative py-24"
    >
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-primary-container/10 rounded-full blur-3xl -z-10 pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-tertiary-container/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col items-center mb-8"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.15em' }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif4 text-xs text-primary uppercase tracking-[0.25em] mb-4"
        >
          ✦ Portfolio of ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-garamond text-6xl md:text-8xl lg:text-9xl font-bold text-on-surface glow-hover cursor-default leading-none mb-3"
        >
          {profile.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-garamond text-xl md:text-2xl text-primary italic mt-3"
        >
          {profile.subtitle}
        </motion.h2>
      </motion.div>

      {/* Parchment summary card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="w-full max-w-2xl"
      >
        <ParchmentBox className="p-8 md:p-10">
          <p className="font-garamond text-lg md:text-xl text-on-surface-variant leading-relaxed text-center">
            {profile.summary}
          </p>

          {/* Contact Row 1: phone + email */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8">
            <a
              href={`tel:${profile.contact.phone}`}
              id="contact-phone"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-serif4 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {profile.contact.phone}
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              id="contact-email"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-serif4 text-sm tracking-wide"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {profile.contact.email}
            </a>
          </div>

          {/* Contact Row 2: github + linkedin + location */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-3">
            <a
              href={profile.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-serif4 text-sm tracking-wide"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {profile.contact.github.username}
            </a>
            <a
              href={profile.contact.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group font-serif4 text-sm tracking-wide"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {profile.contact.linkedin.username}
            </a>
            <span className="flex items-center gap-2 text-on-surface-variant font-serif4 text-sm tracking-wide">
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
        className="mt-14 text-outline hover:text-primary transition-colors animate-float cursor-pointer"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
