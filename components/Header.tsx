import React from 'react';
import { VscHome, VscBriefcase, VscBook, VscMail, VscAccount } from 'react-icons/vsc';
import Dock from './Dock';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    if (id === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => scrollToSection('#hero') },
    { icon: <VscAccount size={18} />, label: 'About', onClick: () => scrollToSection('#about') },
    { icon: <VscBriefcase size={18} />, label: 'Work', onClick: () => scrollToSection('#projects') },
    { icon: <VscBook size={18} />, label: 'Publications', onClick: () => scrollToSection('#publications') },
    { icon: <VscMail size={18} />, label: 'Contact', onClick: () => scrollToSection('#contact') },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
};

export default Header;