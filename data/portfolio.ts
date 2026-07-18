// ============================================================
// SYIFA NURZAIN — Portfolio content · single source of truth
// ============================================================

export type Project = {
  idx: string
  year: string
  title: string
  category: string
  role: string
  description: string
  tags: string[]
  url: string
  mediaLabel: string
  gradient: string
  image?: string  // filename relative to /public/projects/, e.g. "mybca-bisnis.webp"
}

export type TimelineEntry = {
  when: string
  role: string
  company: string
  location: string
  points: string[]
}

export type SkillRow = {
  n: string
  cat: string
  items: { label: string; primary?: boolean }[]
}

export type GlanceFact = {
  key: string
  value: string
  detail: string
}

// ---------- Hero ----------
export const HERO = {
  tagline: 'Mobile & Web Engineer',
  subline: 'Android · React · iOS',
  description:
    "Five years shipping production apps across banking, insurance & consumer products — currently building for millions at one of Indonesia's largest banks.",
  roles: [
    'Android · Kotlin',
    'Jetpack Compose',
    'React · TypeScript',
    'Angular',
    'SwiftUI · iOS',
    'React Native',
  ],
  cvPath: '/cv/CV_SyifaNurzain_ATS.pdf',
  coords: '06.17°S / 106.63°E',
  availability: 'Available — 2026',
}

// ---------- Story ----------
export const STORY = {
  paragraphs: [
    "My work lives where reliability isn't optional — <strong>regulated banking, insurance, and consumer products</strong>. Today I own end-to-end feature delivery at <strong>PT Bank Central Asia</strong>, one of Indonesia's largest banks, shipping across Android, iOS, and web for millions of customers.",
    'I care about the parts users never see: <strong>clean architecture, fast load times, and code the next engineer can actually maintain</strong>. Ten-plus major features shipped with zero critical incidents — that\'s the standard I hold.',
  ],
  stats: [
    { n: '05', u: '+', l: 'Years shipping' },
    { n: '04', u: '',  l: 'Industries' },
    { n: '99', u: '%', l: 'Uptime SLA held' },
  ],
}

