import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { usePortfolioContent } from '@/content/provider';

export const Navbar: React.FC = () => {
  const { site } = usePortfolioContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = [
        'home',
        'profile',
        'ai-action',
        'capabilities',
        'approach',
        'how-i-use-ai',
        'work',
        'experience',
        'skills',
        'tech-stack',
        'certifications',
        'resume',
        'contact',
      ];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Zone 1: Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md py-1"
          >
            {site.name}
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-zinc-300"
            aria-label="Main Navigation"
          >
            {site.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors duration-150 py-1 relative whitespace-nowrap text-sm ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="#contact"
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex border-cyan-500/35 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-950/20"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Let's Connect
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Over / Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-[#0B0E15]/95 backdrop-blur-xl border-b border-white/[0.1] px-5 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {site.navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium transition-colors py-2.5 px-3 rounded-lg flex items-center justify-between ${
                    isActive
                      ? 'bg-zinc-850 text-cyan-400 font-semibold'
                      : 'text-zinc-200 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/[0.08]">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Let's Connect
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
