import React, { useState } from 'react';
import Section from './ui/Section';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Info */}
        <Section>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8">
            Let's work <br />
            <span className="text-neutral-500">together.</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-md">
            I'm currently available for freelance projects and open to full-time opportunities. 
            If you have an idea you'd like to discuss, share it with me!
          </p>
          
          <div className="space-y-6">
            <a 
              href={SOCIAL_LINKS.email}
              className="flex items-center gap-4 text-xl hover:text-neutral-400 transition-colors group"
            >
              <div className="p-3 border border-neutral-800 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              enes@srreal.co
            </a>
            
            <div className="flex gap-4 pt-4">
              <a href={SOCIAL_LINKS.github} className="p-3 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="p-3 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.twitter} className="p-3 bg-neutral-900 rounded-full hover:bg-white hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </Section>

        {/* Right Side: Form */}
        <Section delay={200}>
          <div className="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-600"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-lg font-bold text-black transition-all duration-300 flex items-center justify-center gap-2
                  ${submitted ? 'bg-green-500 hover:bg-green-600' : 'bg-white hover:bg-neutral-200'}
                  ${isSubmitting ? 'opacity-70 cursor-wait' : ''}
                `}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : submitted ? (
                  <>Message Sent!</>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
            
            {/* Decorative gradient blur behind form */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-neutral-800/20 rounded-full blur-[80px] pointer-events-none"></div>
          </div>
        </Section>
      </div>

      <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center text-neutral-500 text-sm gap-4">
        <div>
          © {new Date().getFullYear()} Larusajs. No copyright infringement intended.
        </div>
        <div className="flex items-center gap-2">
            Built your dreams with Larusajs!
        </div>
      </div>
    </section>
  );
};

export default Contact;