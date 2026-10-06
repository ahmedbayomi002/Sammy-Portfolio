import { SocialLinks } from './types';

/**
 * Social and direct contact configuration.
 * Buttons only render when active and real URLs/addresses are configured.
 */
export const socialLinks: SocialLinks = {
  email: {
    address: 'ahmedsamy920@gmail.com',
    label: 'Email Me',
    active: true,
  },
  linkedIn: {
    url: '', // Insert real LinkedIn URL when available
    label: 'LinkedIn',
    active: false,
  },
  whatsApp: {
    url: '', // Insert real WhatsApp link (e.g. https://wa.me/...) when available
    displayNumber: '',
    label: 'WhatsApp',
    active: false,
  },
  cv: {
    downloadUrl: '', // Insert path to CV (e.g. /Ahmed_Samy_CV.pdf) when uploaded
    label: 'Download CV',
    active: false,
  },
};
