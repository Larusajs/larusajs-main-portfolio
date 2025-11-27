
import { Project, Experience } from './types';

export const DEV_NAME = "Enes Kutay Yarkan";
export const DEV_TITLE = "AI & Backend Developer";

export const BIO = `AI & Backend Developer experienced in building automation-focused systems using Python, JavaScript, Go. Founder of multiple AI-driven products, with a track record of delivering efficient, scalable solutions for companies across various sectors.`;

export const SKILLS = [
  "Python", "JavaScript", "TypeScript", "Go", "SQL", "Bash",
  "Node.js", "Next.js", "FastAPI", "Express.js",
  "PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase",
  "Qdrant", "FAISS", "Docker", "Kubernetes",
  "AWS", "Google Cloud", "Vercel",
  "TailwindCSS", "React", "Vite",
  "WebSockets", "REST APIs", "JWT", "LLMs"
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "AI HR Data Validation System",
    description: "AI-powered HR data validation and cleaning system for Rönesans Holding using Python, FastAPI and PostgreSQL, with RAG knowledge system for company-wide access.",
    tags: ["Python", "FastAPI", "PostgreSQL", "RAG", "AI"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: '2',
    title: "E-commerce Analytics AI Pipeline",
    description: "Real-time AI-powered analytics pipeline that processes customer data, identifies trending products, detects gaps and generates recommendations to increase conversion.",
    tags: ["Python", "AI", "Analytics", "Real-time"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: '3',
    title: "AI Legal Chatbot System",
    description: "AI-powered legal chatbots using vector databases (Qdrant, FAISS) for semantic search, improving document retrieval speed and reducing manual legal review time.",
    tags: ["Python", "FastAPI", "Qdrant", "FAISS", "AI"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
  },
  {
    id: '4',
    title: "NFT Creation Platform",
    description: "Interactive NFT creation platform with Web3 wallet connectivity, real-time fractal art generation, and Discord automation for NFT drops and community management.",
    tags: ["JavaScript", "Web3", "NFT", "Discord", "Node.js"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: '5',
    title: "Cinematic AI Platform",
    description: "AI-supported production workflows for TV/film operations, accelerating content development and strengthening communication between creative teams and AI engineering.",
    tags: ["Python", "AI", "Video Generation", "Production"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2670&auto=format&fit=crop"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: "Software Developer",
    company: "Hagia Labs",
    period: "Jan 2024 - Present",
    description: "Developed AI-powered HR data validation systems for Rönesans Holding using Python, FastAPI and PostgreSQL. Built e-commerce analytics pipelines with real-time AI recommendations. Centralized operational data into unified databases and designed AI-supported production workflows for TV/film operations. Developed AI chatbots for enterprise businesses, improving customer satisfaction and reducing support response time."
  },
  {
    id: '2',
    role: "Software Developer",
    company: "Shortimize",
    period: "Jul 2025 - Sep 2025",
    description: "Accelerated dashboard loading times by integrating Redis caching and improving data-fetch strategies. Collaborated with UX designer to refine UI/UX components. Resolved critical bugs across authentication, organization management and data-fetching layers, increasing system stability."
  },
  {
    id: '3',
    role: "Junior Software Engineer",
    company: "Bronix Engineering",
    period: "Apr 2023 - Jan 2024",
    description: "Introduced vector database technologies (Qdrant, Weaviate, FAISS) into company's AI stack. Developed AI-powered legal chatbots using Python and FastAPI. Optimized production databases reducing high-traffic query latency by up to 40%. Led modernization efforts by migrating legacy services to containerized architectures using Docker."
  },
  {
    id: '4',
    role: "Junior Software Engineer",
    company: "CarpetDiem",
    period: "Jan 2023 - Mar 2023",
    description: "Developed interactive NFT creation platform using JavaScript and Web3 technologies. Built real-time fractal art generation systems. Implemented advanced user management and whitelist system for NFT collectors. Delivered fully integrated website with Web3 wallet connectivity. Built Discord automation and moderation tools using Node.js and OpenAI APIs."
  },
  {
    id: '5',
    role: "Junior Backend Developer",
    company: "Hagia Labs",
    period: "Jan 2023 - Mar 2023",
    description: "Developed full-stack web applications using JavaScript, Python and modern frameworks. Built secure cryptocurrency payment integrations using blockchain APIs. Improved system scalability by deploying backend services with AWS (EC2, S3, Lambda) and optimizing cloud resource usage."
  }
];

export const PUBLICATIONS = [
  {
    title: "Fine-Tuning Open Video Generators for Cinematic Scene Synthesis: A Small-Data Pipeline with LoRA and Wan2.1 I2V",
    publisher: "Research Paper",
    date: "2025",
    link: "https://arxiv.org/abs/2510.27364"
  },
  {
    title: "RAG-Driven Data Quality Governance for Enterprise ERP Systems",
    publisher: "Research Paper",
    date: "2025",
    link: "https://arxiv.org/abs/2511.16700"
  },
  {
    title: "Shotlist Studio: A Modular AI Platform For Cinematic Story Generation And Visualization",
    publisher: "Research Paper",
    date: "2025",
    link: "https://www.researchgate.net/publication/397818225_Shotlist_Studio_A_Modular_AI_Platform_For_Cinematic_Story_Generation_And_Visualization"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/larusajs",
  twitter: "https://x.com/larusajs",
  linkedin: "https://linkedin.com/in/eneskyarkan",
  email: "mailto:eneskyarkan@gmail.com"
};

export const PARTNERS = [
  "Hagia Labs", "Bronix Engineering", "Shortimize"
];
