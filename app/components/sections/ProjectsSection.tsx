'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Compass,
} from 'lucide-react';
import type { ProjectEntry } from '@/app/types';
import { ParchmentBox } from '@/app/components/ui/ParchmentBox';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { AnimatedSection } from '@/app/components/ui/AnimatedSection';
import { useLanguage } from '@/app/lib/languageContext';
import type { Variants } from 'framer-motion';

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function ProjectsSection() {
  const { content, ui, language } = useLanguage();
  const { projects } = content;
  const [[currentIdx, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prevProject = useCallback(() => {
    setSlide(([prev]) => [
      prev === 0 ? projects.length - 1 : prev - 1,
      -1,
    ]);
  }, [projects.length]);

  const nextProject = useCallback(() => {
    setSlide(([prev]) => [
      prev === projects.length - 1 ? 0 : prev + 1,
      1,
    ]);
  }, [projects.length]);

  const goToProject = useCallback((idx: number) => {
    setSlide(([prev]) => [idx, idx > prev ? 1 : -1]);
  }, []);

  // Keyboard navigation when section is active
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevProject();
      if (e.key === 'ArrowRight') nextProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextProject();
    if (diff < -50) prevProject();
    setTouchStart(null);
  };

  // Safe fallback if currentIdx out of range
  const activeProject = projects[currentIdx] || projects[0];

  return (
    <section id="portal-to-the-realms" className="w-full flex flex-col items-center">
      <AnimatedSection>
        <SectionTitle>{ui.portalToTheRealms}</SectionTitle>
      </AnimatedSection>

      {/* Realm Tabs / Quick Navigator */}
      <div className="w-full max-w-4xl flex items-center justify-center gap-1.5 sm:gap-2 mb-6 flex-wrap px-2">
        {projects.map((proj, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={`${proj.title}-${idx}`}
              id={`realm-tab-${idx}`}
              onClick={() => goToProject(idx)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm font-serif4 text-[10px] sm:text-xs tracking-wider uppercase transition-all duration-300 border flex items-center gap-1.5 cursor-pointer ${
                isActive
                  ? 'bg-primary text-on-primary border-primary shadow-md scale-105 font-semibold'
                  : 'bg-surface-container/60 text-on-surface-variant border-outline-variant hover:border-primary/50 hover:bg-surface-container'
              }`}
            >
              <Compass className={`w-3 h-3 ${isActive ? 'text-primary-fixed' : 'text-outline'}`} />
              <span className="truncate max-w-[100px] sm:max-w-[170px]">
                {proj.titleFantasy.split(':')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Carousel Stage */}
      <div
        className="relative w-full max-w-4xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrow Left */}
        <button
          id="project-carousel-prev"
          onClick={prevProject}
          aria-label={ui.previousRealm}
          className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-surface-container-high/90 hover:bg-surface-container-highest backdrop-blur-md border border-outline-variant text-on-surface hover:text-primary transition-all duration-200 shadow-lg flex items-center justify-center cursor-pointer group hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          id="project-carousel-next"
          onClick={nextProject}
          aria-label={ui.nextRealm}
          className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-surface-container-high/90 hover:bg-surface-container-highest backdrop-blur-md border border-outline-variant text-on-surface hover:text-primary transition-all duration-200 shadow-lg flex items-center justify-center cursor-pointer group hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Animated Project Card Slide */}
        <div className="overflow-hidden px-1 sm:px-4 py-2 min-h-[540px] sm:min-h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`${currentIdx}-${language}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              <ProjectCard project={activeProject} defaultUrlLabel={ui.traverseRealm} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Bottom Indicator Controls */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                id={`carousel-dot-${i}`}
                onClick={() => goToProject(i)}
                aria-label={`Go to Realm ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentIdx
                    ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-primary rounded-full shadow-sm'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-outline-variant hover:bg-outline'
                }`}
              />
            ))}
          </div>

          {/* Grimoire Page Count */}
          <span className="font-serif4 text-[11px] sm:text-xs text-primary uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium">
            {language === 'id'
              ? `Gulungan ${currentIdx + 1} dari ${projects.length}`
              : `Scroll ${currentIdx + 1} of ${projects.length}`}
          </span>
        </div>
      </div>
    </section>
  );
}

// ── Detailed Project Card ───────────────────────
function ProjectCard({
  project,
  defaultUrlLabel,
}: {
  project: ProjectEntry;
  defaultUrlLabel: string;
}) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const hasMultipleImgs = project.images.length > 1;

  // Reset image index when project changes
  useEffect(() => {
    setActiveImgIdx(0);
  }, [project.title]);

  const prevImg = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveImgIdx((i) => (i === 0 ? project.images.length - 1 : i - 1));
    },
    [project.images.length],
  );

  const nextImg = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveImgIdx((i) => (i === project.images.length - 1 ? 0 : i + 1));
    },
    [project.images.length],
  );

  const currentImage = project.images[activeImgIdx] || project.images[0];

  return (
    <ParchmentBox className="p-5 sm:p-7 md:p-8 flex flex-col md:flex-row gap-5 sm:gap-7 md:gap-8 items-stretch group hover:shadow-[0_0_30px_rgba(115,92,0,0.2)] transition-shadow duration-300">
      {/* ── Left / Top: Visual Artifact (Image Showcase) ── */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="relative w-full h-64 sm:h-80 md:h-[380px] rounded-sm border border-outline-variant bg-surface-dim overflow-hidden shadow-inner flex-shrink-0">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-contain p-1 group-hover:scale-[1.02] transition-transform duration-500"
            priority
          />

          {/* Screenshot Caption Overlay */}
          {currentImage.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="font-serif4 text-[10px] sm:text-xs text-white/95 uppercase tracking-[0.12em] drop-shadow-sm font-medium">
                {currentImage.caption}
              </span>
            </div>
          )}

          {/* Sub-image carousel buttons if multiple screenshots */}
          {hasMultipleImgs && (
            <>
              <button
                onClick={prevImg}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface-container/85 hover:bg-surface-container backdrop-blur-md rounded-full p-1.5 border border-outline-variant text-on-surface hover:text-primary transition-all shadow-md cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImg}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface-container/85 hover:bg-surface-container backdrop-blur-md rounded-full p-1.5 border border-outline-variant text-on-surface hover:text-primary transition-all shadow-md cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Sub-image dot indicators */}
              <div className="absolute top-2 right-2 flex gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIdx(i);
                    }}
                    aria-label={`Screenshot ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                      i === activeImgIdx
                        ? 'bg-primary-container scale-125'
                        : 'bg-white/50 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Right / Bottom: Project Lore & Details ── */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          {/* Titles */}
          <h4 className="font-garamond text-xl sm:text-2xl md:text-3xl font-bold text-on-surface glow-hover mb-1">
            {project.titleFantasy}
          </h4>
          <p className="font-garamond text-sm sm:text-base italic text-on-surface-variant mb-3 sm:mb-4">
            {project.title}
          </p>

          {/* Description Lore */}
          <p className="font-garamond text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed mb-4 sm:mb-6">
            {project.description}
          </p>
        </div>

        <div>
          {/* Spell Components / Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-2.5 py-0.5 bg-primary/10 text-on-surface-variant text-[11px] sm:text-xs rounded-sm border border-primary/20 font-serif4 hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* External Realm Action CTA */}
          <a
            href={project.url}
            id={`proj-link-${project.title.replace(/[\s—:]/g, '-')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container font-serif4 text-[11px] sm:text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-300 shadow-md group/btn w-fit"
          >
            <span>{project.urlLabel ?? defaultUrlLabel}</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </ParchmentBox>
  );
}
