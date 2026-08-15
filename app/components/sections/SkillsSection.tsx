'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Smartphone, Layers, Hammer } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ParchmentBox } from '@/app/components/ui/ParchmentBox';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { AnimatedSection } from '@/app/components/ui/AnimatedSection';
import { staggerContainer, staggerItem } from '@/app/lib/animations';
import { useLanguage } from '@/app/lib/languageContext';

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Layers,
  Hammer,
};

export function SkillsSection() {
  const { content, ui } = useLanguage();
  const { skills } = content;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="arcane-arts" className="w-full flex flex-col items-center">
      <AnimatedSection>
        <SectionTitle>{ui.theArcaneArts}</SectionTitle>
      </AnimatedSection>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
      >
        {skills.map((category) => {
          const Icon = ICON_MAP[category.icon] ?? Globe;
          return (
            <motion.div key={category.titleFantasy} variants={staggerItem}>
              <ParchmentBox className="p-5 sm:p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="font-garamond text-lg sm:text-xl font-semibold text-on-surface mb-0.5">
                  {category.titleFantasy}
                </h4>
                <p className="font-serif4 text-[10px] sm:text-[11px] text-primary uppercase tracking-[0.15em] mb-4">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 bg-primary/8 text-on-surface-variant border border-outline-variant/60 text-xs rounded-sm font-serif4 hover:bg-primary/15 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </ParchmentBox>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
