const expertise = [
  {
    id: 0,
    title: "React Native Mobile App Developer",
    desc: "I am a skilled Mobile App Developer During my career, I have successfully developed and optimized cross-platform apps, integrating third-party APIs, state management solutions (Redux, Context API), and backend services. My expertise in React Native, TypeScript, and mobile UI/UX principles allows me to craft user-friendly, scalable, and efficient applications.",
  },
  {
    id: 1,
    title: "Scrum and Jira",
    desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
  },
  {
    id: 2,
    title: "Converting Figma designs",
    desc: "I specialize in converting Figma designs into fully functional React Native applications. Through hackathons and freelance projects, I have gained hands-on experience in transforming UI/UX concepts into responsive and user-friendly mobile interfaces. My passion for design and development allows me to continuously refine my creative and technical skills in building seamless digital experiences.",
  },
  {
    id: 3,
    title: "Github Hub",
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
