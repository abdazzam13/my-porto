import type { PortfolioContent } from '../types';

// ══════════════════════════════════════════════════════════
// ENGLISH CONTENT (DEFAULT)
// ══════════════════════════════════════════════════════════
export const portfolioContentEn: PortfolioContent = {
  // ══ PROFILE ══
  profile: {
    name: 'Abdullah Azzam',
    title: 'The Digital Alchemist',
    subtitle: 'Software Engineer · Mobile & Web Artificer',
    summary:
      'A Google-certified Associate Android Developer and Frontend Artificer wielding over four years of mastery in crafting high-performance, scalable mobile and web applications across the realms of fintech and enterprise. Expert in bridging the visions of UI/UX seers with robust technical implementations — channeling the incantations of React, Next.js, TypeScript, Flutter, and Kotlin. Forged battle-hardened internal dashboards and fintech citadels, optimizing arcane frontend architectures, API integrations, and reusable component grimoires. Devoted to building maintainable, user-centric artifacts through modern engineering rites, clean architecture principles, and close fellowship with product, backend, QA, and design guilds.',
    contact: {
      phone: '+62 85155090276',
      email: 'abdullah.azzam130@gmail.com',
      github: { username: 'abdazzam13', url: 'https://github.com/abdazzam13' },
      linkedin: {
        username: 'Abdullah Azzam',
        url: 'https://linkedin.com/in/abdullah-azzam-/',
      },
      location: 'Jakarta / Bekasi, Indonesia',
    },
  },

  // ══ EXPERIENCE ══
  experience: [
    {
      role: 'Mobile & Frontend Web Developer',
      roleFantasy: 'Mobile & Web Artificer',
      company: 'PT. Finpoint Solusi Indonesia',
      companyFantasy: 'The Finpoint Citadel',
      type: 'Fulltime',
      period: 'Jun 2025 – Present',
      location: 'Jakarta, Indonesia',
      highlights: [
        {
          sectionTitle: 'Frontend Web',
          items: [
            'Forged and maintained scalable web artifacts — the HepiPay Merchant Admin portal and Finpoint Landing Page — channeling the combined power of React, Next.js, and TypeScript.',
            'Constructed internal merchant war rooms supporting user management, transaction monitoring, and reconciliation workflows.',
            'Vanquished redundant API requests by 40% through mastery of server-state management with TanStack React Query and Axios.',
            'Inscribed schema-driven forms using React Hook Form and Zod, fortifying validation reliability and type safety across all input realms.',
            'Wove reusable UI component grimoires with Tailwind CSS, Radix UI, and Class Variance Authority (CVA) for consistent and maintainable interfaces.',
            'Sealed authentication vaults and session chambers using Cookie-based Authentication and CryptoJS.',
            'Unveiled hidden patterns in data through reporting and visualization incantations using Recharts and React Leaflet.',
            'Forged in close fellowship with Product Managers, UI/UX Seers, Backend Engineers, and QA Guardians to deliver production-ready frontend features.',
          ],
        },
        {
          sectionTitle: 'Mobile Development',
          items: [
            'Summoned the HepiKasir Android application from the ether using Kotlin, Coroutines, and Jetpack Compose — a comprehensive merchant POS with shift management, product management, and subscription integration, crafting a user flow 30% swifter than rival applications.',
            'Led the conjuration of the HepiPay SoftPOS mobile artifact, enabling QRIS payment rituals integrated with external soundbox devices for real-time transaction confirmation, with QRIS generation mastered to under 1 minute.',
            'Constructed POS terminal, asset management, and EDC Android applications supporting secure card transactions, PIN management, and specific device-level hardware features tailored to merchant requirements.',
            'Created an asset scanning artifact for EDC devices and soundboxes, improving operational tracking and asset management efficiency by 90%.',
            'Forged a proof-of-concept Kotlin application designed to communicate with PCs/Laptops via serial COM, validating low-level device integration and data exchange.',
            'Designed a scalable Flutter citadel using Clean Architecture, BLoC, GoRouter, GetIt, and Flutter Flavors — with rigorous secure data handling via FlutterSecureStorage, Envied, and multi-layered jailbreak & root detection, meeting the highest fintech security standards.',
            'Integrated multiple third-party partner SDKs enabling seamless communication between mobile applications, EDC devices, and external soundbox hardware.',
          ],
        },
      ],
    },
    {
      role: 'Mobile Developer',
      roleFantasy: 'Mobile Incantator',
      company: 'BNI Sekuritas',
      companyFantasy: 'The Sekuritas Tower',
      type: 'Contract (Project Based)',
      period: 'Oct 2024 – Jun 2025',
      location: 'Jakarta, Indonesia',
      achievement:
        'The New BIONS spellbook has been invoked by over 50,000 adventurers on the Google Playstore.',
      highlights: [
        {
          items: [
            "Led the conjuration of several key features within the BIONS investment realm — Mutual Fund, SBN, E-IPO, and Secondary Bond (Secondary Market) — expanding the financial kingdom's reach.",
            'Maintained and exorcised reported curses from the legacy BIONS application (React Native) to ensure system stability and smooth operational continuity during the great transition.',
            'Channeled Flutter technology with Provider for state management, enhancing application responsiveness and performance.',
            'Bound various APIs from the backend realm to ensure seamless and responsive application functionality.',
            'Employed Agile SDLC methodology for structured and iterative development, improving the efficiency of the development expedition.',
            'Actively collaborated with Business Analysts, Designers, and QA Guardians to design and implement more intuitive and efficient user flows.',
            'Provided arcane input and solutions to enhance user experience based on technical analysis and business requirements understanding.',
            'Ensured high code quality through rigorous testing and debugging rituals, minimizing curses and improving application stability.',
            'Contributed to application architecture and design discussions, ensuring scalability and maintainability for long-term development.',
          ],
        },
      ],
    },
    {
      role: 'Mobile Developer',
      roleFantasy: 'Mobile Artificer',
      company: 'PT. Deptech Digital Indonesia',
      companyFantasy: 'The Deptech Guild',
      type: 'Contract (Project Based)',
      period: 'Jun 2024 – Sept 2024',
      location: 'Jakarta, Indonesia',
      highlights: [
        {
          items: [
            'Contributed to the forging of three client artifacts: Lakuemas Indonesia (gold trading realm), TimBAVku, and Tara Cash — the latter bearing Web3 crypto-based payment gateway integration.',
            'Inscribed BLoC Cubit & Clean Architecture runes for Flutter projects, ensuring maintainable and scalable codebases.',
            'Applied the MVVM design pattern for Android native projects to enhance modularity and code organization.',
            'Updated and optimized over 5 features in Lakuemas Indonesia and TimBAVku, aligning with user requirements for an improved experience.',
            'Involved in planning and executing 5+ features for Tara Cash, including integrating Web3 modules for crypto-based payment gateways.',
            'Improved user experience by streamlining existing flows in Tara Cash, making them significantly shorter and ensuring a more efficient and user-friendly experience.',
            'Proposed a new flow for a feature not covered by the existing system in Tara Cash, addressing critical gaps.',
            'Bound various APIs to streamline backend communication for seamless application functionality.',
            'Identified and resolved issues reported by QA Guardians, ensuring high-quality application performance.',
            'Conducted regular testing and debugging rituals to ensure mobile applications are free from curses and errors.',
            'Organized the expedition with Agile SDLC and Scrum for optimized workflow using Jira & Trello.',
          ],
        },
      ],
      technologies: [
        'Flutter',
        'Java',
        'Kotlin',
        'GetX',
        'BLoC',
        'Retrofit2',
        'Dio',
        'Volley',
        'SQLite',
        'Shorebird',
        'Clean Architecture',
        'MVVM',
        'Firebase',
        'FCM',
        'GoRouter',
        'GetIt',
        'Web3',
        'Unit Testing',
        'Git',
      ],
    },
    {
      role: 'Mobile Developer',
      roleFantasy: 'Mobile Artificer',
      company: 'PT. Fhadira Inovasi Teknologi',
      companyFantasy: 'The Fhadira Forge',
      type: 'Fulltime',
      period: 'Aug 2022 – Jun 2024',
      location: 'Bekasi, Indonesia',
      highlights: [
        {
          items: [
            'Breathed life into six client applications: Jagatara (Native), Sinurmi (Native), Inspector Mobil (Flutter), Inspector Mobil Internal (Flutter), PM Tools (Flutter), and VMS Mobile (Flutter).',
            'Developed and maintained a company landing page and internal dashboard using React.js, contributing to internal operational and business needs.',
            'Involved in planning, designing, and executing features across all applications from conception to deployment — from the first rune to the final release.',
            'Integrated client SDK and Bluetooth enchantments into health monitoring apps (Jagatara and Sinurmi), enabling smartwatch connectivity.',
            'Implemented geolocation magic in Jagatara for emergency location sharing via the sacred "urgent" button.',
            'Enhanced the VMS application with 5+ new features and proposed improved user flows to address system gaps.',
            'Wielded multiple state management approaches (GetX, BLoC Cubit) for maintainable, scalable codebases.',
            'Deployed multiple applications to the Google Play Store and managed the release process into the world.',
            "Organized the fellowship's development with Agile SDLC and Scrum methodology using ClickUp for project management.",
          ],
        },
      ],
      technologies: [
        'Flutter',
        'Java',
        'GetX',
        'BLoC',
        'Clean Architecture',
        'MVVM',
        'MVC',
        'Retrofit2',
        'Firebase',
        'Geolocation',
        'Dio',
        'WebView',
        'SDK',
        'JSON',
        'Local Data Persistence',
      ],
    },
  ],

  // ══ EDUCATION ══
  education: [
    {
      institution: 'State University of Jakarta',
      institutionFantasy: 'The Grand Academy of Jakarta',
      degree: 'Bachelor Degree in Computer Science',
      degreeFantasy: 'Master Scholar of the Digital Arts',
      period: 'Jan 2024',
      gpa: '3.66 / 4.00',
      description:
        'Delved deep into the foundational tomes of computation — mastering algorithms, data structures, object-oriented programming, and the theoretical underpinnings of digital alchemy. Emerged bearing a Cumulative GPA of 3.66 / 4.00, a testament to unwavering scholarly dedication.',
    },
    {
      institution: 'Bangkit Academy (by Google, GoTo & Traveloka)',
      institutionFantasy: 'The Bangkit Order — Sanctioned by Google',
      degree: 'Mobile Development (Android) Cohort',
      degreeFantasy: 'Initiation into the Order of Mobile Artificers',
      period: 'Jul 2022',
      description:
        'An intensive, Google-led initiation into modern mobile development practices, cloud architecture, and professional software engineering principles — forged in the fires of real-world capstone projects and collaborative fellowship.',
    },
  ],

  // ══ SKILLS ══
  skills: [
    {
      icon: 'Globe',
      title: 'Web Development',
      titleFantasy: 'Web Sorcery',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'TanStack Query',
        'React Hook Form',
        'Zod',
        'Recharts',
        'React Leaflet',
        'Radix UI',
        'CVA',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Development',
      titleFantasy: 'Mobile Transmutation',
      skills: [
        'Flutter',
        'Kotlin',
        'Dart',
        'Jetpack Compose',
        'Android SDK',
        'Java',
        'React Native',
        'BLoC / Cubit',
        'Provider',
        'GetX',
        'Coroutines',
      ],
    },
    {
      icon: 'Layers',
      title: 'Architecture & Backend',
      titleFantasy: 'Structural Runes',
      skills: [
        'Clean Architecture',
        'MVVM',
        'OOP',
        'REST API',
        'Axios',
        'Retrofit2',
        'Dio',
        'Node.js',
        'SQLite',
        'MongoDB',
        'Firebase',
        'FCM',
      ],
    },
    {
      icon: 'Hammer',
      title: 'Tools & Security',
      titleFantasy: 'Alchemical Forge',
      skills: [
        'Git',
        'Jira',
        'Shorebird',
        'GoRouter',
        'GetIt',
        'Hilt / Dagger / Koin',
        'CryptoJS',
        'FlutterSecureStorage',
        'Web3',
        'CI/CD',
        'Performance Optimization',
      ],
    },
  ],

  // ══ CERTIFICATIONS ══
  certifications: [
    {
      name: 'Associate Android Developer',
      nameFantasy: 'The Grand Android Seal of Google',
      issuer: 'Google',
      number: '#1086',
      validity: 'Valid until July 2025',
    },
    {
      name: 'MERN eCommerce From Scratch',
      nameFantasy: 'The MERN Stack Transmutation Tome',
      issuer: 'Udemy',
      number: 'UC-cc918f75-e16b-4c27-891e-a323edba403d',
    },
    {
      name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      nameFantasy: 'Scroll of Backend Foundations',
      issuer: 'Dicoding',
      number: 'EYX4R813RXDL',
    },
    {
      name: 'Belajar Dasar Pemrograman JavaScript',
      nameFantasy: 'The JavaScript Codex',
      issuer: 'Dicoding',
      number: 'N9ZOD0NYYPG5',
    },
    {
      name: 'Belajar Prinsip Pemrograman SOLID',
      nameFantasy: 'The SOLID Principles Grimoire',
      issuer: 'Dicoding',
      number: 'N9ZODL5L8PG5',
    },
    {
      name: 'Belajar Dasar UX Design',
      nameFantasy: 'The UX Enchantment Manual',
      issuer: 'Dicoding',
      number: '1RXYMNKW9XVM',
    },
    {
      name: 'Belajar Fundamental Aplikasi Android',
      nameFantasy: 'The Android Rune Foundations',
      issuer: 'Dicoding',
      number: 'JMZV2YMVNZN9',
    },
    {
      name: 'Belajar Pengembangan Aplikasi Android Intermediate',
      nameFantasy: 'The Intermediate Android Chronicles',
      issuer: 'Dicoding',
      number: '0LZ013DK0P65',
    },
    {
      name: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
      nameFantasy: 'The Flutter Initiation Scroll',
      issuer: 'Dicoding',
      number: '72ZDE9359PYW',
    },
    {
      name: 'Mastered Flutter Mobile App Development',
      nameFantasy: 'The Grand Flutter Mastery',
      issuer: 'SanberCode',
      number: '25062',
    },
    {
      name: 'Test of English Proficiency',
      nameFantasy: 'The Tongue of the Common Realm',
      issuer: 'UNJ TOEFL',
      number: '01995/UN3g1g/TEPUNJl2023',
      validity: 'Score: 557 / 677',
    },
  ],

  // ══ PROJECTS ══
  projects: [
    {
      title: 'Hepi2Pay — Official Merchant Gateway & Digital Landing Sanctuary',
      titleFantasy: "Hepi2Pay: The Merchant's Oasis & Digital Payment Haven",
      description:
        'A high-performance digital gateway and landing sanctuary forged to welcome merchants into the next-generation QRIS payment ecosystem. Transmuted modern UI/UX blueprints into lightning-fast, SEO-optimized web runes using Next.js, TypeScript, and Tailwind CSS. Showcases the core enchantments of the HepiPay realm — including real-time audio-visual Soundbox payment resonance, multi-bank QRIS acceptance conduits, instant settlement telemetry, and transparent zero-fee merchant onboarding. Crafted with mobile-first responsive alchemy, fluid micro-interactions, and accessible semantic structures to maximize merchant conversion and trust across the digital domain.',
      url: 'https://www.hepipay.id/',
      urlLabel: 'Traverse Realm',
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'SEO & Performance',
        'Responsive Design',
        'Fintech Showcase',
        'Landing Page',
      ],
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBHxyRMpZfeiNSy_kNa_yeUqdVyQOsSVekcuYqEcdDPqNKHaZTLFRi0AKOeAFAGOgaR59qSLjRdvAPwlwgBb0G1_CMEF_8yLKJjo86C8bwGGrWRJ-nankpq0TO15pbL95PICD3HixQTHvaywgofje6Ba6xpnN2v_5JcyVGTBBCP0sbYIbW4IZFE5VG48HljIUM6SofIrP2SFUXG18-J2dZWNWkBcr0cjA3y5moFV1dTho8n150hN-x-1Lfjz4u4wP7Y',
          alt: 'HepiPay Landing Page — QRIS Merchant Platform & Soundbox Nexus',
          caption: 'Merchant Gateway & QRIS Ecosystem Showcase',
        },
      ],
    },
    {
      title: 'FDS — Fraud Detection System (Finpoint Detect Shield)',
      titleFantasy: 'FDS: The Aegis Citadel & Fraud Detection Shield',
      description:
        'An enterprise-grade, real-time fraud defense fortress engineered for high-volume payment switches, acquirers, and fintech ecosystems. Forged with Next.js, React 19, TypeScript, and modern security protocols to detect anomalies in-flight without compromising transaction throughput. Features a TSM (Transaction Security Management) war room for live telemetry and audit exports via ExcelJS, dynamic Adaptive Rule Engines for custom fraud triggers, multi-tiered Risk Scoring matrices, and comprehensive Case Management (CMS) with whitelist/blacklist containment vaults.',
      url: 'https://www.finpoint.id/',
      urlLabel: 'Traverse Realm',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Fintech',
        'Cybersecurity',
        'Enterprise Dashboard',
      ],
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbI0Pe0fiKBq-3SMZE-tvzipLDJ4xSzwvWmiVP81qNeM1lBaWhv-8sJtqN5GvoY1kKttTb_Tf1Jmx3NJfVpu7mYSkUOWEDXtFiB_bRjGozR2yOnRplslAp0ng39czLsZsfQSu2sQmRVgQsQomiG_BYEv6Ru-ovNSGS7URLvkEsy_LdSxPmBpj14-bmlDkrk9gENqug_9GKEFGFEBb8q1kvUdJxzHGj9fbZ4aOw6jVLn1xQv4TIAXJet7dyc81ihcfR7Q',
          alt: 'FDS Secure Authentication & Citadel Access Gateway',
          caption: 'Secure Authentication Gateway',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM2tWfzvQX0GD4KjSS0zgrPGu-LuEHvMNvTvlWAr-nKgdn9nJ-_kiQNbGThJ3frwPnhHaOHm9Qah4vnz0d4zaic-zS8-zM0WLOT2Vd42sBGK4J9GLjrF1Dc6XJuZMK1fqhA_wwtDf0gGx51yjp75NaRcwhkFu98XR0Y_Xa5kVfI89RulffQAKmnay5ZPAe_wsGug23TAX_a9rNZPDFUqs5aRh6Mo-pEcrJ0_ERGc9L_JCVr_ySP-PhGtwe0JvzgIprJXU',
          alt: 'FDS TSM Dashboard — Real-time Transaction Monitoring & Telemetry',
          caption: 'TSM Monitoring Dashboard',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWuH23IJ92xEPh4Pi2sCvjvTbuigDxmilXqN_GB1FwZFc-baf4P2zDuCDj4HovIqMQLEAOlJ-mBUqL3Bf8XClpb8rRixcpPeSYmpokzQsQ_irWNEJjvuQTassMIATTQbAUGYuG7gBksG1BD2tJWdkO3HiOREiFdFqcwgKm2XpizynoExDYPAEFFGObukYuoxM1E38ZBn1T29q2mZ7ViBEnn5B92gNtPEfBMrFVv2cAoRIOIZgjWYJXlqaYtp4MtyC-gXs',
          alt: 'FDS Rules Management — Adaptive Rule Engine & Trigger Configuration',
          caption: 'Adaptive Rule Engine',
        },
      ],
    },
    {
      title: 'Finpoint — Enterprise Fintech & Digital Solutions Sanctuary',
      titleFantasy: 'The Finpoint Citadel: Grand Portal of Enterprise Alchemies',
      description:
        'An enterprise-grade corporate sanctuary engineered to spearhead digital transformation across banking, fintech, and payment ecosystems. Forged with Next.js, TypeScript, Tailwind CSS, and Framer Motion to deliver seamless performance, responsive aesthetics, and high-conversion UI runes. Highlights mission-critical financial conduits including Mastercard Send-powered Credit Card Bill Payment, BPC SmartVista Managed Services, Bank Indonesia-licensed QRIS Merchant Acquiring, POS/EDC Hardware Solutions, and next-generation Cybersecurity (Hardware Token Auth & Post-Quantum Cryptography). Features dynamic Hero Parallax animations, infinite marquee conduits, interactive solution showcases, an integrated newsroom codex, and accessible Radix UI component grimoires.',
      url: 'https://www.finpoint.id/',
      urlLabel: 'Traverse Realm',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Radix UI',
        'Fintech Solutions',
        'QRIS & Payments',
        'Cybersecurity',
        'Corporate Portal',
      ],
      images: [
        {
          src: '/projects/finpoint_website.jpg',
          alt: 'Finpoint Enterprise Digital Transformation Solutions Portal',
          caption: 'Finpoint Corporate Portal & Solutions Showcase',
        },
      ],
    },
    {
      title: 'Hepi2Pay — Merchant Admin War Room & Financial Operations Citadel',
      titleFantasy: "Hepi2Pay: The Merchant Commander's Grimoire & War Room",
      description:
        'A mission-critical financial command center and merchant operations war room engineered for high-throughput fintech ecosystems. Forged with Next.js 16, React 19, TypeScript, and Tailwind CSS to govern merchant lifecycles and multi-channel payment conduits. Features a modular drag-and-drop customizable analytics war room powered by @dnd-kit, dual-realm B2B and B2C transaction telemetry (Open API Payment Hub, Open API QRIS, and HepiKasir POS feeds), an automated financial settlement reconciliation (Recon) engine with discrepancy detection, interactive province-level geographic mapping via React Leaflet, cryptographic session vaults via CryptoJS, Altcha Proof-of-Work anti-bot warding, and sub-second server-state synchronization with TanStack React Query and Zod validation.',
      url: 'https://www.hepipay.id/',
      urlLabel: 'Traverse Realm',
      tags: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'TanStack Query',
        '@dnd-kit',
        'Recharts',
        'React Leaflet',
        'Fintech & Recon',
        'Enterprise Dashboard',
      ],
      images: [
        {
          src: '/projects/hepipay_dashboard.jpg',
          alt: 'HepiPay Merchant Admin War Room & Analytics Dashboard',
          caption: 'Command Center & Real-Time Telemetry',
        },
      ],
    },
    {
      title: 'Hepi2Pay Kasir — Smart POS & Merchant Payment Terminal',
      titleFantasy: 'Hepi2Pay Kasir: The Arcane Ledger & Merchant Nexus',
      description:
        'A resilient, modern Point of Sale (POS) and merchant transaction fortress crafted for high-velocity commerce and retail realms. Forged with Kotlin, Jetpack Compose, Material 3, and Clean Architecture to deliver seamless checkout experiences and real-time ledger management. Features deep hardware synergy with smart EDC terminals and Bluetooth thermal receipt scribes, lightning-fast CameraX & Google ML Kit optical barcode scanning, offline-resilient local caching via Room Database, bulk inventory transmutation via FastExcel, dynamic QRIS & card settlement conduits, and Firebase cloud telemetry.',
      url: 'https://play.google.com/store/apps/details?id=com.finpoint.hepi2paykasir',
      urlLabel: 'Traverse Realm',
      tags: [
        'Android',
        'Kotlin',
        'Jetpack Compose',
        'Clean Architecture',
        'Dagger Hilt',
        'Room DB',
        'CameraX / ML Kit',
        'Hardware Integration (EDC/Printer)',
        'Fintech & POS',
      ],
      images: [
        {
          src: '/images/projects/hepi-kasir-pos.png',
          alt: 'Hepi2Pay Kasir — Aplikasi Kasir Simpel & Pemesanan Cepat',
          caption: 'Aplikasi Kasir Simpel & Pemesanan',
        },
        {
          src: '/images/projects/hepi-kasir-payment.png',
          alt: 'Hepi2Pay Kasir — Proses Pesanan Cepat & Metode Pembayaran',
          caption: 'Proses Pesanan Cepat & Sat-Set',
        },
        {
          src: '/images/projects/hepi-kasir-report.png',
          alt: 'Hepi2Pay Kasir — Dashboard Penjualan Komplit & Analitik Performa',
          caption: 'Dashboard Penjualan Komplit',
        },
        {
          src: '/images/projects/hepi-kasir-shift.png',
          alt: 'Hepi2Pay Kasir — Pengaturan Jam Kerja Shift Kasir & Rangkuman Penjualan',
          caption: 'Pengaturan Shift & Rekonsiliasi Kasir',
        },
      ],
    },
    {
      title: 'BIONS by BNI Sekuritas — Multi-Asset Investment & Online Trading System',
      titleFantasy: 'BIONS: The Grand Astral Exchange & Multi-Asset Grimoire',
      description:
        'A premier multi-asset investment and high-velocity capital exchange forged for modern investors and market conquerors. Engineered to navigate capital market currents across Stocks (Saham IDX), Mutual Funds (Reksa Dana), Asset-Backed Securities (EBA Ritel), and Sovereign Bonds (SBN/Obligasi) within a unified digital realm. Powered by curated Trading Ideas & Research runes from top market analysts, sub-second Fast Order routing, Automated Stop Loss & Trailing Take Profit wards, comprehensive multi-asset portfolio telemetry, biometric authentication shields, and seamless tablet/mobile responsive mastery.',
      url: 'https://play.google.com/store/apps/details?id=id.bions.bnis.android',
      urlLabel: 'Traverse Realm',
      tags: [
        'Mobile & Web Trading',
        'Fintech',
        'Multi-Asset Investment',
        'Capital Markets (IDX)',
        'Real-time Market Telemetry',
        'Portfolio Analytics',
        'Automated Orders',
        'OJK & IDX Supervised',
      ],
      images: [
        {
          src: '/images/projects/bions-mobile-showcase.png',
          alt: 'BIONS by BNI Sekuritas — Multi-Asset Trading Platform Showcase',
          caption: 'New BIONS Experience & Multi-Asset Interface',
        },
        {
          src: '/images/projects/bions-trading-ideas.png',
          alt: 'BIONS Trading Ideas — Stock Recommendations & Market Intelligence',
          caption: 'Trading Ideas & Market Intelligence',
        },
        {
          src: '/images/projects/bions-mutual-funds.png',
          alt: 'BIONS Mutual Funds — Reksa Dana Monitoring & Portfolio Growth',
          caption: 'Mutual Funds & Wealth Allocation',
        },
        {
          src: '/images/projects/bions-tablet-experience.png',
          alt: 'BIONS Tablet & Mobile Experience — Real-Time Telemetry & Watchlists',
          caption: 'Tablet & Multi-Device Trading Nexus',
        },
      ],
    },
  ],
};

