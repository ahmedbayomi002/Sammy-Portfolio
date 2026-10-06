import React from 'react';
import { Cpu, Users, Workflow, BarChart3, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';

export const Capabilities: React.FC = () => {
  const { capabilities } = usePortfolioContent();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section
      id="capabilities"
      aria-label="Capabilities and Areas of Work"
      className="py-14 sm:py-16 lg:py-20 bg-[#0B0D13] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialization & Core Disciplines"
          title="What I Work On"
          subtitle="Four core focus areas engineered to align operational friction with robust technological execution."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {capabilities.map((cap) => (
            <Card
              key={cap.id}
              variant="interactive"
              hoverEffect={true}
              className="p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-start gap-3.5 mb-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:border-cyan-400/60 group-hover:scale-105 transition-all duration-200">
                    {getIcon(cap.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {cap.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-zinc-300/90 leading-relaxed font-normal">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Unboxed Skills and Focus Items */}
                <div className="mt-4 pt-4 border-t border-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2.5 select-none">
                    Key Competencies & Methods
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-200">
                    {cap.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span>Production Capability</span>
                <span className="text-cyan-400 font-mono font-semibold">0{capabilities.indexOf(cap) + 1}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
