import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';
import { Sparkles, Cpu, GitBranch, Layers, Code2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const { tools } = usePortfolioContent();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Automation':
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case 'CRM':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Development':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="tech-stack"
      aria-label="Technologies and Tooling"
      className="py-14 sm:py-16 lg:py-20 bg-[#0B0D13] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tooling Ecosystem"
          title={tools.sectionTitle}
          subtitle={tools.sectionSubtitle}
        />

        {/* Clear 4-Category Grid with Compact Technology Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {tools.categories.map((cat) => (
            <Card
              key={cat.category}
              variant="default"
              className="p-5 sm:p-5.5 flex flex-col justify-between border-white/[0.09] bg-[#0D1017]/90 hover:border-white/[0.18] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 mb-3.5 leading-relaxed font-normal">
                  {cat.description}
                </p>

                {/* Compact, clean text-based technology chips */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-900 border border-white/[0.08] text-xs font-medium text-zinc-200 hover:border-cyan-500/40 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/[0.05] text-[11px] text-zinc-400 font-mono select-none">
                Work With / Explore
              </div>
            </Card>
          ))}
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="mt-6 sm:mt-8 max-w-2xl mx-auto text-center">
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            {tools.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