// ══════════════════════════════════════════════════════════
// INDONESIAN CONTENT (BAHASA INDONESIA)
// ══════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════
// INDONESIAN CONTENT (BAHASA INDONESIA)
// ══════════════════════════════════════════════════════════
export const portfolioContentId: PortfolioContent = {
  // ══ PROFILE ══
  profile: {
    name: 'Abdullah Azzam',
    title: 'Sang Alkemis Digital',
    subtitle: 'Software Engineer · Pengembang Mobile & Web',
    summary:
      'Associate Android Developer tersertifikasi Google dengan pengalaman lebih dari 4 tahun dalam membangun aplikasi mobile dan web berkinerja tinggi untuk kebutuhan fintech dan enterprise. Berpengalaman menerjemahkan visi UI/UX menjadi implementasi teknis yang solid dengan React, Next.js, TypeScript, Flutter, dan Kotlin. Telah mengembangkan berbagai dashboard internal, aplikasi fintech, integrasi API, serta komponen UI yang scalable dan mudah dipelihara. Berkomitmen membangun produk yang berpusat pada pengguna dengan arsitektur modern, Clean Architecture, dan kolaborasi erat bersama tim product, backend, QA, dan design.',
    contact: {
      phone: '+62 85155090276',
      email: 'abdullah.azzam130@gmail.com',
      github: {
        username: 'abdazzam13',
        url: 'https://github.com/abdazzam13',
      },
      linkedin: {
        username: 'Abdullah Azzam',
        url: 'https://linkedin.com/in/abdullah-azzam-/',
      },
      location: 'Jakarta / Bekasi, Indonesia',
    },
  },

  // ══ EXPERIENCE ══
  experience: [
    {
      role: 'Mobile & Frontend Web Developer',
      roleFantasy: 'Perajin Mobile & Web',
      company: 'PT. Finpoint Solusi Indonesia',
      companyFantasy: 'Benteng Finpoint',
      type: 'Penuh Waktu',
      period: 'Jun 2025 – Sekarang',
      location: 'Jakarta, Indonesia',
      highlights: [
        {
          sectionTitle: 'Frontend Web',
          items: [
            'Mengembangkan dan memelihara aplikasi web berskala enterprise, termasuk HepiPay Merchant Admin dan Finpoint Landing Page, menggunakan React, Next.js, dan TypeScript.',
            'Membangun command center internal untuk mendukung manajemen pengguna, pemantauan transaksi secara real-time, dan proses rekonsiliasi.',
            'Mengurangi request API yang redundan hingga 40% melalui optimasi server-state management menggunakan TanStack React Query dan Axios.',
            'Membangun form berbasis schema menggunakan React Hook Form dan Zod untuk meningkatkan keandalan validasi dan type safety.',
            'Merancang reusable UI component dengan Tailwind CSS, Radix UI, dan Class Variance Authority (CVA) untuk menghasilkan antarmuka yang konsisten dan mudah dipelihara.',
            'Mengamankan autentikasi dan pengelolaan sesi menggunakan Cookie-based Authentication dan CryptoJS.',
            'Menghadirkan reporting dan visualisasi data menggunakan Recharts serta pemetaan wilayah interaktif dengan React Leaflet.',
            'Berkolaborasi erat dengan Product Manager, UI/UX Designer, Backend Engineer, dan QA untuk menghadirkan fitur yang siap digunakan di production.',
          ],
        },
        {
          sectionTitle: 'Pengembangan Mobile',
          items: [
            'Mengembangkan aplikasi Android HepiKasir menggunakan Kotlin, Coroutines, dan Jetpack Compose — sebuah POS merchant dengan manajemen shift, produk, dan integrasi subscription, dengan alur pengguna 30% lebih cepat.',
            'Memimpin pengembangan aplikasi HepiPay SoftPOS yang mendukung pembayaran QRIS dan terintegrasi dengan soundbox eksternal untuk memberikan konfirmasi transaksi secara real-time, dengan proses pembentukan QRIS di bawah 1 menit.',
            'Mengembangkan aplikasi POS terminal, asset management, dan EDC Android yang mendukung transaksi kartu, pengelolaan PIN, serta berbagai fitur hardware khusus sesuai kebutuhan merchant.',
            'Membangun fitur asset scanning untuk perangkat EDC dan soundbox yang meningkatkan efisiensi pelacakan aset dan operasional hingga 90%.',
            'Membangun aplikasi Proof-of-Concept berbasis Kotlin untuk komunikasi serial COM dengan PC/Laptop guna memvalidasi integrasi perangkat dan pertukaran data tingkat rendah.',
            'Merancang aplikasi Flutter dengan Clean Architecture, BLoC, GoRouter, GetIt, dan Flutter Flavors, dilengkapi secure storage, Envied, serta deteksi root/jailbreak berlapis.',
            'Mengintegrasikan berbagai SDK pihak ketiga untuk menghubungkan aplikasi mobile dengan perangkat EDC dan soundbox.',
          ],
        },
      ],
    },

    {
      role: 'Mobile Developer',
      roleFantasy: 'Penyihir Mobile',
      company: 'BNI Sekuritas',
      companyFantasy: 'Menara Sekuritas',
      type: 'Kontrak (Berbasis Proyek)',
      period: 'Okt 2024 – Jun 2025',
      location: 'Jakarta, Indonesia',
      achievement:
        'Aplikasi New BIONS telah digunakan oleh lebih dari 50.000 investor di Google Play Store.',
      highlights: [
        {
          items: [
            'Memimpin pengembangan sejumlah fitur utama BIONS, termasuk Reksa Dana, SBN, E-IPO, dan Obligasi Sekunder (Pasar Sekunder).',
            'Memelihara dan menyelesaikan berbagai issue pada aplikasi BIONS legacy berbasis React Native untuk menjaga stabilitas dan kelancaran operasional selama masa transisi.',
            'Mengembangkan aplikasi menggunakan Flutter dan Provider untuk menghasilkan pengalaman yang responsif dan performant.',
            'Mengintegrasikan berbagai API dari backend untuk mendukung alur dan fungsionalitas aplikasi.',
            'Menerapkan Agile SDLC untuk menjaga proses pengembangan tetap terstruktur dan iteratif.',
            'Berkolaborasi dengan Business Analyst, Designer, dan QA dalam merancang serta mengimplementasikan user flow yang lebih intuitif.',
            'Memberikan masukan teknis dan solusi berdasarkan kebutuhan bisnis dan analisis teknis untuk meningkatkan pengalaman pengguna.',
            'Melakukan testing dan debugging secara berkala untuk menjaga kualitas kode dan stabilitas aplikasi.',
            'Berkontribusi dalam diskusi arsitektur dan desain aplikasi dengan mempertimbangkan scalability dan maintainability jangka panjang.',
          ],
        },
      ],
    },

    {
      role: 'Mobile Developer',
      roleFantasy: 'Perajin Mobile',
      company: 'PT. Deptech Digital Indonesia',
      companyFantasy: 'Guild Deptech',
      type: 'Kontrak (Berbasis Proyek)',
      period: 'Jun 2024 – Sep 2024',
      location: 'Jakarta, Indonesia',
      highlights: [
        {
          items: [
            'Berkontribusi dalam pengembangan tiga aplikasi klien: Lakuemas Indonesia, TimBAVku, dan Tara Cash, termasuk integrasi payment gateway berbasis Web3.',
            'Menerapkan BLoC Cubit dan Clean Architecture pada proyek Flutter untuk menghasilkan codebase yang rapi dan scalable.',
            'Menerapkan pola desain MVVM pada proyek Android native untuk meningkatkan modularitas dan keteraturan kode.',
            'Mengembangkan dan mengoptimalkan lebih dari 5 fitur pada Lakuemas Indonesia dan TimBAVku sesuai kebutuhan pengguna.',
            'Terlibat dalam perencanaan dan pengembangan 5+ fitur pada Tara Cash, termasuk integrasi modul Web3 untuk pembayaran berbasis kripto.',
            'Menyederhanakan user flow pada Tara Cash sehingga proses menjadi lebih singkat dan efisien.',
            'Merancang flow baru untuk fitur yang belum terakomodasi oleh sistem sebelumnya guna menutup celah fungsional.',
            'Mengintegrasikan berbagai API untuk memastikan komunikasi antara aplikasi dan backend berjalan lancar.',
            'Mengidentifikasi dan menyelesaikan issue yang ditemukan oleh QA untuk menjaga kualitas aplikasi.',
            'Melakukan testing dan debugging secara berkala untuk memastikan aplikasi tetap stabil dan bebas dari error.',
            'Mengelola proses pengembangan menggunakan Agile SDLC dan Scrum dengan Jira & Trello.',
          ],
        },
      ],
      technologies: [
        'Flutter',
        'Java',
        'Kotlin',
        'GetX',
        'BLoC',
        'Retrofit2',
        'Dio',
        'Volley',
        'SQLite',
        'Shorebird',
        'Clean Architecture',
        'MVVM',
        'Firebase',
        'FCM',
        'GoRouter',
        'GetIt',
        'Web3',
        'Unit Testing',
        'Git',
      ],
    },

    {
      role: 'Mobile Developer',
      roleFantasy: 'Perajin Mobile',
      company: 'PT. Fhadira Inovasi Teknologi',
      companyFantasy: 'Forge Fhadira',
      type: 'Penuh Waktu',
      period: 'Agt 2022 – Jun 2024',
      location: 'Bekasi, Indonesia',
      highlights: [
        {
          items: [
            'Mengembangkan enam aplikasi klien: Jagatara (Native), Sinurmi (Native), Inspector Mobil (Flutter), Inspector Mobil Internal (Flutter), PM Tools (Flutter), dan VMS Mobile (Flutter).',
            'Membangun dan memelihara landing page perusahaan serta dashboard internal menggunakan React.js untuk mendukung kebutuhan operasional dan bisnis.',
            'Terlibat dalam perencanaan, perancangan, dan pengembangan fitur dari tahap awal hingga aplikasi siap dirilis.',
            'Mengintegrasikan SDK pihak ketiga dan Bluetooth pada aplikasi pemantauan kesehatan Jagatara dan Sinurmi untuk mendukung konektivitas smartwatch.',
            'Menerapkan geolocation pada Jagatara untuk memungkinkan pengguna membagikan lokasi darurat melalui tombol "urgent".',
            'Mengembangkan 5+ fitur baru pada aplikasi VMS sekaligus mengusulkan perbaikan user flow untuk menutup berbagai kebutuhan sistem.',
            'Menggunakan GetX dan BLoC Cubit sebagai pendekatan state management untuk membangun codebase yang terstruktur dan mudah dikembangkan.',
            'Merilis dan memelihara berbagai aplikasi di Google Play Store.',
            'Mengelola proses pengembangan menggunakan Agile SDLC dan Scrum dengan ClickUp.',
          ],
        },
      ],
      technologies: [
        'Flutter',
        'Java',
        'GetX',
        'BLoC',
        'Clean Architecture',
        'MVVM',
        'MVC',
        'Retrofit2',
        'Firebase',
        'Geolocation',
        'Dio',
        'WebView',
        'SDK',
        'JSON',
        'Local Data Persistence',
      ],
    },
  ],

  // ══ EDUCATION ══
  education: [
    {
      institution: 'Universitas Negeri Jakarta (UNJ)',
      institutionFantasy: 'Akademi Agung Jakarta',
      degree: 'Sarjana Ilmu Komputer (S.Kom)',
      degreeFantasy: 'Sarjana Seni Digital',
      period: 'Jan 2024',
      gpa: '3.66 / 4.00',
      description:
        'Mendalami fondasi ilmu komputasi, mulai dari algoritma, struktur data, pemrograman berorientasi objek, hingga konsep dasar ilmu komputer. Lulus dengan IPK Kumulatif 3.66 / 4.00.',
    },
    {
      institution: 'Bangkit Academy (oleh Google, GoTo & Traveloka)',
      institutionFantasy: 'Ordo Bangkit — Binaan Google',
      degree: 'Kohort Mobile Development (Android)',
      degreeFantasy: 'Inisiasi Ordo Perajin Mobile',
      period: 'Jul 2022',
      description:
        'Program intensif yang berfokus pada pengembangan Android modern, cloud architecture, dan prinsip software engineering profesional melalui proyek akhir berskala nyata dan kolaborasi lintas disiplin.',
    },
  ],

  // ══ SKILLS ══
  skills: [
    {
      icon: 'Globe',
      title: 'Pengembangan Web',
      titleFantasy: 'Sihir Web',
      skills: [
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'TanStack Query',
        'React Hook Form',
        'Zod',
        'Recharts',
        'React Leaflet',
        'Radix UI',
        'CVA',
      ],
    },
    {
      icon: 'Smartphone',
      title: 'Pengembangan Mobile',
      titleFantasy: 'Transmutasi Mobile',
      skills: [
        'Flutter',
        'Kotlin',
        'Dart',
        'Jetpack Compose',
        'Android SDK',
        'Java',
        'React Native',
        'BLoC / Cubit',
        'Provider',
        'GetX',
        'Coroutines',
      ],
    },
    {
      icon: 'Layers',
      title: 'Arsitektur & Backend',
      titleFantasy: 'Rune Arsitektur',
      skills: [
        'Clean Architecture',
        'MVVM',
        'OOP',
        'REST API',
        'Axios',
        'Retrofit2',
        'Dio',
        'Node.js',
        'SQLite',
        'MongoDB',
        'Firebase',
        'FCM',
      ],
    },
    {
      icon: 'Hammer',
      title: 'Tools & Keamanan',
      titleFantasy: 'Tempa Alkemis',
      skills: [
        'Git',
        'Jira',
        'Shorebird',
        'GoRouter',
        'GetIt',
        'Hilt / Dagger / Koin',
        'CryptoJS',
        'FlutterSecureStorage',
        'Web3',
        'CI/CD',
        'Optimasi Performa',
      ],
    },
  ],

  // ══ CERTIFICATIONS ══
  certifications: [
    {
      name: 'Associate Android Developer',
      nameFantasy: 'Segel Agung Android dari Google',
      issuer: 'Google',
      number: '#1086',
      validity: 'Berlaku hingga Juli 2025',
    },
    {
      name: 'MERN eCommerce From Scratch',
      nameFantasy: 'Kitab Transmutasi MERN Stack',
      issuer: 'Udemy',
      number: 'UC-cc918f75-e16b-4c27-891e-a323edba403d',
    },
    {
      name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
      nameFantasy: 'Kitab Fondasi Backend',
      issuer: 'Dicoding',
      number: 'EYX4R813RXDL',
    },
    {
      name: 'Belajar Dasar Pemrograman JavaScript',
      nameFantasy: 'Kodeks JavaScript',
      issuer: 'Dicoding',
      number: 'N9ZOD0NYYPG5',
    },
    {
      name: 'Belajar Prinsip Pemrograman SOLID',
      nameFantasy: 'Grimoire Prinsip SOLID',
      issuer: 'Dicoding',
      number: 'N9ZODL5L8PG5',
    },
    {
      name: 'Belajar Dasar UX Design',
      nameFantasy: 'Kitab Mantra Desain UX',
      issuer: 'Dicoding',
      number: '1RXYMNKW9XVM',
    },
    {
      name: 'Belajar Fundamental Aplikasi Android',
      nameFantasy: 'Kitab Fondasi Android',
      issuer: 'Dicoding',
      number: 'JMZV2YMVNZN9',
    },
    {
      name: 'Belajar Pengembangan Aplikasi Android Intermediate',
      nameFantasy: 'Kronik Android Tingkat Menengah',
      issuer: 'Dicoding',
      number: '0LZ013DK0P65',
    },
    {
      name: 'Belajar Membuat Aplikasi Flutter untuk Pemula',
      nameFantasy: 'Gulungan Inisiasi Flutter',
      issuer: 'Dicoding',
      number: '72ZDE9359PYW',
    },
    {
      name: 'Mastered Flutter Mobile App Development',
      nameFantasy: 'Penguasaan Agung Flutter',
      issuer: 'SanberCode',
      number: '25062',
    },
    {
      name: 'Test of English Proficiency',
      nameFantasy: 'Bahasa Sang Pengelana',
      issuer: 'UNJ TOEFL',
      number: '01995/UN3g1g/TEPUNJl2023',
      validity: 'Skor: 557 / 677',
    },
  ],

  // ══ PROJECTS ══
  projects: [
    {
      title: 'Hepi2Pay — Official Merchant Gateway & Digital Landing Sanctuary',
      titleFantasy: 'Hepi2Pay: Oasis Merchant & Gerbang Pembayaran Digital',
      description:
        'Gerbang digital berkinerja tinggi yang dirancang untuk memperkenalkan merchant pada ekosistem pembayaran QRIS generasi baru. Mengubah rancangan UI/UX modern menjadi pengalaman web yang cepat, responsif, dan SEO-friendly menggunakan Next.js, TypeScript, dan Tailwind CSS. Menampilkan berbagai kemampuan utama HepiPay, termasuk notifikasi transaksi melalui Soundbox secara real-time, penerimaan QRIS dari berbagai bank, pemantauan settlement, serta proses onboarding merchant tanpa biaya. Dibangun dengan pendekatan mobile-first, micro-interactions yang halus, dan struktur semantik untuk menghadirkan pengalaman yang terpercaya dan meningkatkan konversi merchant.',
      url: 'https://www.hepipay.id/',
      urlLabel: 'Jelajahi Karya',
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'SEO & Performa',
        'Desain Responsif',
        'Fintech Showcase',
        'Landing Page',
      ],
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBHxyRMpZfeiNSy_kNa_yeUqdVyQOsSVekcuYqEcdDPqNKHaZTLFRi0AKOeAFAGOgaR59qSLjRdvAPwlwgBb0G1_CMEF_8yLKJjo86C8bwGGrWRJ-nankpq0TO15pbL95PICD3HixQTHvaywgofje6Ba6xpnN2v_5JcyVGTBBCP0sbYIbW4IZFE5VG48HljIUM6SofIrP2SFUXG18-J2dZWNWkBcr0cjA3y5moFV1dTho8n150hN-x-1Lfjz4u4wP7Y',
          alt: 'HepiPay Landing Page — QRIS Merchant Platform & Soundbox Nexus',
          caption: 'Gerbang Merchant & Ekosistem QRIS',
        },
      ],
    },

    {
      title: 'FDS — Fraud Detection System (Finpoint Detect Shield)',
      titleFantasy: 'FDS: Benteng Aegis & Perisai Deteksi Fraud',
      description:
        'Sistem pertahanan fraud real-time kelas enterprise yang dirancang untuk payment switch, acquirer, dan ekosistem fintech dengan volume transaksi tinggi. Dibangun menggunakan Next.js, React 19, TypeScript, dan teknologi keamanan modern untuk mendeteksi anomali tanpa mengorbankan performa transaksi. Dilengkapi ruang kendali TSM (Transaction Security Management) untuk memantau aktivitas secara real-time, ekspor audit melalui ExcelJS, Adaptive Rule Engine untuk aturan fraud yang fleksibel, Risk Scoring bertingkat, serta Case Management lengkap dengan pengelolaan whitelist dan blacklist.',
      url: 'https://www.finpoint.id/',
      urlLabel: 'Jelajahi Karya',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Fintech',
        'Keamanan Siber',
        'Dashboard Enterprise',
      ],
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbI0Pe0fiKBq-3SMZE-tvzipLDJ4xSzwvWmiVP81qNeM1lBaWhv-8sJtqN5GvoY1kKttTb_Tf1Jmx3NJfVpu7mYSkUOWEDXtFiB_bRjGozR2yOnRplslAp0ng39czLsZsfQSu2sQmRVgQsQomiG_BYEv6Ru-ovNSGS7URLvkEsy_LdSxPmBpj14-bmlDkrk9gENqug_9GKEFGFEBb8q1kvUdJxzHGj9fbZ4aOw6jVLn1xQv4TIAXJet7dyc81ihcfR7Q',
          alt: 'FDS Autentikasi Aman & Gerbang Akses Benteng',
          caption: 'Gerbang Autentikasi Aman',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM2tWfzvQX0GD4KjSS0zgrPGu-LuEHvMNvTvlWAr-nKgdn9nJ-_kiQNbGThJ3frwPnhHaOHm9Qah4vnz0d4zaic-zS8-zM0WLOT2Vd42sBGK4J9GLjrF1Dc6XJuZMK1fqhA_wwtDf0gGx51yjp75NaRcwhkFu98XR0Y_Xa5kVfI89RulffQAKmnay5ZPAe_wsGug23TAX_a9rNZPDFUqs5aRh6Mo-pEcrJ0_ERGc9L_JCVr_ySP-PhGtwe0JvzgIprJXU',
          alt: 'Dashboard FDS TSM — Pemantauan Transaksi & Telemetri Real-time',
          caption: 'Dashboard Pemantauan TSM',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWuH23IJ92xEPh4Pi2sCvjvTbuigDxmilXqN_GB1FwZFc-baf4P2zDuCDj4HovIqMQLEAOlJ-mBUqL3Bf8XClpb8rRixcpPeSYmpokzQsQ_irWNEJjvuQTassMIATTQbAUGYuG7gBksG1BD2tJWdkO3HiOREiFdFqcwgKm2XpizynoExDYPAEFFGObukYuoxM1E38ZBn1T29q2mZ7ViBEnn5B92gNtPEfBMrFVv2cAoRIOIZgjWYJXlqaYtp4MtyC-gXs',
          alt: 'Manajemen Aturan FDS — Konfigurasi Trigger & Adaptive Rule Engine',
          caption: 'Adaptive Rule Engine',
        },
      ],
    },

    {
      title: 'Finpoint — Enterprise Fintech & Digital Solutions Sanctuary',
      titleFantasy: 'Benteng Finpoint: Gerbang Solusi Digital',
      description:
        'Portal korporat kelas enterprise yang dibangun untuk mendukung transformasi digital di sektor perbankan, fintech, dan ekosistem pembayaran. Menggunakan Next.js, TypeScript, Tailwind CSS, dan Framer Motion untuk menghadirkan performa cepat, tampilan responsif, serta pengalaman pengguna yang modern. Menampilkan berbagai solusi finansial strategis, mulai dari pembayaran tagihan kartu kredit melalui Mastercard Send, BPC SmartVista Managed Services, Merchant Acquiring QRIS berizin Bank Indonesia, solusi POS/EDC, hingga teknologi keamanan siber seperti Hardware Token Authentication dan Post-Quantum Cryptography.',
      url: 'https://www.finpoint.id/',
      urlLabel: 'Jelajahi Karya',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Radix UI',
        'Solusi Fintech',
        'QRIS & Pembayaran',
        'Keamanan Siber',
        'Portal Korporat',
      ],
      images: [
        {
          src: '/projects/finpoint_website.jpg',
          alt: 'Portal Solusi Transformasi Digital Finpoint Enterprise',
          caption: 'Portal Korporat & Showcase Solusi Finpoint',
        },
      ],
    },

    {
      title: 'Hepi2Pay — Merchant Admin War Room & Financial Operations Citadel',
      titleFantasy: 'Hepi2Pay: Ruang Kendali Merchant',
      description:
        'Pusat kendali operasional merchant yang dirancang untuk menangani kebutuhan fintech dengan volume transaksi tinggi. Dibangun menggunakan Next.js 16, React 19, TypeScript, dan Tailwind CSS untuk mengelola siklus hidup merchant serta berbagai kanal pembayaran. Menyediakan dashboard analitik modular dengan drag-and-drop, pemantauan transaksi B2B dan B2C, mesin rekonsiliasi otomatis dengan deteksi selisih, pemetaan wilayah interaktif, pengamanan sesi berbasis CryptoJS, perlindungan anti-bot, serta sinkronisasi server-state berkecepatan tinggi menggunakan TanStack React Query dan Zod.',
      url: 'https://www.hepipay.id/',
      urlLabel: 'Jelajahi Karya',
      tags: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Tailwind CSS',
        'TanStack Query',
        '@dnd-kit',
        'Recharts',
        'React Leaflet',
        'Fintech & Recon',
        'Dashboard Enterprise',
      ],
      images: [
        {
          src: '/projects/hepipay_dashboard.jpg',
          alt: 'Dashboard Ruang Kendali & Analitik HepiPay Merchant Admin',
          caption: 'Pusat Kendali & Telemetri Real-Time',
        },
      ],
    },

    {
      title: 'Hepi2Pay Kasir — Smart POS & Merchant Payment Terminal',
      titleFantasy: 'Hepi2Pay Kasir: Buku Kas & Pusat Merchant',
      description:
        'Aplikasi Point of Sale (POS) modern yang dirancang untuk mendukung kebutuhan transaksi merchant dan retail dengan cepat dan andal. Dibangun menggunakan Kotlin, Jetpack Compose, Material 3, dan Clean Architecture untuk menghadirkan proses checkout yang mulus serta pencatatan transaksi secara real-time. Mendukung integrasi terminal EDC pintar dan printer struk Bluetooth, pemindaian barcode menggunakan CameraX & Google ML Kit, penyimpanan offline melalui Room Database, pengelolaan inventaris secara massal, transaksi QRIS dan kartu, serta integrasi Firebase.',
      url: 'https://play.google.com/store/apps/details?id=com.finpoint.hepi2paykasir',
      urlLabel: 'Jelajahi Karya',
      tags: [
        'Android',
        'Kotlin',
        'Jetpack Compose',
        'Clean Architecture',
        'Dagger Hilt',
        'Room DB',
        'CameraX / ML Kit',
        'Integrasi EDC & Printer',
        'Fintech & POS',
      ],
      images: [
        {
          src: '/images/projects/hepi-kasir-pos.png',
          alt: 'Hepi2Pay Kasir — Aplikasi Kasir Simpel & Pemesanan Cepat',
          caption: 'Aplikasi Kasir Simpel & Pemesanan',
        },
        {
          src: '/images/projects/hepi-kasir-payment.png',
          alt: 'Hepi2Pay Kasir — Proses Pesanan Cepat & Metode Pembayaran',
          caption: 'Proses Pesanan Cepat & Sat-Set',
        },
        {
          src: '/images/projects/hepi-kasir-report.png',
          alt: 'Hepi2Pay Kasir — Dashboard Penjualan Komplit & Analitik Performa',
          caption: 'Dashboard Penjualan Komplit',
        },
        {
          src: '/images/projects/hepi-kasir-shift.png',
          alt: 'Hepi2Pay Kasir — Pengaturan Jam Kerja Shift Kasir & Rangkuman Penjualan',
          caption: 'Pengaturan Shift & Rekonsiliasi Kasir',
        },
      ],
    },

    {
      title: 'BIONS by BNI Sekuritas — Multi-Asset Investment & Online Trading System',
      titleFantasy: 'BIONS: Bursa Astral & Kitab Investasi Multi-Aset',
      description:
        'Platform investasi multi-aset yang dirancang untuk membantu investor modern menjelajahi pasar modal dalam satu ekosistem digital. Mendukung berbagai instrumen, termasuk Saham (IDX), Reksa Dana, Efek Beragun Aset (EBA Ritel), serta Surat Berharga Negara (SBN dan Obligasi Pasar Sekunder). Dilengkapi Trading Ideas dan riset pasar dari analis BNI Sekuritas, Fast Order sub-detik, Stop Loss & Trailing Take Profit otomatis, analisis portofolio multi-aset, autentikasi biometrik, serta pengalaman yang responsif di smartphone maupun tablet.',
      url: 'https://play.google.com/store/apps/details?id=id.bions.bnis.android',
      urlLabel: 'Jelajahi Karya',
      tags: [
        'Trading Mobile & Web',
        'Fintech',
        'Investasi Multi-Aset',
        'Pasar Modal (BEI/IDX)',
        'Telemetri Pasar Real-time',
        'Analisis Portofolio',
        'Order Otomatis',
        'Diawasi OJK & BEI',
      ],
      images: [
        {
          src: '/images/projects/bions-mobile-showcase.png',
          alt: 'BIONS by BNI Sekuritas — Platform Trading Multi-Aset',
          caption: 'Pengalaman Baru BIONS & Antarmuka Multi-Aset',
        },
        {
          src: '/images/projects/bions-trading-ideas.png',
          alt: 'BIONS Trading Ideas — Rekomendasi Saham & Riset Pasar',
          caption: 'Trading Ideas & Intelijen Pasar',
        },
        {
          src: '/images/projects/bions-mutual-funds.png',
          alt: 'BIONS Reksa Dana — Pemantauan Reksa Dana & Pertumbuhan Portofolio',
          caption: 'Reksa Dana & Alokasi Portofolio',
        },
        {
          src: '/images/projects/bions-tablet-experience.png',
          alt: 'Pengalaman BIONS Tablet & Mobile — Telemetri Real-Time & Watchlist',
          caption: 'Pusat Trading Tablet & Multi-Perangkat',
        },
      ],
    },
  ],
};

// Default export for compatibility
export const portfolioContent: PortfolioContent = portfolioContentEn;