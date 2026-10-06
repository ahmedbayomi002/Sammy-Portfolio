import React from 'react';
import { ArrowUp } from 'lucide-react';
import { usePortfolioContent } from '@/content/provider';

export const Footer: React.FC = () => {
  const { site, social } = usePortfolioContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Profile', href: '#profile' },
    { label: 'AI in Action', href: '#ai-action' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080C] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Brand & Professional Positioning */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold tracking-tight text-white">
              {site.name}
            </h3>
            <p className="text-sm font-medium text-cyan-400">
              {site.title}
            </p>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              {site.footerFocus}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Back to Top */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Connect
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${social.email.address}`}
                  className="hover:text-white transition-colors duration-150"
                >
                  {social.email.address}
                </a>
              </li>
              <li>
                <a
                  href={social.linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a
                  href={social.whatsApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-150"
                >
                  WhatsApp Direct
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
                aria-label="Scroll back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {site.copyrightYear} {site.name}. All rights reserved.</p>
          <p className="text-zinc-400">
            Engineered for real operational impact.
          </p>
        </div>
      </div>
    </footer>
  );
};
