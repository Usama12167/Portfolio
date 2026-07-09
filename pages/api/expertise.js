const expertise = [
  {
    id: 0,
    title: "React Native Development",
    desc: "Building scalable, high-performance cross-platform mobile applications using React Native (CLI & Expo). Proficient in React Navigation, Reanimated animations, Redux state management, and delivering production-ready apps to the Apple App Store and Google Play Store.",
  },
  {
    id: 1,
    title: "React.js & Next.js",
    desc: "Developing modern, responsive web interfaces with React.js and Next.js, focused on scalability and maintainability. Skilled in Redux, Context API, Tailwind CSS, and integrating REST APIs for dynamic, data-driven web applications.",
  },
  {
    id: 2,
    title: "Payment & Third-Party Integrations",
    desc: "Extensive experience integrating Stripe and PayPal for secure, seamless payment flows. Also skilled with RevenueCat (in-app purchases), Mapbox, push notifications, and other third-party SDKs that enhance app functionality.",
  },
  {
    id: 3,
    title: "Performance Optimization",
    desc: "Identifying and resolving performance bottlenecks in mobile and web applications. Applying lazy loading, memoization, efficient state management, and debugging techniques to deliver smooth, reliable user experiences.",
  },
  {
    id: 4,
    title: "AI-Assisted Development",
    desc: "Integrating AI-assisted workflows using tools like Cursor and OpenAI APIs to accelerate development efficiency. Experienced in building event-driven features including real-time updates, async workflows, and intelligent notifications.",
  },
  {
    id: 5,
    title: "Agile & Team Collaboration",
    desc: "Strong background working in Agile/Scrum environments with sprint planning, daily stand-ups, and retrospectives. Experienced collaborating with cross-functional teams, using GitHub for version control, and documenting features for clear product delivery.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
