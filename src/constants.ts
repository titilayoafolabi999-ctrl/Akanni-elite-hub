export const GITHUB_URL = "https://github.com/titilayoafolabi999-ctrl";
export const NAME = "Akanni Shonibare";
export const SITE_NAME = "Akanni's Elite Hub";
export const EMAIL = "shonibareakanni09@gmail.com";
export const PHONE = "+234 708 436 2145";
export const LOCATION = "Lagos, Nigeria";
export const CV_URL = "#";
export const ADMIN_PASSWORD = "AkanniElite2026!";
export const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";
export const GOOGLE_SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || "";
export const GOOGLE_SHEET_NAME = import.meta.env.VITE_GOOGLE_SHEET_NAME || "Sheet1";

export const SUMMARY = "As an Elite Digital Technologist, I specialize in architecting high-performance AI systems and modern web experiences that drive business growth. With a deep background in cybersecurity and data science, I ensure every project is not only visually stunning but also robust, secure, and data-driven. My mission is to help forward-thinking clients transform complex ideas into scalable, elite digital solutions.";

export const PORTFOLIO_URLS = [
  "https://akannishonibare.vercel.app/",
  "https://akannishonibare.netlify.app/"
];

export const PROJECTS = [
  {
    id: 1,
    title: "Quiz Mark Proxy",
    description: "A sophisticated web platform integrating AI for advanced quiz management and proxy services.",
    tech: ["React", "AI Integration", "Vercel", "Tailwind CSS"],
    link: "https://quiz-mark-proxy.vercel.app/",
    category: "AI Projects",
    image: "/assets/project-quiz-mark-proxy.jpg",
    problem: "Educators and students needed a more streamlined way to manage and validate quiz results while preventing common forms of academic dishonesty in a remote environment.",
    solution: "Developed an AI-powered proxy system that uses real-time monitoring and pattern recognition to ensure the integrity of quiz submissions, while providing a seamless UI for both teachers and students.",
    features: ["Real-time AI monitoring", "Automated grading system", "Secure proxy architecture", "Advanced analytics dashboard"]
  },
  {
    id: 2,
    title: "Decentralized AI Validator",
    description: "A cutting-edge decentralized system for validating AI models and ensuring data integrity.",
    tech: ["Blockchain", "AI", "Decentralized Systems", "Solidity"],
    link: "https://decentralized-ai-validator-dav.vercel.app/",
    category: "AI Projects",
    image: "/assets/project-validator.jpg",
    problem: "AI models are often 'black boxes' with no verifiable way to ensure they haven't been tampered with or that the data they were trained on is high quality.",
    solution: "Built a decentralized validation layer using blockchain technology to create an immutable audit trail for AI model performance and training data verification.",
    features: ["Immutable audit logs", "Consensus-based validation", "Smart contract integration", "Model performance tracking"]
  },
  {
    id: 3,
    title: "GiftAxisLabs-MD",
    description: "An advanced automation project focused on laboratory management and data processing workflows.",
    tech: ["Automation", "Node.js", "GitHub", "Express"],
    link: "https://github.com/titilayoafolabi999-ctrl/GiftAxisLabs-MD",
    category: "Web Design Projects",
    image: "/assets/project-automation-lab.jpg",
    problem: "Laboratory workflows were heavily manual, leading to data entry errors and slow processing times for critical research data.",
    solution: "Created a robust automation framework that handles data ingestion, processing, and reporting automatically, reducing manual labor by 70%.",
    features: ["Automated data ingestion", "Custom workflow engine", "Real-time reporting", "Secure data storage"]
  },
  {
    id: 4,
    title: "Telegram Bot System",
    description: "A robust and scalable Telegram bot architecture for automated interactions and services.",
    tech: ["Python", "Telegram API", "Automation", "Redis"],
    link: "https://github.com/titilayoafolabi999-ctrl/Telegram_bot",
    category: "AI Projects",
    image: "/assets/project-telegram-bot.jpg",
    problem: "Businesses needed a way to provide 24/7 customer support and automated services without the high cost of a dedicated support team.",
    solution: "Designed a scalable bot system using the Telegram API that handles complex user queries and automates common business tasks through a conversational interface.",
    features: ["Natural Language Processing", "Automated ticketing system", "Multi-user support", "Real-time notifications"]
  },
  {
    id: 5,
    title: "Omni AI V2",
    description: "Advanced AI-powered platform for multi-modal interactions and task automation.",
    tech: ["React", "Tailwind", "Gemini API", "Firebase"],
    link: "https://omni-ai-v2.vercel.app/",
    category: "AI Projects",
    image: "/assets/project-omni-ai.jpg",
    problem: "Users were struggling to manage multiple AI tools for different tasks (text, image, code), leading to a fragmented workflow.",
    solution: "Unified the AI experience into a single, high-performance platform that leverages the Gemini API for multi-modal task completion and automation.",
    features: ["Multi-modal AI chat", "Image generation & analysis", "Code automation", "Context-aware task management"]
  },
  {
    id: 6,
    title: "Elite AI Cinematic Studio",
    description: "A high-end platform for generating production-quality AI animations and cinematic video content.",
    tech: ["Stable Diffusion", "Runway Gen-2", "Pika Labs", "After Effects"],
    link: "https://github.com/titilayoafolabi999-ctrl",
    category: "AI Projects",
    image: "/assets/project-cinematic-studio.jpg",
    problem: "Traditional video production is expensive and time-consuming, making high-quality cinematic content inaccessible for many creators.",
    solution: "Leveraged advanced video-to-video and text-to-video AI models to create a streamlined pipeline for cinematic storytelling and commercial animation.",
    features: ["Text-to-Video Synthesis", "AI Character Consistency", "Neural Style Transfer", "Lip-Sync & Voice Cloning"]
  }
];

