
import React, { useState } from 'react';
import { Mail, Plus, ChevronRight, Copy, Check, ExternalLink, Layers, Briefcase, Terminal, Code, Database, Globe, Calendar } from 'lucide-react';
import { Card } from './components/Card';
import { SectionHeader } from './components/SectionHeader';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SOCIAL_LINKS, PUBLICATIONS, AVAILABILITY } from './constants';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase size={22} />;
      case 'Terminal': return <Terminal size={22} />;
      case 'Code': return <Code size={22} />;
      case 'Database': return <Database size={22} />;
      case 'Layers': return <Layers size={28} strokeWidth={1.5} />;
      default: return <Code size={22} />;
    }
  };

  return (
    <div className="min-h-screen pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col gap-8">
      
      {/* Navigation Header */}
      <header className="flex items-center justify-between bg-[#0f0f0f]/80 backdrop-blur-md border border-[#1a1a1a] rounded-2xl p-3 px-6 sticky top-6 z-50 inner-shadow shadow-2xl">
        <div className="text-white font-black tracking-tighter text-xl">
          Larusajs
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl text-xs font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95 uppercase tracking-wider">
          <Plus size={14} strokeWidth={3} />
          Hire Me
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8">

        {/* Hero Section */}
        <section>
          <Card className="p-6 md:p-8 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

              {/* Profile Photo - Left */}
              <div className="shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border border-[#262626]">
                  <img
                    src='./enes-foto.jpeg'
                    alt="Profile"
                    className="w-full h-full object-cover grayscale brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Info - Right */}
              <div className="flex-1 text-center md:text-left">
                {/* Role Badge */}
                <div className="flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] rounded-full border border-[#262626] inner-shadow mb-3 w-fit mx-auto md:mx-0">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{PERSONAL_INFO.role}</span>
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight leading-tight">{PERSONAL_INFO.name}</h1>

                {/* Availability + Location */}
                <div className="flex items-center gap-3 mb-4 text-sm justify-center md:justify-start flex-wrap">
                  {PERSONAL_INFO.availability && (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-emerald-500 font-medium">Available for work</span>
                      </div>
                      <span className="text-gray-600">·</span>
                    </>
                  )}
                  <span className="text-gray-400">{PERSONAL_INFO.location}</span>
                </div>

                {/* Short Bio */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
                  {PERSONAL_INFO.summary}
                </p>

                {/* Email Button */}
                <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all border border-[#262626] inner-shadow active:scale-95"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy Email'}
                  </button>
                </div>
              </div>

            </div>
          </Card>
        </section>

        {/* Experience Section */}
        <section>
          <SectionHeader title="Professional Experience" />
          <Card className="flex flex-col divide-y divide-[#1a1a1a]">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-8 flex items-start gap-8 hover:bg-[#151515] transition-colors">
                <div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-gray-500 border border-[#262626] inner-shadow shrink-0">
                  {getIcon(exp.icon)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                    <span className="text-[#666] text-[10px] font-bold uppercase tracking-widest bg-[#1a1a1a] px-3 py-1.5 rounded-lg border border-[#262626]">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-4">
                    <span>{exp.role}</span>
                    <span className="text-gray-600">/</span>
                    <span className="text-gray-500 text-xs">{exp.location}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-3xl">{exp.description}</p>
                </div>
              </div>
            ))}
          </Card>
        </section>

        {/* Publications Section */}
        <section>
          <SectionHeader title="Publications" />
          <Card className="p-8">
            <div className="space-y-4">
              {PUBLICATIONS.map((pub) => (
                <a
                  key={pub.id}
                  href={pub.link}
                  className="group block p-5 bg-[#1a1a1a] rounded-2xl border border-[#262626] inner-shadow hover:bg-[#222] transition-all"
                >
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-white text-xs font-bold leading-tight group-hover:text-gray-300">{pub.title}</h4>
                    <ExternalLink size={14} className="text-gray-600 shrink-0 group-hover:text-white" />
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </section>

        {/* Featured Projects Section */}
        <section>
          <SectionHeader title="Featured Projects" />
          <Card className="flex flex-col divide-y divide-[#1a1a1a]">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group p-6 flex items-center justify-between hover:bg-[#151515] transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-500 group-hover:text-white transition-all border border-[#262626] inner-shadow">
                    {getIcon(project.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{project.name}</h3>
                    <p className="text-gray-600 text-[10px] leading-tight max-w-[200px]">{project.description}</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-700 group-hover:text-white" />
              </div>
            ))}
          </Card>
        </section>

        {/* Performance Stats Section */}
        <section>
          <Card className="p-10 bg-[#151515] border-none inner-shadow">
            <div className="grid grid-cols-2 gap-y-12 gap-x-6">
              <div>
                <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">02+</span>
                <span className="text-[#555] text-[10px] font-bold uppercase tracking-widest">Experience</span>
              </div>
              <div>
                <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">15+</span>
                <span className="text-[#555] text-[10px] font-bold uppercase tracking-widest">Projects</span>
              </div>
              <div>
                <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">LLM</span>
                <span className="text-[#555] text-[10px] font-bold uppercase tracking-widest">Expertise</span>
              </div>
              <div>
                <span className="block text-5xl font-bold text-white mb-2 tracking-tighter">3</span>
                <span className="text-[#555] text-[10px] font-bold uppercase tracking-widest">Papers</span>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="p-8 md:p-10 relative overflow-hidden">

            {/* Slots Available Badge - Top Right */}
            <div className="absolute top-6 right-6">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider">
                  {AVAILABILITY.slotsAvailable} Slots Free
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="max-w-2xl mx-auto text-center">

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Let's Work Together
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Have a project in mind? Book a call to discuss how we can build something amazing together.
              </p>

              {/* CTA Button */}
              <button className="bg-white text-black px-8 py-4 rounded-2xl text-sm font-bold hover:bg-gray-200 active:scale-95 transition-all shadow-lg mb-8 inline-flex items-center gap-2">
                <Calendar size={16} strokeWidth={2.5} />
                Book a Call
              </button>

              {/* Divider */}
              <div className="border-t border-[#1a1a1a] my-8"></div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center items-center flex-wrap">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] text-gray-500 rounded-xl hover:text-white hover:bg-[#222] transition-all border border-[#262626] inner-shadow active:scale-90"
                    aria-label={link.platform}
                  >
                    {link.icon}
                  </a>
                ))}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-10 h-10 flex items-center justify-center bg-[#1a1a1a] text-gray-500 rounded-xl hover:text-white hover:bg-[#222] transition-all border border-[#262626] inner-shadow active:scale-90"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>

            </div>

          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-16 pt-10 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-6 opacity-50 hover:opacity-100 transition-opacity">
        <p className="text-gray-500 text-xs font-medium">© 2025 {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <div className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-gray-500">
          <span>Built by</span>
          <span className="text-white">Larusajs</span>
        </div>
      </footer>

    </div>
  );
};

export default App;
