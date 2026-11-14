export const PROFILE = {
  name: "Usama Shahzad",
  initials: "US",
  status: "Open to remote roles · Lahore, UTC+5",
  lede:
    "I'm a React Native developer with 3+ years of building and shipping cross-platform apps for iOS and Android. 15+ apps, used by over 500,000 people. I own the codebase end to end, from architecture to App Store release.",
  industries: ["fintech", "e‑commerce", "healthcare", "SaaS", "real estate"],
  footerTag: "React Native Developer · Lahore, Pakistan",
};

export const STATS = [
  { n: "3", suffix: "+", label: "years in production" },
  { n: "15", suffix: "+", label: "apps shipped" },
  { n: "500K", suffix: "+", label: "people using them" },
  { n: "2", suffix: "", label: "stores, iOS and Android" },
];

export const MARQUEE = [
  "React Native", "TypeScript", "Expo EAS", "Redux Toolkit", "Reanimated", "Stripe",
  "Plaid", "RevenueCat", "Firebase", "Twilio", "OpenAI API", "GraphQL",
];

export const PHONE_TOASTS = [
  ["Payment received", "Stripe · just now"],
  ["Bank linked", "Plaid · verified"],
  ["SOL transfer confirmed", "Phantom · on‑chain"],
  ["Subscription renewed", "RevenueCat"],
  ["Push delivered", "FCM · 1.2k devices"],
];

