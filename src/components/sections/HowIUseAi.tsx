import React from 'react';
import { 
  Cpu, 
  Workflow, 
  Database, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';

export const HowIUseAi: React.FC = () => {
  const { aiUsage } = usePortfolioContent();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="how-i-use-ai"
      aria-label="How Ahmed Samy Uses AI"
      className="py-14 sm:py-16 lg:py-20 bg-[#07090E] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Implementation Disciplines"
          title="How I Use AI"
          subtitle="Pragmatic application patterns that connect intelligent models with real organizational systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-5 lg:gap-6">
          {aiUsage.map((card, idx) => (
            <Card
              key={card.id}
              variant="interactive"
              hoverEffect={true}
              className="p-5 sm:p-6 flex flex-col justify-between group border-white/[0.09] bg-[#0D1017]/90 hover:border-cyan-500/40 transition-all duration-200"
            >
              <div>
                {/* Header with Icon and Category Number */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-xs font-mono text-zinc-500 group-hover:text-cyan-400 font-semibold transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                  {card.title}
                </h3>

                {/* Main Tagline Quote */}
                <p className="mt-2 text-sm font-semibold text-cyan-300/95 leading-snug">
                  "{card.tagline}"
                </p>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-zinc-300/90 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono text-[11px] text-zinc-400">Practical Application</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
