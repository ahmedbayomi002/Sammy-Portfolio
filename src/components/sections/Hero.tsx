import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  MessageSquare, 
  FileText,
  Copy,
  Check
} from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroVisual } from './HeroVisual';
import { usePortfolioContent } from '@/content/provider';

export const Hero: React.FC = () => {
  const { profile, social } = usePortfolioContent();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(social.email.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      aria-label="Introduction and Overview"
      className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden tech-grid"
    >
      {/* Subtle radial ambient illumination */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] tech-radial-glow pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & Narrative */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              {profile.eyebrow}
            </div>

            {/* Main Heading & Professional Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                {profile.name}
              </h1>
              <p className="mt-1.5 text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
                {profile.role}
              </p>
            </div>

            {/* Supporting Focus Line */}
            <p className="text-sm sm:text-base font-semibold text-cyan-400 tracking-wide">
              {profile.focusAreas.join(' · ')}
            </p>

            {/* Main Statement */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-white border-l-3 border-cyan-400 pl-3.5 py-1 [text-wrap:balance]">
              "{profile.mainHeroStatement}"
            </blockquote>

            {/* Secondary Statement */}
            <p className="text-sm sm:text-base text-zinc-300 font-medium tracking-wide">
              {profile.secondaryTagline}
            </p>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed max-w-2xl font-normal">
              {profile.heroBio}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Button
                href="#work"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View My Work
              </Button>

              <Button
                href="#profile"
                variant="secondary"
                size="md"
              >
                Personal Profile
              </Button>

              <Button
                href="#resume"
                variant="outline"
                size="md"
                icon={<FileText className="w-4 h-4 text-cyan-400" />}
                iconPosition="left"
              >
                View CV
              </Button>
            </div>

            {/* Channels & Configurable Direct Verification */}
            <div className="pt-4 border-t border-white/[0.08] max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 select-none">
                Direct Channels & Verification
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {/* Email quick action */}
                <a
                  href={`mailto:${social.email.address}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.1] text-xs font-medium text-zinc-200 hover:text-white hover:border-cyan-500/50 transition-colors shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{social.email.address}</span>
                </a>

                {/* Email copy button */}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.1] text-xs font-medium text-zinc-300 hover:text-white hover:border-cyan-500/50 transition-colors cursor-pointer shadow-sm"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                {/* LinkedIn (renders if configured) */}
                {social.linkedIn.active && social.linkedIn.url && (
                  <a
                    href={social.linkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.1] text-xs font-medium text-zinc-200 hover:text-white hover:border-cyan-500/50 transition-colors shadow-sm"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{social.linkedIn.label}</span>
                  </a>
                )}

                {/* WhatsApp (renders if configured) */}
                {social.whatsApp.active && social.whatsApp.url && (
                  <a
                    href={social.whatsApp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/[0.1] text-xs font-medium text-zinc-200 hover:text-white hover:border-cyan-500/50 transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{social.whatsApp.label}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Transformation Visual */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