// ---------- Projects ----------
export const PROJECTS: Project[] = [
  {
    idx: '01',
    year: '2026',
    title: 'myBCA Bisnis Lite',
    category: 'Banking',
    role: 'Mobile Developer',
    description:
      'A mobile companion app for myBCA Bisnis, BCA\'s corporate cash management platform. The app replaces the traditional hardware token with a fully digital solution, enabling KeyBCA Appli code generation and PIN-based transaction authorization natively on mobile, without requiring web portal access.',
    tags: ['Android', 'iOS', 'Kotlin', 'Jetpack Compose', 'SwiftUI'],
    url: 'https://play.google.com/store/apps/details?id=com.bca.mybcabisnislite',
    mediaLabel: '// enterprise banking',
    gradient: 'repeating-linear-gradient(45deg, var(--bg) 0 14px, var(--bg-2) 14px 28px)',
    image: 'mbblite.jpeg',
  },
  {
    idx: '02',
    year: '2024',
    title: 'myBCA Bisnis',
    category: 'Banking',
    role: 'Frontend Developer',
    description:
      'A web-based corporate internet banking platform by BCA, engineered to handle the full spectrum of business cash management needs within a single system. The platform supports real-time transaction monitoring, bulk payments, cross-border transfers, invoice management, and Host-to-Host integration, allowing businesses to connect their internal systems directly to the platform.',
    tags: ['Angular', 'TypeScript'],
    url: 'https://mybcabisnis.bca.co.id/',
    mediaLabel: '// enterprise banking',
    gradient: 'repeating-linear-gradient(45deg, var(--bg) 0 14px, var(--bg-2) 14px 28px)',
    image: 'mbb.jpeg',
  },
  {
    idx: '03',
    year: '2023',
    title: 'Mythic Protocol',
    category: 'Gaming',
    role: 'Frontend Developer',
    description:
      'A cross-product web ecosystem for Confiction Labs, unifying gaming, digital collectibles, and community engagement into a single platform. Built to handle user progression, clearance-based access control, quest systems, and cross-platform reward distribution across interconnected products like RIFTSTORM and the Portal.',
    tags: ['React', 'TypeScript', 'Spine.js'],
    url: 'https://one.confiction.com/portal',
    mediaLabel: '// gaming portal',
    gradient: 'repeating-linear-gradient(-45deg, var(--bg) 0 14px, var(--bg-2) 14px 28px)',
    image: 'mp.jpeg',
  },
  {
    idx: '04',
    year: '2023',
    title: 'Fantasy Team',
    category: 'Gamification',
    role: 'Frontend Developer',
    description:
      'Fantasy sports platform transforming soccer fandom into interactive gaming — build dream teams, implement strategic formations, and compete globally based on real-world player performances.',
    tags: ['React', 'JavaScript'],
    url: 'https://www.vidio.com/fantasy-team',
    mediaLabel: '// fantasy sports',
    gradient: 'repeating-linear-gradient(45deg, var(--bg) 0 14px, var(--bg-2) 14px 28px)',
    image: 'lisa.jpeg',
  },
  {
    idx: '05',
    year: '2022',
    title: 'Activity Management System',
    category: 'Insurance',
    role: 'Android Lead',
    description:
      'An Android application for insurance professionals to manage sales pipelines and recruiting activities in one place. The app handles contact syncing, activity scheduling, and reminder management while delivering data-driven insights across each stage of the sales funnel.',
    tags: ['Android', 'Java', 'Kotlin', 'Firebase', 'Realm'],
    url: 'https://play.google.com/store/apps/details?id=id.co.tokiomarine_life.salesmanagementactivity',
    mediaLabel: '// insurance CRM',
    gradient: 'repeating-linear-gradient(45deg, var(--bg) 0 14px, var(--bg-2) 14px 28px)',
    image: 'ams.jpeg',
  },
  {
    idx: '06',
    year: '2021',
    title: 'Loyola PPDB',
    category: 'EdTech',
    role: 'Frontend Developer',
    description:
      'Modern student registration platform for Kolese Loyola High School — streamlined admission processes, automated application workflows, document management, and real-time status tracking.',
    tags: ['React', 'JavaScript'],
    url: 'https://ppdb.yayasanloyola.org/#/login',
    mediaLabel: '// school admission',
    gradient: 'repeating-linear-gradient(-45deg, var(--bg) 0 14px, var(--bg-2) 14px 28px)',
    image: 'loyola.jpeg',
  },
]

// ---------- Skills ----------
export const SKILLS: SkillRow[] = [
  {
    n: '01',
    cat: 'Mobile',
    items: [
      { label: 'Kotlin', primary: true },
      { label: 'Jetpack Compose', primary: true },
      { label: 'Android SDK', primary: true },
      { label: 'SwiftUI' },
      { label: 'React Native' },
      { label: 'Java' },
    ],
  },
  {
    n: '02',
    cat: 'Web',
    items: [
      { label: 'React', primary: true },
      { label: 'TypeScript', primary: true },
      { label: 'Angular', primary: true },
      { label: 'Next.js' },
      { label: 'JavaScript' },
    ],
  },
  {
    n: '03',
    cat: 'Architecture',
    items: [
      { label: 'MVVM' },
      { label: 'Clean Architecture' },
      { label: 'REST APIs' },
      { label: 'Performance Optimization' },
    ],
  },
  {
    n: '04',
    cat: 'Practice',
    items: [
      { label: 'Git' },
      { label: 'CI/CD' },
      { label: 'Google Play' },
      { label: 'App Store' },
      { label: 'Agile' },
      { label: 'Scrum' },
    ],
  },
]

