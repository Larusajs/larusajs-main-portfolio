import React from 'react';
import { motion } from 'framer-motion';
import { SketchyCard, SketchyButton } from './ui/SketchyComponents';
import { Coffee, Rocket, Check } from 'lucide-react';

const services = [
  {
    title: "AI Consultancy",
    icon: <Coffee size={32} />,
    description: "Expert guidance on your AI strategy. Whether it's code review, architecture planning, or feasibility analysis, let's solve your blockers.",
    features: [
      "Feasibility Analysis",
      "Tech Stack Selection",
      "Code Reviews & Audits",
      "1-on-1 Strategic Planning"
    ],
    action: "Book a Call",
    highlight: false
  },
  {
    title: "End-to-End App Dev",
    icon: <Rocket size={32} />,
    description: "I build your entire SaaS product from scratch. You bring the idea, I handle the design, frontend, backend, and AI integration.",
    availability: "2 Slots Left",
    features: [
      "Full Stack Development",
      "RAG/LLM Integration",
      "UI/UX Design Included",
      "Post-Launch Support"
    ],
    action: "Book a Call",
    highlight: true
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-hand text-5xl font-bold mb-4">How We Can Collaborate</h2>
          <p className="font-hand text-xl text-gray-600">Simple engagement models. High impact results.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SketchyCard className={`h-full flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform ${service.highlight ? 'border-ink' : ''}`}>
                
                {/* Availability Badge - Only for App Dev */}
                {service.availability && (
                   <div className="absolute -top-4 -right-4 bg-ink text-white font-hand font-bold px-4 py-1 transform rotate-6 shadow-sm border-2 border-white z-10">
                     🔥 {service.availability}
                   </div>
                )}

                <div className={`p-4 rounded-full border-2 border-ink mb-6 shadow-[2px_2px_0px_0px_#1a1a1a] ${service.highlight ? 'bg-highlight' : 'bg-white'}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-6 flex-grow">{service.description}</p>
                
                {/* Feature List */}
                <ul className="text-left mb-8 space-y-3 w-full px-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                      <Check size={20} className="mt-1 text-ink flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-full mt-auto">
                  <div className="mb-4 border-t-2 border-dashed border-gray-300 w-full"></div>
                  <SketchyButton 
                    variant={service.highlight ? 'primary' : 'secondary'} 
                    className="w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
                  >
                    {service.action}
                  </SketchyButton>
                </div>
              </SketchyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};