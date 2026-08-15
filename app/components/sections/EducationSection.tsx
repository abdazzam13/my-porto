'use client';

import { GraduationCap, BadgeCheck } from 'lucide-react';
import { ParchmentBox } from '@/app/components/ui/ParchmentBox';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { AnimatedSection } from '@/app/components/ui/AnimatedSection';
import { useLanguage } from '@/app/lib/languageContext';

export function EducationSection() {
  const { content, ui } = useLanguage();
  const { education, certifications } = content;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">
      {/* ── Scholarly Pursuits (Education) ── */}
      <section id="scholarly-pursuits" className="flex flex-col">
        <AnimatedSection direction="left">
          <SectionTitle className="lg:text-left">{ui.scholarlyPursuits}</SectionTitle>
        </AnimatedSection>

        <ParchmentBox className="p-6 sm:p-8 flex flex-col gap-6 sm:gap-7 flex-1">
          {/* Card header */}
          <div className="flex items-center gap-3 pb-4 border-b border-outline-variant">
            <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0" />
            <span className="font-serif4 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-on-surface">
              {ui.theHallsOfLearning}
            </span>
          </div>

          {education.map((edu, i) => (
            <AnimatedSection key={edu.institution} delay={i * 0.15}>
              <div className="space-y-1.5">
                <h4 className="font-garamond text-lg sm:text-xl font-bold text-on-surface">
                  {edu.institutionFantasy}
                </h4>
                <p className="font-garamond text-sm sm:text-base italic text-on-surface-variant">
                  {edu.institution}
                </p>
                <p className="font-serif4 text-[11px] sm:text-xs uppercase tracking-[0.15em] text-primary">
                  {edu.degreeFantasy}
                </p>
                <p className="font-garamond text-xs sm:text-sm text-on-surface-variant">
                  {edu.degree}
                </p>
                <div className="flex flex-wrap gap-2.5 text-xs font-serif4 text-outline mt-1">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-sm border border-primary/20">
                      {ui.gpa}: {edu.gpa}
                    </span>
                  )}
                </div>
                <p className="font-garamond text-xs sm:text-sm text-on-surface-variant leading-relaxed mt-2">
                  {edu.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </ParchmentBox>
      </section>

      {/* ── Scroll of Mastery (Certifications) ── */}
      <section id="scroll-of-mastery" className="flex flex-col">
        <AnimatedSection>
          <SectionTitle className="lg:text-left">{ui.scrollOfMastery}</SectionTitle>
        </AnimatedSection>

        <ParchmentBox className="p-6 sm:p-8 flex flex-col gap-4 flex-1 bg-surface-container-high/60">
          {/* Card header */}
          <div className="flex items-center gap-3 pb-4 border-b border-outline-variant mb-2">
            <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary flex-shrink-0" />
            <span className="font-serif4 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-on-surface">
              {ui.ancientTomes}
            </span>
          </div>

          <ul className="flex flex-col gap-4">
            {certifications.map((cert, i) => (
              <AnimatedSection key={cert.number ?? cert.name} delay={i * 0.06}>
                <li className="flex items-start gap-3 group">
                  <BadgeCheck
                    className={`w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 transition-colors duration-200 ${
                      i === 0
                        ? 'text-tertiary group-hover:text-primary'
                        : 'text-outline group-hover:text-primary'
                    }`}
                  />
                  <div>
                    <span className="font-garamond text-sm sm:text-base font-semibold text-on-surface block">
                      {cert.nameFantasy}
                    </span>
                    <span className="font-garamond text-xs sm:text-sm italic text-on-surface-variant block">
                      {cert.name}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-0.5 items-center">
                      <span className="font-serif4 text-[11px] sm:text-xs text-primary uppercase tracking-wide">
                        {cert.issuer}
                      </span>
                      {cert.number && (
                        <span className="font-serif4 text-[10px] sm:text-xs text-outline">
                          #{cert.number.replace('#', '')}
                        </span>
                      )}
                      {cert.validity && (
                        <span className="font-serif4 text-[10px] sm:text-xs italic text-on-surface-variant">
                          {cert.validity}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              </AnimatedSection>
            ))}
          </ul>
        </ParchmentBox>
      </section>
    </div>
  );
}
