import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SectionBadge } from '../ui/SectionBadge';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { ProjectItem } from '../../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <SectionBadge variant="purple">
            Featured Projects
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Some of My Recent Work
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            A selection of production-grade web applications, full-stack architectures, and intuitive digital experiences.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Carousel / Navigation Indicator Dots (as in the screenshot) */}
        <div className="flex items-center justify-center gap-2 pt-10">
          <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-sm shadow-indigo-500/50" />
          <span className="w-2 h-2 rounded-full bg-slate-700 dark:bg-slate-700 light:bg-slate-300" />
          <span className="w-2 h-2 rounded-full bg-slate-700 dark:bg-slate-700 light:bg-slate-300" />
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
