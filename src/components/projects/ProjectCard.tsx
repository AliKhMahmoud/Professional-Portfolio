import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 dark:bg-[#0c101e]/80 light:bg-white border border-slate-800/80 dark:border-slate-800 light:border-slate-200/80 hover:border-indigo-500/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden"
    >
      <div>
        {/* Card Top: Index Tag & Image Container */}
        <div className="relative p-3 pb-0">
          
          {/* Index Badge */}
          <div className="absolute top-5 left-5 z-10">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-sm shadow">
              {project.index}
            </span>
          </div>

          {/* Project Mockup Image */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-slate-800/60 dark:border-slate-800 light:border-slate-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-indigo-950/10 group-hover:opacity-0 transition-opacity" />
          </div>
        </div>

        {/* Card Info */}
        <div className="p-5 space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech tags preview */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-600"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-1.5 py-0.5 text-[10px] text-slate-500">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: View Project Link */}
      <div className="px-5 pb-5 pt-1 flex items-center justify-end">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 dark:text-indigo-400 light:text-indigo-600 group-hover:translate-x-0.5 transition-transform">
          <span>View Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
