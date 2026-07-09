const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Lahore',
                degree: 'BS Hons, Computer Science',
                detail: "Bachelor's degree in Computer Science from the University of Lahore.",
                year: '10/2018 – 12/2022'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Hatzs Dimensions',
                role: 'Senior Software Engineer',
                url: 'Lahore, Pakistan',
                desc: 'Developing cross-platform mobile apps with React Native and responsive web interfaces with React.js. Integrated Stripe and PayPal for secure payments, implemented AI-assisted workflows using Cursor and OpenAI APIs, and designed event-driven features including notifications, async workflows, and real-time updates.',
                year: '05/2025 – Present',
                location: 'Lahore, Pakistan'
            },
            {
                id: 2,
                title: 'Global Software Consulting',
                role: 'Software Engineer',
                url: 'Lahore, Pakistan',
                desc: 'Developed cross-platform mobile applications using React Native (CLI & Expo) and built modern web applications with React.js, Redux, and Tailwind CSS. Integrated REST APIs, implemented push notifications and real-time updates, and streamlined workflows using AI tools (Cursor, Windsurf).',
                year: '2023 – 02/2025',
                location: 'Lahore, Pakistan'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
