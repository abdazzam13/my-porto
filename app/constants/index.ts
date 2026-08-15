export type Language = 'en' | 'id';

// ══ Navigation Links by Language ══
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS_EN: NavLink[] = [
  { label: 'Arcane Arts', href: '#arcane-arts' },
  { label: 'The Journey', href: '#the-journey' },
  { label: 'Portal to the Realms', href: '#portal-to-the-realms' },
  { label: 'Scholarly Pursuits', href: '#scholarly-pursuits' },
  { label: 'Scroll of Mastery', href: '#scroll-of-mastery' },
];

export const NAV_LINKS_ID: NavLink[] = [
  { label: 'Seni Sihir', href: '#arcane-arts' },
  { label: 'Perjalanan Sang Pahlawan', href: '#the-journey' },
  { label: 'Gerbang ke Berbagai Alam', href: '#portal-to-the-realms' },
  { label: 'Jejak Akademik', href: '#scholarly-pursuits' },
  { label: 'Gulungan Penguasaan', href: '#scroll-of-mastery' },
];

export const NAV_LINKS: Record<Language, NavLink[]> = {
  en: NAV_LINKS_EN,
  id: NAV_LINKS_ID,
};

// ══ UI Translations & Labels ══
export interface UiDictionary {
  portfolioOf: string;
  summonMe: string;
  summonMeSub: string;
  contact: string;
  theArcaneArts: string;
  theJourney: string;
  portalToTheRealms: string;
  scholarlyPursuits: string;
  theHallsOfLearning: string;
  scrollOfMastery: string;
  ancientTomes: string;
  allRealms: string;
  traverseRealm: string;
  gpa: string;
  copyrightRole: string;
  openMenu: string;
  closeMenu: string;
  previousRealm: string;
  nextRealm: string;
  viewDetails: string;
  shiftHeld: string;
  activeShift: string;
}

export const UI_STRINGS: Record<Language, UiDictionary> = {
  en: {
    portfolioOf: '✦ Portfolio of ✦',
    summonMe: 'Summon\nMe',
    summonMeSub: 'Summon Me',
    contact: 'Contact',
    theArcaneArts: 'The Arcane Arts',
    theJourney: "The Hero's Journey",
    portalToTheRealms: 'Portal to the Realms',
    scholarlyPursuits: 'Scholarly Pursuits',
    theHallsOfLearning: 'The Halls of Learning',
    scrollOfMastery: 'Scroll of Mastery',
    ancientTomes: 'Ancient Tomes of Mastery',
    allRealms: 'All Realms',
    traverseRealm: 'Traverse Realm',
    gpa: 'GPA',
    copyrightRole: 'The Digital Alchemist',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    previousRealm: 'Previous Realm',
    nextRealm: 'Next Realm',
    viewDetails: 'View Details',
    shiftHeld: 'Active Period',
    activeShift: 'Active Shift',
  },
  id: {
     portfolioOf: '✦ Portofolio ✦',
  summonMe: 'Hubungi\nSaya',
  summonMeSub: 'Hubungi Saya',
  contact: 'Kontak',
  theArcaneArts: 'Seni & Keahlian',
  theJourney: 'Perjalanan Sang Pahlawan',
  portalToTheRealms: 'Gerbang Karya',
  scholarlyPursuits: 'Jejak Akademik',
  theHallsOfLearning: 'Ruang Pembelajaran',
  scrollOfMastery: 'Gulungan Penguasaan',
  ancientTomes: 'Kitab-Kitab Penguasaan',
  allRealms: 'Semua Karya',
  traverseRealm: 'Jelajahi Karya',
  gpa: 'IPK',
  copyrightRole: 'Sang Alkemis Digital',
  openMenu: 'Buka menu',
  closeMenu: 'Tutup menu',
  previousRealm: 'Karya Sebelumnya',
  nextRealm: 'Karya Selanjutnya',
  viewDetails: 'Lihat Detail',
  shiftHeld: 'Periode Aktif',
  activeShift: 'Shift Aktif',
  },
};

// ══ Layout & Social Configuration ══
export const SITE_CONFIG = {
  name: 'Abdullah Azzam',
  shortName: 'A. Azzam',
  defaultLanguage: 'en' as Language,
  localStorageKey: 'porto_lang_preference',
  scrollOffset: 24,
  maxContainerWidth: 'max-w-[1120px]',
};
