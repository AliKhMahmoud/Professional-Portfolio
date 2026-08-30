import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SectionBadge } from '../ui/SectionBadge';
import { SkillConstellation } from './SkillConstellation';
import type { SkillCategory } from '../../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const { skills } = portfolioData;

  const categories: { id: SkillCategory; label: string; count: number }[] = [
    { id: 'all',      label: 'All Tech',  count: skills.length },
    { id: 'frontend', label: 'Frontend',  count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend',  label: 'Backend',   count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', label: 'Database',  count: skills.filter(s => s.category === 'database').length },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/8 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-900/8 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-900/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
          <SectionBadge variant="purple">My Skills</SectionBadge>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Technologies I Master
          </h2>

          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            A living map of my tech stack — each node a skill, each line a connection.
            <span className="text-indigo-400"> Hover to explore.</span>
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white hover:border-indigo-500/40 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                {cat.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-500'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Constellation Map Container with internal scroll for small screens */}
        <div className="relative rounded-3xl border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 bg-slate-950/40 dark:bg-[#060912]/60 light:bg-white/60 backdrop-blur-sm shadow-2xl p-3 sm:p-6 overflow-x-auto">

          {/* Subtle grid lines inside the panel */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-15 light:opacity-30 pointer-events-none rounded-3xl" />

          <div className="min-w-[900px] lg:min-w-0">
            <SkillConstellation skills={skills} activeCategory={activeCategory} />
          </div>
        </div>

        {/* Bottom hint */}
        <p className="text-center text-[11px] text-slate-600 dark:text-slate-600 light:text-slate-400 mt-4 font-mono tracking-wider uppercase flex items-center justify-center gap-2">
          <span>✦ Hover any node to see details</span>
          <span className="hidden max-sm:inline text-indigo-400 font-semibold">• Scroll horizontally to view full map ✦</span>
          <span className="max-sm:hidden">✦</span>
        </p>

      </div>
    </section>
  );
};
