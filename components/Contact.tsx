import React, { useState } from 'react';
import Section from './ui/Section';
import { SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Twitter, Mail, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://submit-form.com/scAxK8JC6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();

        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        console.error('Form submission failed:', response.status, response.statusText);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                  name="name"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-600"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-neutral-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden
                  ${isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-black hover:bg-neutral-200'
                  }
                  ${isSubmitting ? 'cursor-wait' : ''}
                  ${isSubmitted ? 'scale-[1.02]' : ''}
                `}
              >
                <span className={`flex items-center gap-2 transition-all duration-300 ${isSubmitting ? 'opacity-70' : 'opacity-100'}`}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check size={18} className="animate-bounce" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </span>
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