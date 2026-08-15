// ══ Contact ══
export interface ContactInfo {
  phone: string;
  email: string;
  github: { username: string; url: string };
  linkedin: { username: string; url: string };
  location: string;
}

// ══ Profile ══
export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  summary: string;
  contact: ContactInfo;
}

// ══ Experience ══
export interface ExperienceHighlight {
  sectionTitle?: string;
  items: string[];
}

export interface ExperienceEntry {
  role: string;
  roleFantasy: string;
  company: string;
  companyFantasy: string;
  type: string;
  period: string;
  location: string;
  achievement?: string;
  highlights: ExperienceHighlight[];
  technologies?: string[];
}

// ══ Education ══
export interface EducationEntry {
  institution: string;
  institutionFantasy: string;
  degree: string;
  degreeFantasy: string;
  period: string;
  gpa?: string;
  description: string;
}

// ══ Skills ══
export interface SkillCategory {
  icon: string;
  title: string;
  titleFantasy: string;
  skills: string[];
}

// ══ Certifications ══
export interface Certification {
  name: string;
  nameFantasy: string;
  issuer: string;
  number?: string;
  validity?: string;
}

// ══ Projects ══
export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectEntry {
  title: string;
  titleFantasy: string;
  description: string;
  url: string;
  urlLabel?: string;
  images: ProjectImage[];
  tags?: string[];
}

// ══ Root Content ══
export interface PortfolioContent {
  profile: Profile;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillCategory[];
  certifications: Certification[];
  projects: ProjectEntry[];
}