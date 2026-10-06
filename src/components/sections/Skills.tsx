import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { usePortfolioContent } from '@/content/provider';
import { CheckCircle2, Cpu, Users, BarChart3, Workflow, Code, Layers } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skills } = usePortfolioContent();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI':
      case 'AI & Automation':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Automation':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'Customer Experience':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'Business':
      case 'Business Analysis':
        return <BarChart3 className="w-5 h-5 text-cyan-400" />;
      case 'CRM':
      case 'CRM & Analytics':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Integration':
      case 'Technology':
        return <Code className="w-5 h-5 text-cyan-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Functional Skills and Capabilities"
      className="py-14 sm:py-16 lg:py-20 bg-[#090A0F] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Competency Framework"
          title={skills.sectionTitle}
          subtitle={skills.sectionSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.categories.map((cat) => (
            <Card
              key={cat.category}
              variant="default"
              className="p-5 sm:p-6 flex flex-col justify-between border-white/[0.08]"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {cat.description && (
                  <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                    {cat.description}
                  </p>
                )}

                <div className="pt-2.5 border-t border-white/[0.06]">
                  <ul className="space-y-1.5 text-sm text-zinc-200">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="font-medium text-xs sm:text-sm">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/[0.04] text-[11px] text-zinc-400 font-mono select-none">
                Verified Capability Area
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
