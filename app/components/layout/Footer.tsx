'use client';

import { Github, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/app/lib/languageContext';

export function Footer() {
  const { content, ui } = useLanguage();
  const { profile } = content;
  const year = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${profile.contact.phone.replace(/\D/g, '')}`;
  const emailUrl = `mailto:${profile.contact.email}`;

  return (
    <footer className="w-full py-12 sm:py-14 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-6 bg-surface-container-highest rounded-t-xl border-t-4 border-double border-outline-variant shadow-inner mt-8">
      {/* Name & Title */}
      <div className="text-center">
        <p className="font-garamond text-2xl sm:text-3xl font-semibold text-primary italic">
          {profile.name}
        </p>
        <p className="font-garamond text-sm sm:text-base italic text-on-surface-variant mt-1">
          {profile.title}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <a
          href={profile.contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-xs sm:text-sm uppercase tracking-wide"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href={profile.contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-xs sm:text-sm uppercase tracking-wide"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-xs sm:text-sm uppercase tracking-wide"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href={emailUrl}
          aria-label="Email"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-xs sm:text-sm uppercase tracking-wide"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
        <span className="flex items-center gap-2 text-on-surface-variant font-serif4 text-xs sm:text-sm uppercase tracking-wide">
          <MapPin className="w-4 h-4" />
          {profile.contact.location}
        </span>
      </div>

      {/* Divider line */}
      <div className="w-24 h-px bg-outline-variant opacity-60" />

      {/* Copyright */}
      <p className="font-garamond text-xs sm:text-sm text-on-surface text-center opacity-60">
        © {year} {profile.name} · {ui.copyrightRole}
      </p>
    </footer>
  );
}