// ---------- Timeline ----------
export const TIMELINE: TimelineEntry[] = [
  {
    when: 'May 2023 — Present',
    role: 'IT Specialist · Mobile & Web Engineer',
    company: 'PT Bank Central Asia (BCA)',
    location: 'Tangerang, ID',
    points: [
      'Own <strong>end-to-end feature delivery</strong> for enterprise banking apps serving <strong>millions of customers</strong> across Android and web.',
      'Shipped <strong>10+ major features with zero critical post-release incidents</strong>, holding a 99% uptime SLA in a highly regulated environment.',
      'Cut code-review cycle time <strong>~30%</strong> with structured review checklists and refactoring legacy modules into testable components.',
      'Led technical improvement initiatives including <strong>architecture refactoring and performance tuning</strong>, resulting in measurable gains in app responsiveness.',
      'Collaborate with product managers, designers, and backend engineers in <strong>cross-functional Agile squads</strong> with minimal supervision.',
    ],
  },
  {
    when: 'Apr 2022 — Apr 2023',
    role: 'Web Frontend Engineer',
    company: 'PT Agate International',
    location: 'Bandung, ID',
    points: [
      'Built &amp; maintained <strong>5+ React web apps</strong> for interactive gamification products, translating designs into pixel-perfect responsive UI.',
      'Reduced average page load time <strong>~40%</strong> via code-splitting, lazy loading, and asset optimization.',
      'Integrated frontend applications with backend REST APIs and contributed to a shared component library, cutting new-feature implementation time.',
      'Improved performance and user experience through systematic profiling and optimization techniques.',
    ],
  },
  {
    when: 'Aug 2020 — Jun 2022',
    role: 'Android Developer',
    company: 'PT Tokio Marine Life Insurance',
    location: 'Jakarta, ID',
    points: [
      'Led Android development for an agent app used by <strong>200+ agents nationwide</strong> to manage policies and clients.',
      'Implemented <strong>15+ features</strong> in Kotlin &amp; Java, consistently hitting sprint targets.',
      'Managed the full Google Play release lifecycle — versioning, staged rollouts, production monitoring.',
      'Translated complex insurance business workflows into intuitive mobile UX solutions in close collaboration with stakeholders.',
    ],
  },
  {
    when: '2018 — 2020',
    role: 'Android & Web Developer',
    company: 'Freelance · Multiple Companies',
    location: 'Indonesia',
    points: [
      'Delivered apps end-to-end for clients across <strong>manufacturing, agriculture, and tech</strong>.',
      'Built a full-cycle foundation: requirements, architecture, development, testing, deployment.',
      'Managed freelance client relationships, sharpening self-directed project management and communication skills.',
    ],
  },
  {
    when: '2016 — 2020',
    role: 'B.Eng. Informatics Engineering',
    company: 'Sekolah Tinggi Teknologi Bandung (STTB)',
    location: 'GPA 3.78 / 4.00',
    points: [],
  },
]

// ---------- At a Glance ----------
export const GLANCE: GlanceFact[] = [
  { key: 'Status',      value: 'Open to roles & freelance',  detail: 'Senior mobile / frontend · full-time or contract' },
  { key: 'Based',       value: 'Tangerang, Indonesia',        detail: 'GMT+7 · open to remote & relocation' },
  { key: 'Languages',   value: 'Indonesian · English',        detail: 'Native · Professional working' },
  { key: 'Education',   value: 'B.Eng. Informatics',          detail: 'STTB Bandung · GPA 3.78 / 4.00' },
  { key: 'Focus',       value: 'Performance & systems',       detail: 'Mobile perf engineering · UI/UX design systems' },
  { key: 'Open source', value: 'github.com/aviharez',         detail: 'Contributions & side projects' },
]

// ---------- Contact ----------
export const CONTACT = {
  email:        'elzainsyifa@gmail.com',
  phone:        '+6285172340473',
  phoneDisplay: '+62 851-7234-0473',
  linkedin:     'https://linkedin.com/in/syifa-nurzain',
  github:       'https://github.com/aviharez',
  cvPath:       '/cv/CV_SyifaNurzain_ATS.pdf',
}
