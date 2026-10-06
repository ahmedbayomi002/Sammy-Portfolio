import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProjectItem } from '@/content/types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <Card
      variant="interactive"
      hoverEffect={true}
      className="p-5 sm:p-6 flex flex-col justify-between group h-full border-white/[0.09]"
    >
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-2.5 gap-2">
          <span className="font-semibold text-cyan-400 uppercase tracking-wider text-[11px]">
            {project.category}
          </span>
          <span className="font-mono text-[11px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06] truncate max-w-[170px]">
            {project.status}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1.5">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-300/90 leading-relaxed font-normal mb-3.5">
          {project.subtitle}
        </p>

        {/* My Role area */}
        {project.myRole && project.myRole.length > 0 && (
          <div className="pt-2.5 border-t border-white/[0.06] mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1.5 select-none">
              My Role:
            </span>
            <div className="flex flex-wrap gap-1">
              {project.myRole.map((role) => (
                <span
                  key={role}
                  className="px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/25 text-[10px] font-medium text-cyan-300"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Technologies */}
        <div className="pt-2.5 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/[0.06] text-[11px] font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer: View Case Study */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer py-1"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <span className="text-[11px] font-mono text-zinc-400">
          Case Study
        </span>
      </div>
    </Card>
  );
};