// size: "wide" (featured, full row with mock screens) or "sm" (one third)
export const PROJECTS = [
  {
    size: "wide",
    name: "BreezyPay",
    subtitle: "Payments for short‑term rental cleaning",
    logo: "/projects/breezy.png",
    initials: "Bz",
    tags: ["Fintech", "Blockchain"],
    desc: "Connects STR hosts with verified cleaners. Every job, from booking to payment, is recorded on the blockchain, with real‑time tracking and dispute resolution.",
    points: [
      "Built the wallet system for crypto and fiat transactions, deposits and withdrawals",
      "Integrated Stripe and PayPal for user payouts and withdrawal requests",
      "Plaid for bank account linking and QuickBooks for accounting sync",
      "Phantom Wallet (Solana) via deeplinks: wallet connect, transaction signing, on‑chain balances",
      "Real‑time balance updates and transaction alert push notifications",
    ],
    stack: "React Native · Redux Toolkit · Stripe · PayPal · Plaid · QuickBooks · Phantom (Solana) · web3",
    links: [
      ["App Store", "https://apps.apple.com/us/app/breezypay/id6756295387"],
      ["Google Play", "https://play.google.com/store/apps/details?id=net.breezypay.app"],
      ["Website", "https://www.breezypay.net/"],
    ],
  },
  {
    size: "wide",
    name: "Befer",
    subtitle: "CRM for service‑based businesses",
    logo: "/projects/Befer.png",
    initials: "Bf",
    tags: ["B2B SaaS", "AI", "Mobile + Web"],
    desc: "Lets business owners run every part of their service operations from anywhere: customers, jobs, payments and reports.",
    points: [
      "Customer management, job tracking and reporting on mobile and web",
      "In‑app subscriptions with RevenueCat, payments with Stripe",
      "Mapbox and Google Maps for job locations, Sentry for crash tracking",
      "OpenAI‑based automation and smart notifications to cut manual work",
    ],
    stack: "React Native · Zustand · Stripe · RevenueCat · MMKV · Mapbox · Sentry · Revopush · React JS · Ant Design · Tailwind",
    links: [
      ["App Store", "https://apps.apple.com/sa/app/befer/id6743770580"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.befer"],
      ["Web app", "https://app.befer.co/"],
    ],
  },
  {
    size: "sm",
    name: "uDress",
    subtitle: "Fashion marketplace",
    logo: "/projects/udress.ico",
    initials: "uD",
    tags: ["E‑commerce"],
    desc: "Find a dress for a special occasion, easier and more affordable. Search, filters, checkout and buyer‑seller chat.",
    stack: "React Native · GraphQL · Redux Toolkit · Stripe · Reanimated",
    links: [
      ["App Store", "https://apps.apple.com/us/app/udress/id1485435709"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.app.udress"],
    ],
  },
  {
    size: "sm",
    name: "Etihad Town",
    subtitle: "Community management",
    logo: "/projects/etihad.webp",
    initials: "ET",
    tags: ["Real estate"],
    desc: "Resident app for a housing society: property listings, announcements, maintenance requests and file upload/download.",
    stack: "React Native · GraphQL · REST · Redux Toolkit · Push",
    links: [
      ["App Store", "https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920"],
      ["Google Play", "https://play.google.com/store/apps/details?id=com.etihadtown.app"],
    ],
  },
  {
    size: "sm",
    name: "Live Urdu News",
    subtitle: "News aggregator",
    logo: "/projects/urdunews.webp",
    initials: "UN",
    tags: ["Media"],
    desc: "Collects news from leading Pakistani and international sources into one easy‑to‑read feed, with video and live streaming.",
    stack: "React Native · GraphQL · REST · Redux Toolkit · Video · Live streaming",
    links: [["App Store", "https://apps.apple.com/us/app/live-urdu-news/id1565184003"]],
  },
  {
    size: "sm",
    name: "Life Design",
    subtitle: "Goal‑setting app",
    logo: "/projects/lifeDesign.png",
    initials: "LD",
    tags: ["Lifestyle"],
    desc: "Helps people set, track and reach their life goals, with daily motivation built in.",
    stack: "React Native · Node.js · Strapi · REST · Redux Toolkit",
    links: [["App Store", "https://apps.apple.com/us/app/life-design/id6477827161"]],
  },
  {
    size: "sm",
    name: "Company Needs",
    subtitle: "Office supplies store",
    logo: "/projects/companyneeds.png",
    initials: "CN",
    tags: ["E‑commerce"],
    desc: "Shopping app for office products and workspace solutions, with Stripe checkout.",
    stack: "React Native · GraphQL · REST · Redux Toolkit · Stripe",
    links: [["Google Play", "https://play.google.com/store/apps/details?id=com.companyneeds.app"]],
  },
  {
    size: "sm",
    name: "Global Residentia",
    subtitle: "Property app",
    logo: "/projects/appLogo.png",
    initials: "GR",
    tags: ["Real estate"],
    desc: "App for a Pakistani real estate company offering residential properties in prime locations.",
    stack: "React Native · GraphQL · REST · Strapi",
    links: [],
  },
];

export const SKILL_GROUPS = [
  { title: "Mobile", items: ["React Native CLI", "Expo", "React Navigation", "Redux Toolkit", "Zustand", "Reanimated", "iOS", "Android"] },
  { title: "Payments", items: ["Stripe", "PayPal", "RevenueCat", "Plaid", "QuickBooks", "Phantom Wallet"] },
  { title: "APIs & AI", items: ["REST", "GraphQL", "JWT / OAuth", "OpenAI API", "Firebase"] },
  { title: "Real‑time", items: ["Twilio SMS, Voice, Video", "FCM", "OneSignal", "WebSockets"] },
  { title: "Performance & storage", items: ["Flipper", "Hermes", "FlatList tuning", "MMKV", "Keychain / Keystore", "Offline data"] },
  { title: "Release & web", items: ["Expo EAS", "TestFlight", "CI/CD", "React.js", "Next.js", "Tailwind", "Node.js"] },
];

export const JOBS = [
  {
    current: true,
    when: "May 2025 – Present",
    company: "Hatzs Dimensions",
    location: "Lahore, Pakistan",
    role: "Senior Software Engineer (React Native Lead)",
    points: [
      "Lead design, development and maintenance of cross‑platform apps in React Native (CLI and Expo)",
      "Build clean, reusable components focused on scalability and maintainability",
      "Integrate REST APIs, auth flows and SDKs including Stripe, PayPal, Twilio and Firebase",
      "Debug and profile crashes, memory issues and slow screens",
      "Own App Store and Google Play releases, build configs and CI/CD with Expo EAS and TestFlight",
    ],
  },
  {
    when: "Jan 2023 – Feb 2025",
    company: "Global Software Consulting",
    location: "Lahore, Pakistan",
    role: "Software Engineer (React Native)",
    points: [
      "Shipped production React Native apps across fintech, e‑commerce, healthcare and booking",
      "Integrated REST APIs, authentication, payment gateways and analytics SDKs",
      "Built push notifications, secure storage and real‑time features with Firebase and WebSockets",
      "Fixed crashes and rendering bottlenecks through systematic profiling",
      "Built responsive web apps with React.js, Redux and Tailwind CSS",
    ],
  },
];

export const EDUCATION = {
  degree: "BS (Hons) Computer Science",
  school: "University of Lahore · Oct 2018 – Dec 2022",
};

export const CERTS = [
  ["Meta React Native Specialization", "Fundamentals, navigation, performance and deployment"],
  ["Programming with JavaScript", "ES6+, functions, control flow, arrays and objects"],
  ["Introduction to Mobile Development", "Mobile UI/UX basics and cross‑platform tools"],
];

export const CONTACT_ITEMS = [
  { label: "Email", value: "usamashahzad535@gmail.com", copy: "usamashahzad535@gmail.com" },
  { label: "Phone / WhatsApp", value: "+92 305 614 8610", copy: "+923056148610" },
  { label: "LinkedIn", value: "usama-shahzad-737969261", href: "https://www.linkedin.com/in/usama-shahzad-737969261" },
  { label: "GitHub", value: "Usama12167", href: "https://github.com/Usama12167" },
];

// ---- SEO ----
// Set NEXT_PUBLIC_SITE_URL (e.g. https://usamashahzad.dev) in your hosting env so
// canonical, Open Graph and sitemap URLs are absolute. No trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

export const SEO = {
  title: "Usama Shahzad · React Native Developer for iOS & Android",
  description:
    "React Native developer with 3+ years building and shipping cross-platform iOS and Android apps. 15+ apps, 500K+ users across fintech, SaaS, e-commerce and real estate. Open to remote roles.",
  keywords: [
    "Usama Shahzad", "React Native developer", "React Native lead", "mobile app developer",
    "iOS developer", "Android developer", "Expo", "TypeScript", "fintech app developer",
    "Stripe integration", "Plaid", "RevenueCat", "freelance React Native", "remote React Native developer",
    "Lahore", "Pakistan",
  ],
  ogImage: "/og-image.png",
  ogImageAlt: "Usama Shahzad, React Native apps for iOS and Android",
  locale: "en_US",
  sameAs: ["https://www.linkedin.com/in/usama-shahzad-737969261", "https://github.com/Usama12167"],
};

// ---- Scroll showcase ----
// The phone assembles from parts, then switches between these apps as you scroll.
// glow: colour of the pedestal ring for that app. specs: [big value, small label].
export const SHOWCASE_STEPS = [
  "Native shell for iOS and Android",
  "UI, built piece by piece",
  "Payments, data and push",
  "Shipped. Pick an app",
];

export const SHOWCASE = [
  {
    key: "breezy", name: "BreezyPay", subtitle: "Payments for short‑term rental cleaning",
    logo: "/projects/breezy.png", initials: "Bz", glow: "#3DD9EB",
    specs: [["Stripe", "payouts & withdrawals"], ["Plaid", "bank account linking"], ["Solana", "Phantom wallet signing"], ["Live", "balance push alerts"]],
  },
  {
    key: "befer", name: "Befer", subtitle: "CRM for service‑based businesses",
    logo: "/projects/Befer.png", initials: "Bf", glow: "#8B7CFF",
    specs: [["RevenueCat", "in‑app subscriptions"], ["Mapbox", "job locations"], ["OpenAI", "smart automation"], ["Web + App", "React Native & React"]],
  },
  {
    key: "udress", name: "uDress", subtitle: "Fashion marketplace",
    logo: "/projects/udress.ico", initials: "uD", glow: "#FF7AB6",
    specs: [["GraphQL", "catalog & filters"], ["Stripe", "checkout"], ["Chat", "buyer ↔ seller"], ["Reanimated", "smooth motion"]],
  },
  {
    key: "etihad", name: "Etihad Town", subtitle: "Community management",
    logo: "/projects/etihad.webp", initials: "ET", glow: "#FFB547",
    specs: [["Push", "announcements"], ["Requests", "maintenance tickets"], ["Files", "upload & download"], ["GraphQL", "+ REST APIs"]],
  },
];
