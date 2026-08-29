import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { SectionBadge } from '../ui/SectionBadge';
import { SkillProgressBar } from './SkillProgressBar';
import type { SkillCategory } from '../../types/portfolio';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const { skills } = portfolioData;

  const categories: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps & Tools' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <SectionBadge variant="purple">
            My Skills
          </SectionBadge>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Technologies I Master
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Crafting scalable software using cutting-edge technologies, modern frameworks, and robust architectural patterns.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
                    : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-800 dark:border-slate-800 light:border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillProgressBar key={skill.id} skill={skill} />
          ))}
        </div>

      </div>
    </section>
  );
};
