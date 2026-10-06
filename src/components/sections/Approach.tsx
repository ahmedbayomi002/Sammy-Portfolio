import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';
import { Check, ChevronRight } from 'lucide-react';

export const Approach: React.FC = () => {
  const { approach } = usePortfolioContent();
  const [activeStep, setActiveStep] = useState<string>('01');

  const selectedStepData = approach.find((s) => s.step === activeStep) || approach[0];

  return (
    <section
      id="approach"
      aria-label="Problem Solving Methodology"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Methodology & Framework"
          title="How I Approach Problems"
          subtitle='"Technology is most valuable when it starts with the right business question."'
        />

        {/* Polished Horizontal Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {approach.map((step) => {
            const isSelected = step.step === activeStep;
            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStep(step.step)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#151B27] border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                    : 'bg-[#0E121A]/70 border-white/[0.06] hover:border-white/[0.16] hover:bg-[#121622]'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-cyan-400' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isSelected ? 'bg-cyan-400 shadow-sm shadow-cyan-400/80 animate-pulse' : 'bg-transparent'
                    }`}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                    isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                  }`}
                >
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Large Detailed Active Step Card */}
        <Card
          variant="elevated"
          className="p-6 sm:p-8 lg:p-10 border-white/[0.1] relative overflow-hidden"
        >
          <div
            className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-5 space-y-3.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest select-none">
                <span>Phase {selectedStepData.step} of 06</span>
                <span>·</span>
                <span>Execution Standard</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {selectedStepData.step} — {selectedStepData.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300/90 leading-relaxed font-normal">
                {selectedStepData.description}
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#090C12]/90 rounded-2xl p-5 sm:p-6 lg:p-7 border border-white/[0.08] shadow-inner">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2 select-none">
                <span>Operational Checkpoints & Deliverables</span>
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </h4>

              <ul className="space-y-2.5">
                {selectedStepData.detailPoints?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-200">
                    <span className="w-5 h-5 rounded-md bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    </span>
                    <span className="leading-relaxed font-normal">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
