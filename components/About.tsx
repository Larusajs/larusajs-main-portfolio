import React from 'react';
import { motion } from 'framer-motion';
import { SketchyBadge } from './ui/SketchyComponents';

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["Python", "Go", "JavaScript", "TypeScript", "SQL", "Bash"]
  },
  {
    title: "AI & Data",
    skills: ["RAG Systems", "Vector DBs (Qdrant/Weaviate)", "LLMs", "FastAPI", "Pandas", "OpenCV"]
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "PostgreSQL", "Redis"]
  },
  {
    title: "Web & Tools",
    skills: ["React", "Next.js", "Node.js", "Stripe", "GitHub Actions", "Terraform"]
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50 border-y-2 border-ink">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Bio Section */}
        <div className="w-full md:w-1/2 font-hand">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
             <div className="relative inline-block">
                <div className="absolute inset-0 bg-accent/30 transform translate-x-2 translate-y-2 border-2 border-ink rounded-sm w-full h-full"></div>
                <img 
                  src="about.jpg" 
                  alt="Enes Kutay" 
                  className="relative z-10 w-48 h-48 md:w-64 md:h-64 object-cover border-2 border-ink rounded-sm shadow-sketch grayscale contrast-125 hover:grayscale-0 transition-all duration-500 mb-6"
                />
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Building Scalable <br/><span className="bg-highlight px-2 border-2 border-ink inline-block transform -rotate-1">Intelligent Systems</span></h2>
            <p className="text-xl mb-4 leading-relaxed text-gray-800">
              I am an <strong>AI & Backend Developer</strong> based in Singapore/Turkey, experienced in building automation-focused systems. I have a track record of delivering efficient, scalable solutions for companies across various sectors including Finance, Legal, and Media.
            </p>
            <p className="text-xl mb-6 leading-relaxed text-gray-800">
              My work revolves around <strong>RAG pipelines</strong>, <strong>Vector Databases</strong>, and high-performance backend systems using <strong>Python</strong> and <strong>Go</strong>.
            </p>
            <p className="text-xl leading-relaxed text-gray-800">
              I'm also a founder of multiple AI-driven products, constantly bridging the gap between cutting-edge research and real-world application.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h3 className="font-hand text-4xl font-bold mb-8 text-center md:text-left">Technical Arsenal</h3>
          <div className="space-y-8">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 border-2 border-ink shadow-sketch rounded-sm">
                <h4 className="font-hand text-2xl font-bold mb-4 border-b-2 border-gray-100 pb-2">{cat.title}</h4>
                <div className="flex flex-wrap">
                  {cat.skills.map(skill => (
                    <SketchyBadge key={skill}>{skill}</SketchyBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};