import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioContent } from '@/app/data/content';

export function Footer() {
  const { profile } = portfolioContent;
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-14 px-6 md:px-8 flex flex-col items-center gap-6 bg-surface-container-highest rounded-t-xl border-t-4 border-double border-outline-variant shadow-inner mt-8">
      {/* Name & Title */}
      <div className="text-center">
        <p className="font-garamond text-3xl font-semibold text-primary italic">
          {profile.name}
        </p>
        <p className="font-garamond text-base italic text-on-surface-variant mt-1">
          {profile.title}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-5">
        <a
          href={profile.contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-sm uppercase tracking-wide"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <a
          href={profile.contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-sm uppercase tracking-wide"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={`mailto:${profile.contact.email}`}
          aria-label="Email"
          className="flex items-center gap-2 text-on-surface-variant hover:text-tertiary transition-all hover:scale-105 font-serif4 text-sm uppercase tracking-wide"
        >
          <Mail className="w-4 h-4" />
          Contact
        </a>
        <span className="flex items-center gap-2 text-on-surface-variant font-serif4 text-sm uppercase tracking-wide">
          <MapPin className="w-4 h-4" />
          {profile.contact.location}
        </span>
      </div>

      {/* Divider line */}
      <div className="w-24 h-px bg-outline-variant opacity-60" />

      {/* Copyright */}
      <p className="font-garamond text-sm text-on-surface text-center opacity-55">
        © {year} {profile.name} · The Digital Alchemist
      </p>
    </footer>
  );
}
