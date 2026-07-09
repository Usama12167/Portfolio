const portfolio = [
  {
    id: 0,
    projectName: "BreezyPay – Digital Wallet & Crypto App",
    url: "https://play.google.com/store/apps/details?id=net.breezypay.app",
    image: "projects/breezy.png",
    projectDetail:
      "A revolutionary fintech platform connecting STR hosts with verified cleaning professionals. Features a secure digital wallet supporting transactions, deposits, and withdrawals with blockchain transparency. Integrated Stripe and PayPal for secure payments with real-time updates and push notifications.",
    technologiesUsed: [
      { tech: "React Native" },
      { tech: "Redux Toolkit" },
      { tech: "Stripe" },
      { tech: "PayPal" },
      { tech: "Push Notifications" },
      { tech: "Web3 / Blockchain" },
      { tech: "REST API" },
    ],
  },
  {
    id: 1,
    projectName: "uDress – Fashion E-Commerce App",
    url: "https://play.google.com/store/apps/details?id=com.app.udress",
    image: "projects/udress.ico",
    projectDetail:
      "A mobile fashion marketplace with search, filtering, and product listings. Implemented real-time chat between users and enhanced UI/UX with Reanimated animations for a polished, high-performance shopping experience.",
    technologiesUsed: [
      { tech: "React Native" },
      { tech: "Reanimated" },
      { tech: "Redux" },
      { tech: "REST API" },
      { tech: "Real-time Chat" },
    ],
  },
  {
    id: 2,
    projectName: "Etihad Town – Real Estate & Community App",
    url: "https://play.google.com/store/apps/details?id=com.etihadtown.app",
    image: "projects/etihad.webp",
    projectDetail:
      "A mobile application for property and community management. Developed modules for listings, announcements, and services. Implemented push notifications and dynamic user features for a seamless resident experience.",
    technologiesUsed: [
      { tech: "React Native" },
      { tech: "REST API" },
      { tech: "Push Notifications" },
      { tech: "Redux Toolkit" },
      { tech: "File Upload/Download" },
    ],
  },
  {
    id: 3,
    projectName: "Befer – AI-Powered CRM (Android)",
    url: "https://play.google.com/store/apps/details?id=com.befer",
    image: "projects/Befer.png",
    projectDetail:
      "An AI-powered CRM built for blue-collar business growth. Contributed to mobile CRM development for workflow automation, built features for customer management and tracking, and improved operational workflows with integrated payments and mapping.",
    technologiesUsed: [
      { tech: "React Native" },
      { tech: "Zustand" },
      { tech: "Stripe" },
      { tech: "RevenueCat" },
      { tech: "Mapbox" },
      { tech: "Sentry.io" },
      { tech: "RevoPush" },
    ],
  },
  {
    id: 4,
    projectName: "Befer – AI-Powered CRM (iOS)",
    url: "https://apps.apple.com/sa/app/befer/id6743770580",
    image: "projects/Befer.png",
    projectDetail:
      "An AI-powered CRM built for blue-collar business growth. Contributed to mobile CRM development for workflow automation, built features for customer management and tracking, and improved operational workflows with integrated payments and mapping.",
    technologiesUsed: [
      { tech: "React Native" },
      { tech: "Zustand" },
      { tech: "Stripe" },
      { tech: "RevenueCat" },
      { tech: "Mapbox" },
      { tech: "Sentry.io" },
      { tech: "RevoPush" },
    ],
  },
  {
    id: 5,
    projectName: "Befer – Web App",
    url: "https://app.befer.co/",
    image: "projects/Befer.png",
    projectDetail:
      "The web companion to the Befer CRM platform. Built with React.js, Tailwind CSS, and Ant Design, featuring Google Maps integration, Stripe payments, and Zustand for state management.",
    technologiesUsed: [
      { tech: "React.js" },
      { tech: "Tailwind CSS" },
      { tech: "Ant Design" },
      { tech: "Zustand" },
      { tech: "Stripe" },
      { tech: "Google Maps" },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(portfolio);
}
