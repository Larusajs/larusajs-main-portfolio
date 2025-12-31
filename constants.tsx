
import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, Layers, Briefcase, Zap, Globe, Cpu, Terminal, Database, Code, Search } from 'lucide-react';
import { Project, Experience, SocialLink, Publication } from './types';

export const PERSONAL_INFO = {
  name: "Enes Kutay Yarkan",
  role: "AI & Backend Developer",
  location: "Singapore",
  currentCompany: "Hagia Labs",
  email: "enes@srreal.co",
  availability: true,
  summary: "Experienced in building automation-focused systems using Python, JavaScript, Go. Founder of multiple AI-driven products with a track record of delivering efficient, scalable solutions.",
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    name: "Shotlist Studio",
    description: "Modular AI platform for cinematic story generation and visualization.",
    tags: ["AI", "Generative Media", "Python"],
    icon: "Layers",
  },
  {
    id: "2",
    name: "Hagia AI Chatbots",
    description: "Automated conversational systems for local and enterprise businesses.",
    tags: ["LLMs", "NLP", "FastAPI"],
    icon: "Zap",
  },
  {
    id: "3",
    name: "RAG Knowledge System",
    description: "AI powered HR data validation and cleaning system for Rönesans Holding.",
    tags: ["RAG", "Python", "PostgreSQL"],
    icon: "Database",
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e0",
    company: "Srreal Studio",
    role: "Co-Founder",
    location: "Wyoming, US",
    period: "Mar 2025 — Present",
    description: "Building web, mobile, AI, and desktop applications with a focus on rapid delivery. Guarantee 2-week maximum turnaround while maintaining high quality standards and streamlined development processes.",
    icon: "Layers"
  },
  {
    id: "e1",
    company: "Hagia Labs",
    role: "Software Developer",
    location: "Singapore",
    period: "Jan 2024 — Present",
    description: "Developing AI-powered HR systems, RAG knowledge bases, and e-commerce analytics pipelines with Python and FastAPI.",
    icon: "Briefcase"
  },
  {
    id: "e2",
    company: "Shortimize",
    role: "Software Developer",
    location: "Delaware, US",
    period: "July 2025 — Sep 2025",
    description: "Integrated Redis caching and refined UI/UX components to significantly accelerate dashboard performance.",
    icon: "Code"
  },
  {
    id: "e3",
    company: "Bronix Engineering",
    role: "Junior Software Engineer",
    location: "Ankara, TR",
    period: "Apr 2023 — Jan 2024",
    description: "Introduced vector databases (Qdrant, FAISS) and redesigned critical API endpoints in Go and Node.js.",
    icon: "Terminal"
  },
  {
    id: "e4",
    company: "CarpetDiem",
    role: "Junior Software Engineer",
    location: "Dubai, UAE",
    period: "Jan 2023 — Mar 2023",
    description: "Built interactive NFT creation platforms and real-time fractal art generation systems using JavaScript.",
    icon: "Briefcase"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Fine-Tuning Open Video Generators for Cinematic Scene Synthesis",
    link: "#"
  },
  {
    id: "p2",
    title: "RAG-Driven Data Quality Governance for Enterprise ERP Systems",
    link: "#"
  },
  {
    id: "p3",
    title: "Shotlist Studio: A Modular AI Platform For Cinematic Story Generation",
    link: "#"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "#", icon: <Github size={18} /> },
  { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
  { platform: "X", url: "#", icon: <Twitter size={18} /> },
];

export const AVAILABILITY = {
  slotsAvailable: 2,
  slotsTotal: 5,
};
