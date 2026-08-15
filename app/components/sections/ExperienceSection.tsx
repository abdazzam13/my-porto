'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import type { ExperienceEntry } from '@/app/types';
import { ParchmentBox } from '@/app/components/ui/ParchmentBox';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { AnimatedSection } from '@/app/components/ui/AnimatedSection';
import { portfolioContent } from '@/app/data/content';

export function ExperienceSection() {
  const { experience } = portfolioContent;

  return (
    <section id="the-journey" className="w-full flex flex-col items-center">
      <AnimatedSection>
        <SectionTitle>The Hero&apos;s Journey</SectionTitle>
      </AnimatedSection>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {experience.map((exp, i) => (
          <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── Individual Experience Card ──────────────────────────────
function ExperienceCard({ exp, index }: { exp: ExperienceEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isCurrent = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -28 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative pl-8 border-l-2 border-outline-variant"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-[-9px] top-2.5 w-4 h-4 rounded-full border-2 transition-colors ${
          isCurrent
            ? 'bg-primary border-surface-container'
            : 'bg-surface-variant border-outline'
        }`}
      />

      {/* Header */}
      <div className="mb-4">
        <h4 className="font-garamond text-2xl font-bold text-on-surface glow-hover">
          {exp.roleFantasy}
        </h4>
        <p className="font-garamond text-base italic text-on-surface-variant">
          {exp.role}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-1.5 mb-2">
          <span className="font-serif4 text-sm text-primary uppercase tracking-wide">
            {exp.companyFantasy}
          </span>
          <span className="text-outline-variant text-xs">·</span>
          <span className="font-garamond text-base italic text-on-surface-variant">
            {exp.company}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-serif4 text-xs text-on-surface-variant tracking-wide">
            {exp.period}
          </span>
          <span className="flex items-center gap-1 font-serif4 text-xs text-on-surface-variant">
            <MapPin className="w-3 h-3" />
            {exp.location}
          </span>
          <span
            className={`px-2.5 py-0.5 text-xs font-serif4 uppercase tracking-wide rounded-sm border ${
              isCurrent
                ? 'bg-primary/10 text-primary border-primary/30'
                : 'bg-surface-variant text-on-surface-variant border-outline-variant'
            }`}
          >
            {exp.type}
          </span>
        </div>
      </div>

      {/* Achievement badge */}
      {exp.achievement && (
        <ParchmentBox className="p-3 mb-5 rounded-sm">
          <p className="font-garamond text-sm text-primary italic text-center">
            ⚔&nbsp;&nbsp;{exp.achievement}
          </p>
        </ParchmentBox>
      )}

      {/* Highlights */}
      <div className="space-y-5">
        {exp.highlights.map((section, si) => (
          <div key={si}>
            {section.sectionTitle && (
              <h5 className="font-serif4 text-[11px] uppercase tracking-[0.2em] text-primary mb-2.5 pb-1.5 border-b border-outline-variant/60">
                {section.sectionTitle}
              </h5>
            )}
            <ul className="space-y-2.5">
              {section.items.map((item, ii) => (
                <li key={ii} className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5 flex-shrink-0 text-sm leading-6">▹</span>
                  <span className="font-garamond text-base text-on-surface-variant leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technology tags */}
      {exp.technologies && exp.technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 bg-surface-variant text-on-surface-variant text-xs rounded-sm border border-outline-variant font-serif4"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
