import React, { useState } from 'react';
import { 
  AlertCircle, 
  Search, 
  Binary, 
  Layers, 
  Share2, 
  Zap, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface TransformationNode {
  id: string;
  label: string;
  phase: string;
  icon: React.ReactNode;
  description: string;
  tag: string;
}

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('automate');

  const nodes: TransformationNode[] = [
    {
      id: 'challenge',
      label: 'Business Challenge',
      phase: 'ORIGIN',
      icon: <AlertCircle className="w-3.5 h-3.5 text-amber-400" />,
      description: 'Identifying operational friction, manual drag, and customer touchpoint drop-offs.',
      tag: 'Challenge',
    },
    {
      id: 'understand',
      label: 'Understand',
      phase: 'STAGE 01',
      icon: <Search className="w-3.5 h-3.5 text-zinc-300" />,
      description: 'Synthesizing business goals, customer journeys, and core stakeholder objectives.',
      tag: 'Empathy',
    },
    {
      id: 'analyze',
      label: 'Analyze',
      phase: 'STAGE 02',
      icon: <Binary className="w-3.5 h-3.5 text-zinc-300" />,
      description: 'Mapping repetitive tasks, measuring process cycle times, and pinpointing bottlenecks.',
      tag: 'Analysis',
    },
    {
      id: 'design',
      label: 'Design',
      phase: 'STAGE 03',
      icon: <Layers className="w-3.5 h-3.5 text-cyan-400" />,
      description: 'Formulating pragmatic operational architecture around verified business needs.',
      tag: 'Solution',
    },
    {
      id: 'connect',
      label: 'Connect',
      phase: 'STAGE 04',
      icon: <Share2 className="w-3.5 h-3.5 text-cyan-400" />,
      description: 'Bridging CRMs, communication channels, internal data, and secure APIs.',
      tag: 'Integration',
    },
    {
      id: 'automate',
      label: 'Automate',
      phase: 'STAGE 05',
      icon: <Zap className="w-3.5 h-3.5 text-cyan-400" />,
      description: 'Deploying autonomous AI agents, trigger workflows, and automated pipeline execution.',
      tag: 'Autonomous',
    },
    {
      id: 'improve',
      label: 'Improve',
      phase: 'STAGE 06',
      icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />,
      description: 'Measuring speed of resolution, auditing edge cases, and continuously iterating.',
      tag: 'Optimization',
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[5];

  return (
    <div
      className="relative rounded-2xl bg-[#0D1017]/95 border border-white/[0.09] p-5 sm:p-6 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-md"
      aria-label="Digital transformation framework visualization"
    >
      {/* Background ambient illumination */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/80 animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
            Transformation Framework
          </span>
        </div>
        <span className="text-[11px] text-zinc-400 font-mono">
          7-Stage System
        </span>
      </div>

      {/* Interactive Node Flow List */}
      <div className="space-y-1.5 relative">
        {nodes.map((node, index) => {
          const isActive = node.id === activeNode;
          const isChallenge = node.id === 'challenge';
          const isImprove = node.id === 'improve';

          return (
            <div key={node.id} className="relative group">
              {/* Connector line between steps */}
              {index < nodes.length - 1 && (
                <div
                  className={`absolute left-[17px] top-[28px] w-[2px] h-[10px] z-0 transition-colors duration-200 ${
                    isActive ? 'bg-cyan-500/60' : 'bg-white/[0.08]'
                  }`}
                  aria-hidden="true"
                />
              )}

              <button
                type="button"
                onClick={() => setActiveNode(node.id)}
                className={`w-full text-left relative z-10 flex items-center justify-between px-3 py-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#151B27] border-cyan-500/50 shadow-md shadow-cyan-950/30'
                    : 'bg-[#0E121A]/70 border-white/[0.05] hover:border-white/[0.14] hover:bg-[#121622]'
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-cyan-500/20 border border-cyan-500/40'
                        : isChallenge
                        ? 'bg-amber-500/10 border border-amber-500/20'
                        : isImprove
                        ? 'bg-emerald-500/10 border border-emerald-500/20'
                        : 'bg-white/[0.04] border border-white/[0.06]'
                    }`}
                  >
                    {node.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold tracking-tight truncate ${
                      isActive
                        ? 'text-white'
                        : isChallenge
                        ? 'text-amber-200/90'
                        : isImprove
                        ? 'text-emerald-200/90'
                        : 'text-zinc-300'
                    }`}
                  >
                    {node.label}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                    {node.tag}
                  </span>
                  <ArrowRight
                    className={`w-3 h-3 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-0.5' : 'text-zinc-600'
                    }`}
                  />
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Active Inspector Panel */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] bg-[#090C12]/90 rounded-xl p-3.5 border border-white/[0.06]">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="font-mono text-cyan-400 text-[11px] font-semibold">{currentNode.phase}</span>
          <span className="text-zinc-400 text-[11px] font-medium">{currentNode.tag}</span>
        </div>
        <h4 className="text-sm font-bold text-white mb-1">
          {currentNode.label}
        </h4>
        <p className="text-xs text-zinc-300 leading-relaxed font-normal">
          {currentNode.description}
        </p>
      </div>
    </div>
  );
};
