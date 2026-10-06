import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Linkedin, 
  CheckCircle2, 
  Cpu, 
  Workflow, 
  Layers, 
  BarChart3,
  Sparkles
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { usePortfolioContent } from '@/content/provider';

export const ProfileSection: React.FC = () => {
  const { profile, social, site } = usePortfolioContent();
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="profile"
      aria-label="Professional Profile and Identity"
      className="py-14 sm:py-16 lg:py-20 bg-[#07090E] border-t border-white/[0.08] relative overflow-hidden"
    >
      {/* Subtle radial ambient background illumination */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Personal Identity & Leadership"
          title="Professional Profile"
          subtitle="Connecting organizational challenges with pragmatic AI, automation, and customer experience."
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Premium Profile Image Presentation Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] group">
              {/* Subtle ambient accent glow */}
              <div 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-cyan-500/20 via-transparent to-blue-600/20 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                aria-hidden="true"
              />

              {/* Connected node visual elements */}
              <div className="relative rounded-2xl bg-[#0D1017] border border-white/[0.12] p-4 sm:p-5 shadow-2xl backdrop-blur-md">
                {/* Top Node Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400" />
                    <span className="font-mono text-zinc-300 font-medium text-[11px] tracking-wider uppercase">
                      Executive Identity
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-400/90 font-medium bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    Specialist
                  </span>
                </div>

                {/* Profile Image Container */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-zinc-800 to-zinc-950 border border-white/[0.08] shadow-inner">
                  {!imageError ? (
                    <img
                      src={profile.profileImage}
                      alt={profile.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#090C12] text-center p-6">
                      <div className="w-20 h-20 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center font-bold text-2xl text-cyan-300 mb-3 font-mono">
                        AS
                      </div>
                      <p className="text-sm font-bold text-white">{profile.name}</p>
                      <p className="text-xs text-cyan-400 mt-1">{profile.role}</p>
                    </div>
                  )}

                  {/* Subtle rim overlay for technology depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1017] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Bottom Image Inset Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-lg bg-[#090C12]/90 backdrop-blur-md border border-white/[0.1] flex items-center justify-between text-xs">
                    <span className="text-white font-semibold text-xs tracking-tight">
                      {profile.name}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      Cairo / Remote
                    </span>
                  </div>
                </div>

                {/* Minimal AI Connection Nodes below image */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>AI & Automation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>CX Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Executive Positioning, Narrative & Core Principle */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/25 text-xs font-semibold tracking-wider text-cyan-300 uppercase mb-2 select-none">
                <span>Personal Brand</span>
                <span>·</span>
                <span>Executive Positioning</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {profile.name}
              </h3>
              <p className="text-lg sm:text-xl font-bold text-cyan-400 mt-1">
                {profile.role}
              </p>
            </div>

            {/* Supporting Specialization Tags */}
            <p className="text-sm font-semibold text-zinc-300">
              {profile.focusAreas.join(' · ')}
            </p>

            {/* Strong Personal Introduction */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0D1017] border border-cyan-500/20 shadow-sm relative">
              <p className="text-base sm:text-lg text-white font-medium leading-relaxed [text-wrap:balance]">
                "{profile.personalIntro}"
              </p>
            </div>

            {/* Subtle Core Principle Callout */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-white/[0.08] flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold mb-0.5 select-none">
                  Core Guiding Principle
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  <strong className="text-white">Business First. Technology Second.</strong> — "{profile.corePrinciple}"
                </p>
              </div>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {profile.focusAreas.map((area) => (
                <div
                  key={area}
                  className="px-3 py-2 rounded-lg bg-[#0E121A] border border-white/[0.06] text-center"
                >
                  <p className="text-xs font-semibold text-zinc-200">{area}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                href="#ai-action"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                See AI in Action
              </Button>

              <Button
                href="#resume"
                variant="secondary"
                size="md"
                icon={<FileText className="w-4 h-4" />}
                iconPosition="left"
              >
                View CV & Resume
              </Button>

              <Button
                href="#contact"
                variant="outline"
                size="md"
              >
                Contact Ahmed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