export const SERVICES = [
  {
    title: "Website Design",
    description: "Stunning landing pages, portfolios, and business sites that convert.",
    features: ["Custom UI/UX", "Responsive Design", "SEO Optimization", "Performance Focused"],
    price: "Starting at $499",
    delivery: "5-7 Days",
    package: "Starter"
  },
  {
    title: "Full Website Development",
    description: "End-to-end frontend and backend solutions for complex applications.",
    features: ["React/Next.js", "Database Integration", "API Development", "Secure Auth"],
    price: "Starting at $1,499",
    delivery: "14-21 Days",
    package: "Professional"
  },
  {
    title: "AI Automation Tools",
    description: "Custom AI agents and automation workflows to scale your business.",
    features: ["LLM Integration", "Workflow Automation", "Data Processing", "Custom AI Models"],
    price: "Starting at $999",
    delivery: "10-14 Days",
    package: "Professional"
  },
  {
    title: "Cybersecurity Consulting",
    description: "Security audits and defensive strategy implementation for digital assets.",
    features: ["Vulnerability Assessment", "Security Hardening", "Best Practices", "Incident Response"],
    price: "Custom Quote",
    delivery: "Ongoing",
    package: "Enterprise"
  },
  {
    title: "AI Animation Videos",
    description: "High-end AI-generated animations for marketing and storytelling.",
    features: ["Stable Diffusion", "Video-to-Video", "Custom Styles", "4K Rendering"],
    price: "Starting at $299",
    delivery: "3-5 Days",
    package: "Starter"
  },
  {
    title: "Graphic Design",
    description: "Premium visual identity and brand assets for modern tech companies.",
    features: ["Logo Design", "Brand Guidelines", "Social Media Kits", "Marketing Assets"],
    price: "Starting at $199",
    delivery: "2-4 Days",
    package: "Starter"
  },
  {
    title: "Website Auditing",
    description: "Comprehensive performance, security, and SEO audits for existing websites.",
    features: ["Lighthouse Analysis", "Security Vulnerability Scan", "SEO Optimization Report", "Performance Tuning"],
    price: "Starting at $149",
    delivery: "2-3 Days",
    package: "Starter"
  }
];

export const SKILLS = [
  {
    category: "Website Design & Development",
    items: [
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 77 },
      { name: "JavaScript", level: 89 },
      { name: "React / Next.js", level: 95 },
      { name: "UI/UX Design", level: 92 },
      { name: "Html Svg mastery", level: 81 },
      { name: "Cloud Architecture", level: 88 },
      { name: "API Orchestration", level: 90 }
    ]
  },
  {
    category: "AI & Machine Learning",
    items: [
      { name: "LLM Integration", level: 94 },
      { name: "Python / Data Science", level: 88 },
      { name: "AI Prompt Engineering", level: 96 },
      { name: "Vector Databases", level: 85 }
    ]
  },
  {
    category: "Cybersecurity",
    items: [
      { name: "Ethical Hacking", level: 80 },
      { name: "Network Security", level: 82 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Defensive Labs", level: 88 }
    ]
  },
  {
    category: "Design & Animation",
    items: [
      { name: "Figma", level: 95 },
      { name: "Text-to-Video Synthesis", level: 92 },
      { name: "AI Character Consistency", level: 88 },
      { name: "Neural Style Transfer", level: 85 },
      { name: "AI Animation (SD/Runway)", level: 90 },
      { name: "Motion Graphics", level: 88 },
      { name: "SVG Mastery", level: 81 }
    ]
  }
];

export const RESUME_DATA = {
  education: [
    {
      school: "Self-Taught Developer & Digital Creator",
      degree: "Practical Skill Development",
      period: "Continuous",
      description: "Learning through platforms like Kaggle, YouTube, and official documentation with a focus on real-world projects."
    }
  ],
  experience: [
    {
      company: "Freelance / Independent Creator",
      role: "Digital Technologist",
      period: "Present",
      description: "Executing website design, AI experimentation, and creative projects for various clients and personal growth."
    }
  ],
  achievements: [
    "Built multiple personal and experimental tech projects",
    "Actively learning across AI, cybersecurity, and web development domains",
    "Strong focus on self-driven learning and practical application"
  ],
  interests: ["Artificial Intelligence", "Cybersecurity", "Web Design", "Animation", "Data Science"]
};

export const FAQS = [
  {
    question: "What services do you provide?",
    answer: "I offer a wide range of digital services including premium website design, full-stack web development, AI automation tools, cybersecurity consulting, AI-generated animation videos, and professional graphic design."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A standard landing page usually takes 5-7 days, while full-stack applications or complex AI integrations can take 2-4 weeks. I always provide a clear timeline before starting."
  },
  {
    question: "Can you integrate AI into my existing website?",
    answer: "Yes! I specialize in integrating AI capabilities like chatbots, automated content generation, and data processing into existing platforms to enhance user experience and operational efficiency."
  },
  {
    question: "How do you ensure the security of the websites you build?",
    answer: "Security is a priority. I implement best practices such as secure authentication, data encryption, and regular vulnerability assessments. My background in cybersecurity helps me build defensive layers into every project."
  },
  {
    question: "What is your pricing model?",
    answer: "I offer both fixed-price packages for standard services and custom quotes for more complex, tailored projects. You can find starting prices in the Services section, or contact me for a specific quote."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide maintenance and support packages to ensure your website or AI tool continues to run smoothly and stays updated with the latest security patches and features."
  }
];
