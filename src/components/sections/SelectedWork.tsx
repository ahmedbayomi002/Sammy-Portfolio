import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { usePortfolioContent } from '@/content/provider';
import { ProjectItem } from '@/content/types';

export const SelectedWork: React.FC = () => {
  const { projects: projectsContent } = usePortfolioContent();
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters = projectsContent.filterOptions || [
    'All',
    'AI',
    'Automation',
    'Customer Experience',
    'CRM',
    'Business Analysis',
  ];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsContent.projects
      : projectsContent.projects.filter(
          (p) =>
            p.filterCategories.includes(selectedFilter) ||
            p.category.toLowerCase().includes(selectedFilter.toLowerCase())
        );

  return (
    <section
      id="work"
      aria-label="Selected Work and Case Studies"
      className="py-14 sm:py-16 lg:py-20 bg-[#0B0D13] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio & Systems"
          title={projectsContent.sectionTitle}
          subtitle={projectsContent.sectionSubtitle}
        />

        {/* Filter Pills / Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-zinc-900/80 text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/[0.14]'
                }`}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-zinc-400 text-sm">
            No projects found for the selected filter.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
