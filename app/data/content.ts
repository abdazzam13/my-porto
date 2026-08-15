import type { PortfolioContent } from '../types';

export const portfolioContent: PortfolioContent = {
  // ══════════════════════════════════════════
  // PROFILE
  // ══════════════════════════════════════════
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

  // ══════════════════════════════════════════
  // EXPERIENCE
  // ══════════════════════════════════════════
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

  // ══════════════════════════════════════════
  // EDUCATION
  // ══════════════════════════════════════════
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

  // ══════════════════════════════════════════
  // SKILLS
  // ══════════════════════════════════════════
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

  // ══════════════════════════════════════════
  // CERTIFICATIONS
  // ══════════════════════════════════════════
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

  // ══════════════════════════════════════════
  // PROJECTS — Portal to the Realms
  // ══════════════════════════════════════════
  projects: [
    {
      title: 'HepiPay — Merchant Landing Page',
      titleFantasy: "HepiPay: The Merchant's Oasis",
      description:
        'A fintech sanctuary forged for QRIS payments and merchant management. Transmuted abstract requirements into a seamless, high-performance landing page that welcomes merchants to the world of digital payments — featuring soundbox QRIS notifications, multi-bank acceptance, real-time transaction reporting, and zero idle fees.',
      url: 'https://www.hepipay.id/',
      urlLabel: 'Traverse Realm',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Fintech', 'Landing Page'],
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYBHxyRMpZfeiNSy_kNa_yeUqdVyQOsSVekcuYqEcdDPqNKHaZTLFRi0AKOeAFAGOgaR59qSLjRdvAPwlwgBb0G1_CMEF_8yLKJjo86C8bwGGrWRJ-nankpq0TO15pbL95PICD3HixQTHvaywgofje6Ba6xpnN2v_5JcyVGTBBCP0sbYIbW4IZFE5VG48HljIUM6SofIrP2SFUXG18-J2dZWNWkBcr0cjA3y5moFV1dTho8n150hN-x-1Lfjz4u4wP7Y',
          alt: 'HepiPay Landing Page — QRIS Merchant Platform',
          caption: 'HepiPay Landing Page',
        },
      ],
    },
    {
      title: 'FDS — Fraud Detection System (Finpoint Detect Shield)',
      titleFantasy: "FDS: The Guardian's Shield",
      description:
        'An enterprise-grade, real-time fraud detection fortress engineered for high-volume acquirers and payment switches. Powered by sub-second event streaming and adaptive rules, it detects anomalies in-flight — protecting host infrastructure without compromising payment speed or user experience. Features a TSM dashboard for transaction monitoring, a rules management engine, and a multi-level risk scoring system.',
      url: 'https://www.finpoint.id/',
      urlLabel: 'Traverse Realm',
      tags: ['React', 'TypeScript', 'TanStack Query', 'Recharts', 'Fintech', 'Enterprise Dashboard'],
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfbI0Pe0fiKBq-3SMZE-tvzipLDJ4xSzwvWmiVP81qNeM1lBaWhv-8sJtqN5GvoY1kKttTb_Tf1Jmx3NJfVpu7mYSkUOWEDXtFiB_bRjGozR2yOnRplslAp0ng39czLsZsfQSu2sQmRVgQsQomiG_BYEv6Ru-ovNSGS7URLvkEsy_LdSxPmBpj14-bmlDkrk9gENqug_9GKEFGFEBb8q1kvUdJxzHGj9fbZ4aOw6jVLn1xQv4TIAXJet7dyc81ihcfR7Q',
          alt: 'FDS Secure Authentication / Login Page',
          caption: 'Secure Authentication',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM2tWfzvQX0GD4KjSS0zgrPGu-LuEHvMNvTvlWAr-nKgdn9nJ-_kiQNbGThJ3frwPnhHaOHm9Qah4vnz0d4zaic-zS8-zM0WLOT2Vd42sBGK4J9GLjrF1Dc6XJuZMK1fqhA_wwtDf0gGx51yjp75NaRcwhkFu98XR0Y_Xa5kVfI89RulffQAKmnay5ZPAe_wsGug23TAX_a9rNZPDFUqs5aRh6Mo-pEcrJ0_ERGc9L_JCVr_ySP-PhGtwe0JvzgIprJXU',
          alt: 'FDS TSM Dashboard — Transaction Monitoring',
          caption: 'TSM Dashboard',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWuH23IJ92xEPh4Pi2sCvjvTbuigDxmilXqN_GB1FwZFc-baf4P2zDuCDj4HovIqMQLEAOlJ-mBUqL3Bf8XClpb8rRixcpPeSYmpokzQsQ_irWNEJjvuQTassMIATTQbAUGYuG7gBksG1BD2tJWdkO3HiOREiFdFqcwgKm2XpizynoExDYPAEFFGObukYuoxM1E38ZBn1T29q2mZ7ViBEnn5B92gNtPEfBMrFVv2cAoRIOIZgjWYJXlqaYtp4MtyC-gXs',
          alt: 'FDS Rules Management — Adaptive Rule Engine',
          caption: 'Rules Management',
        },
      ],
    },
    {
      title: 'Finpoint — Corporate Digital Transformation Portal',
      titleFantasy: 'The Finpoint Citadel: Digital Transformation Solutions',
      description:
        'An enterprise portal engineered for digital transformation in financial service businesses. Showcases comprehensive solutions for Credit Card Bill Payment, Managed Services, QRIS Merchant Acquiring, and Cybersecurity — forged with high performance, elegant responsive aesthetics, and partner network highlights.',
      url: 'https://www.finpoint.id/',
      urlLabel: 'Traverse Realm',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Fintech', 'Corporate Portal'],
      images: [
        {
          src: '/projects/finpoint_website.jpg',
          alt: 'Finpoint Digital Transformation Solutions Portal',
          caption: 'Finpoint Corporate Portal',
        },
      ],
    },
    {
      title: 'HepiPay — Merchant Admin War Room & Analytics Dashboard',
      titleFantasy: "HepiPay: The Merchant Commander's Grimoire",
      description:
        'A mission-critical internal merchant operations dashboard and financial war room. Engineered with real-time settlement monitoring, transaction volume metrics, B2B/B2C merchant breakdown, Open API Payment Hub analytics, payment method distribution, and error tracking radars.',
      url: 'https://www.hepipay.id/',
      urlLabel: 'Traverse Realm',
      tags: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'Recharts', 'Tailwind CSS', 'Admin Dashboard'],
      images: [
        {
          src: '/projects/hepipay_dashboard.jpg',
          alt: 'HepiPay Merchant Operations & Analytics Dashboard',
          caption: 'Merchant Operations Dashboard',
        },
      ],
    },
    {
      title: 'Hepi2pay Kasir — Point of Sale (POS) Mobile App',
      titleFantasy: "HepiKasir: The Merchant's Enchanted Ledger",
      description:
        'A swift and intuitive Android Point of Sale (POS) mobile artifact forged to empower merchant realms. Summoned using Kotlin, Coroutines, and Jetpack Compose — delivering lightning-fast order processing, dynamic product catalog management, cashier shift scheduling with cash & digital reconciliation, and a comprehensive sales analytics dashboard. Crafted with a user flow 30% swifter than rival applications.',
      url: 'https://play.google.com/store/apps/details?id=com.finpoint.hepi2paykasir',
      urlLabel: 'Invoke on Google Play',
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Coroutines', 'Clean Architecture', 'POS', 'Google Play'],
      images: [
        {
          src: '/projects/hepipay_kasir.jpg',
          alt: 'Hepi2pay Kasir — Android POS Mobile App Showcase',
          caption: 'Hepi2pay Kasir — POS & Shift Management',
        },
      ],
    },
  ],
};