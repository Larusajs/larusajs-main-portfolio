
import React from 'react';

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
  link?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  location: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface Publication {
  id: string;
  title: string;
  link: string;
}
