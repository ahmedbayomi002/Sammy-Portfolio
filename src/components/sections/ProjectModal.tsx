import React, { useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  UserCheck, 
  Layers, 
  Sparkles,
  Workflow
} from 'lucide-react';
import { ProjectItem, WorkflowNode } from '@/content/types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E121A] border border-white/[0.12] rounded-2xl p-5 sm:p-8 shadow-2xl shadow-black/80 text-left my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close case study details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-12 mb-5">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              {project.category}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs font-mono text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06]">
              {project.status}
            </span>
          </div>
          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          >
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Visual Operational Workflow with identifiable AI step */}
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.08] shadow-inner">
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Visual Workflow & AI Touchpoints
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>AI Steps Highlighted</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {project.workflow.map((item, idx) => {
              const label = typeof item === 'string' ? item : item.step;
              const isAi = typeof item === 'object' ? item.isAi : label.toLowerCase().includes('ai');

              return (
                <React.Fragment key={label + idx}>
                  <div
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all flex items-center gap-1.5 ${
                      isAi
                        ? 'bg-cyan-500/20 border-cyan-400/60 text-white font-semibold shadow-sm shadow-cyan-500/20 ring-1 ring-cyan-400/30'
                        : 'bg-zinc-900 border-white/[0.08] text-zinc-300'
                    }`}
                  >
                    {isAi && <Sparkles className="w-3 h-3 text-cyan-400" />}
                    <span>{label}</span>
                    {isAi && (
                      <span className="text-[10px] font-mono text-cyan-300 uppercase px-1 py-0.2 rounded bg-cyan-950/80">
                        AI
                      </span>
                    )}
                  </div>
                  {idx < project.workflow.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0 hidden sm:inline" />
                  )}
                  {idx < project.workflow.length - 1 && (
                    <ArrowDown className="w-3 h-3 text-zinc-500 shrink-0 sm:hidden" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Standard 7-Part Case Study Structure */}
        <div className="space-y-4 pt-2 border-t border-white/[0.08]">
          {/* 01 Challenge & 02 Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.06]">
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1.5">
                01 — Challenge
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.challenge || project.problem}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.06]">
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1.5">
                02 — Solution
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 03 What AI Does & 04 What Automation Does */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-cyan-500/20 bg-gradient-to-b from-cyan-950/10 to-[#090C12]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-400">
                  03 — What AI Does
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.whatAiDoes}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-400">
                  04 — What Automation Does
                </span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.whatAutomationDoes}
              </p>
            </div>
          </div>

          {/* 05 My Role */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.06]">
            <div className="flex items-center gap-1.5 mb-2.5">
              <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono font-bold text-cyan-400">
                05 — My Role
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.myRole?.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs font-medium text-cyan-200"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* 06 Technology & 07 Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.06]">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-400">
                  06 — Technology
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/[0.08] text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#090C12] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 block mb-1.5">
                  07 — Status
                </span>
                <p className="text-sm font-semibold text-white">
                  {project.status}
                </p>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed font-normal">
                  Production-architected design grounded in actual systems and verified workflows.
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Execution Scope</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
