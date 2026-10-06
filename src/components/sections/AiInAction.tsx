import React, { useState } from 'react';
import { 
  Search, 
  BrainCircuit, 
  SlidersHorizontal, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Workflow
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';

export const AiInAction: React.FC = () => {
  const { aiInAction } = usePortfolioContent();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const flowStages: Array<{ name: string; label: string; icon: React.ReactNode }> = [
    { name: 'Problem', label: '01. Problem Intake', icon: <Search className="w-3.5 h-3.5" /> },
    { name: 'AI', label: '02. AI Semantic Comprehension', icon: <BrainCircuit className="w-3.5 h-3.5" /> },
    { name: 'Logic', label: '03. Business Logic & Criteria', icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
    { name: 'Automation', label: '04. Automated Execution', icon: <Zap className="w-3.5 h-3.5" /> },
    { name: 'Outcome', label: '05. Continuous Improvement', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  ];

  const currentStep = aiInAction[activeStepIndex] || aiInAction[0];

  return (
    <section
      id="ai-action"
      aria-label="AI in Action Transformation Methodology"
      className="py-14 sm:py-16 lg:py-20 bg-[#090B10] border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Practical Methodology"
          title="AI in Action"
          subtitle='"How I turn AI capabilities into practical business solutions."'
        />

        {/* Linear High-Level Flow Visualization: Problem → AI → Logic → Automation → Outcome */}
        <div className="max-w-4xl mx-auto mb-8 p-3 sm:p-4 rounded-2xl bg-[#0D1017] border border-white/[0.08] shadow-lg">
          <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5 text-center select-none">
            End-to-End Operational Pipeline
          </div>
          
          <div className="grid grid-cols-5 gap-1 sm:gap-2 items-center">
            {flowStages.map((stage, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={stage.name}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-2 sm:p-2.5 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    isActive
                      ? 'bg-cyan-500/15 border-cyan-500/60 shadow-md text-white'
                      : isPast
                      ? 'bg-[#121622] border-cyan-500/30 text-zinc-300 hover:border-white/[0.2]'
                      : 'bg-[#0A0D14] border-white/[0.06] text-zinc-400 hover:border-white/[0.14]'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className={`text-[11px] sm:text-xs font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-zinc-400'}`}>
                    {stage.name}
                  </span>
                  <div className="mt-1 hidden sm:flex items-center gap-1 text-[10px] text-zinc-400">
                    {stage.icon}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Step Horizontal Tab Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {aiInAction.map((item, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#151B27] border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                    : 'bg-[#0E121A]/70 border-white/[0.06] hover:border-white/[0.16] hover:bg-[#121622]'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-cyan-400' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {item.step}
                  </span>
                  <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-zinc-900 text-zinc-400'
                  }`}>
                    {item.flowStage}
                  </span>
                </div>
                <p
                  className={`text-sm sm:text-base font-bold tracking-tight transition-colors ${
                    isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                  }`}
                >
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Visual Card */}
        <Card
          variant="elevated"
          className="p-6 sm:p-8 lg:p-10 border-white/[0.1] bg-[#0D1017]/95 relative overflow-hidden"
        >
          {/* Subtle Ambient Radial */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left: Step Description */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest select-none">
                <span>Step {currentStep.step} of 05</span>
                <span>·</span>
                <span>Flow Phase: {currentStep.flowStage}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentStep.step} — {currentStep.title}
              </h3>

              <p className="text-base sm:text-lg text-white font-medium leading-relaxed [text-wrap:balance]">
                "{currentStep.description}"
              </p>

              <p className="text-sm text-zinc-300/90 leading-relaxed font-normal">
                {currentStep.detail}
              </p>

              {/* Navigation Controls */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-white/[0.1] text-xs font-medium text-zinc-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === aiInAction.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(aiInAction.length - 1, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Technical Blueprint Box */}
            <div className="lg:col-span-6 bg-[#090C12] rounded-2xl p-5 sm:p-6 border border-white/[0.08] shadow-inner space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                    Execution Architecture
                  </span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">
                  Phase {activeStepIndex + 1} / 5
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    System Input
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    {activeStepIndex === 0 && 'Raw emails, tenders, multi-channel tickets, and customer attachments.'}
                    {activeStepIndex === 1 && 'Parsed text fields, tabular structures, and customer conversational contexts.'}
                    {activeStepIndex === 2 && 'Semantic intent tags, structured entity scores, and business qualification rules.'}
                    {activeStepIndex === 3 && 'Verified decisions, destination endpoints, and approved action payloads.'}
                    {activeStepIndex === 4 && 'Execution logs, turnaround latencies, and cross-team resolution feedback.'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.05]">
                  <p className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    Operational Impact
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300">
                    {activeStepIndex === 0 && 'Eliminates hours of manual data hunting and spreadsheet scanning.'}
                    {activeStepIndex === 1 && 'Ensures zero nuance or customer urgency is lost in translation.'}
                    {activeStepIndex === 2 && 'Enforces strict organizational rules without subjective human oversight error.'}
                    {activeStepIndex === 3 && 'Executes immediate background work across CRMs, messaging bots, and APIs.'}
                    {activeStepIndex === 4 && 'Provides leadership with clear systemic signals to continuously refine workflows.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
