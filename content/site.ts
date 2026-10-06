import { SiteMetadata } from './types';

export const siteMetadata: SiteMetadata = {
  siteName: 'Ahmed Samy Portfolio',
  name: 'Ahmed Samy',
  title: 'AI & Digital Transformation Specialist',
  description:
    'Ahmed Samy — AI & Digital Transformation Specialist focused on Customer Experience, AI, Automation, CRM, Business Analysis, and Digital Transformation.',
  tagline: 'Turning Business Challenges into Intelligent, Automated Solutions.',
  location: '',
  domain: '',
  email: 'ahmedsamy920@gmail.com',
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Profile', href: '#profile' },
    { label: 'AI in Action', href: '#ai-action' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
  cvUrl: '/cv/Ahmed_Samy_CV.pdf',
  footerFocus: 'Customer Experience · AI · Automation · CRM',
  copyrightYear: new Date().getFullYear(),
};
