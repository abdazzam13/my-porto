import { Navbar }            from './components/layout/Navbar';
import { Footer }            from './components/layout/Footer';
import { HeroSection }       from './components/sections/HeroSection';
import { SkillsSection }     from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection }   from './components/sections/ProjectsSection';
import { EducationSection }  from './components/sections/EducationSection';
import { OrnateDivider }     from './components/ui/OrnateDivider';
import { Sparkles, BookOpen, ScrollText, Castle } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center w-full max-w-[1120px] mx-auto px-6 md:px-8 pt-16 pb-20 gap-16">
        <HeroSection />
        <OrnateDivider Icon={Sparkles} />
        <SkillsSection />
        <OrnateDivider Icon={BookOpen} />
        <ExperienceSection />
        <OrnateDivider Icon={Castle} />
        <ProjectsSection />
        <OrnateDivider Icon={ScrollText} />
        <EducationSection />
      </main>

      <Footer />
    </>
  );
}