
import { Project, Experience } from './types';

export const DEV_NAME = "Enes Kutay Yarkan";
export const DEV_TITLE = "Software Developer";

export const BIO = `I build accessible, pixel-perfect, and performant web experiences. 
With a strong foundation in modern React and a keen eye for design, I bridge the gap between 
engineering and aesthetics.`;

export const SKILLS = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", 
  "Node.js", "GraphQL", "AWS", "Figma", "Gemini API"
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: "Neon Nexus",
    description: "A cyberpunk-themed dashboard for visualizing real-time crypto market data using WebSocket and D3.js.",
    tags: ["React", "D3.js", "WebSocket", "Tailwind"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: '2',
    title: "Gemini Chat",
    description: "An AI-powered conversational interface leveraging Google's Gemini API for multimodal interactions.",
    tags: ["TypeScript", "Gemini API", "Vite"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop"
  },
  {
    id: '3',
    title: "Minimalist E-comm",
    description: "A headless e-commerce storefront focusing on speed, accessibility, and clean monochrome design.",
    tags: ["Next.js", "Stripe", "Framer Motion"],
    link: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: "Lead Software Engineer",
    company: "Apex Systems",
    period: "2022 - Present",
    description: "Spearheaded the migration of a legacy monolith to a micro-frontend architecture using Next.js and Module Federation. Reduced build times by 60% and improved team velocity. Mentored 4 junior developers and established code quality standards."
  },
  {
    id: '2',
    role: "Senior Frontend Developer",
    company: "TechFlow Solutions",
    period: "2020 - 2022",
    description: "Architected a proprietary design system used across 5 distinct products. Implemented automated visual regression testing, ensuring 99.9% UI consistency across the platform suite."
  },
  {
    id: '3',
    role: "UI/UX Engineer",
    company: "PixelCrafters",
    period: "2018 - 2020",
    description: "Collaborated closely with design teams to build award-winning interactive marketing campaigns for Fortune 500 clients using WebGL and Three.js. Optimized 3D assets for mobile performance."
  },
  {
    id: '4',
    role: "Full Stack Developer",
    company: "StartupGrid",
    period: "2016 - 2018",
    description: "Built and deployed scalable RESTful APIs using Node.js and Express. Integrated Stripe for payments and implemented real-time notifications with Socket.io, driving user engagement up by 25%."
  },
  {
    id: '5',
    role: "Junior Web Developer",
    company: "Digital Agency",
    period: "2015 - 2016",
    description: "Assisted in the development of responsive WordPress themes and Shopify stores. Optimized image assets and refactored CSS to improve Google Lighthouse performance scores."
  }
];

export const PUBLICATIONS = [
  {
    title: "The Future of React Server Components",
    publisher: "Frontend Weekly",
    date: "2023",
    link: "#"
  },
  {
    title: "Optimizing WebGL for Low-End Devices",
    publisher: "Smashing Magazine",
    date: "2022",
    link: "#"
  },
  {
    title: "Accessibility in Modern Single Page Apps",
    publisher: "A11y Project",
    date: "2021",
    link: "#"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  twitter: "https://twitter.com",
  linkedin: "https://linkedin.com",
  email: "mailto:hello@alexdev.com"
};

export const PARTNERS = [
  "Starlight Ventures", "Apex Digital", "Nebula Systems", "Quantum Soft", "Echo Labs", "Vertex Solutions"
];
