import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = usePortfolioContent();

  return (
    <section
      id="experience"
      aria-label="Professional Experience and Journey"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Progression & Trajectory"
          title={experience.sectionTitle}
          subtitle={experience.sectionSubtitle}
        />

        {/* Thematic Stages Progression */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {experience.thematicStages.map((stage, idx) => {
            const isLast = idx === experience.thematicStages.length - 1;

            return (
              <div key={stage.step} className="relative">
                <Card
                  variant="interactive"
                  hoverEffect={true}
                  className="p-5 sm:p-6 border-white/[0.09]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs text-cyan-300 shrink-0 shadow-inner">
                        0{stage.step}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {stage.stageName}
                        </h3>
                        <p className="mt-1 text-sm sm:text-base text-zinc-300/90 leading-relaxed font-normal">
                          {stage.focus}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider select-none">
                        Stage {stage.step} of 5
                      </span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06]">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs sm:text-sm text-zinc-300">
                      {stage.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="font-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                {/* Arrow connector between stages */}
                {!isLast && (
                  <div
                    className="flex justify-center my-2"
                    aria-hidden="true"
                  >
                    <div className="p-1 rounded-full bg-zinc-900 border border-white/[0.08] text-zinc-500">
                      <ArrowDown className="w-3.5 h-3.5 text-cyan-400/70" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Phase 2 Informational Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 font-mono">
            {experience.statusNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
