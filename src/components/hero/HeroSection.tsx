import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionBadge } from '../ui/SectionBadge';
import { Button } from '../ui/Button';
import { TechIconsRow } from './TechIconsRow';

interface HeroSectionProps {
  onDownloadCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDownloadCV }) => {
  const { profile } = portfolioData;

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-900/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 dark:bg-indigo-900/20 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Text, CTAs & Symmetrical Tech Icons */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div>
              <SectionBadge variant="purple" className="mb-3">
                {profile.roleBadge}
              </SectionBadge>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.14]">
                {profile.headlinePrefix}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-indigo-300 dark:from-purple-400 dark:to-indigo-300 light:from-purple-600 light:to-indigo-600">
                  {profile.headlineHighlight}
                </span>
                <br />
                {profile.headlineSuffix}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl leading-relaxed">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                View My Work
              </Button>


            </div>

            {/* Tech stack badge list: 9 icons in row 1, 8 icons in row 2 */}
            <div className="pt-2">
              <TechIconsRow />
            </div>
          </div>

          {/* Right Column: Visual Avatar */}
          <div className="lg:col-span-5 relative flex justify-center items-center">

            {/* Background glowing circle behind developer */}
            <div className="relative w-[300px] sm:w-[350px] md:w-[390px] aspect-square flex items-center justify-center">

              {/* Vibrant glowing ring */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-violet-400 opacity-80 blur-xl animate-pulse-slow" />

              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 opacity-90" />

              {/* Developer Image in circular frame with subtle overflow */}
              <div className="relative w-[270px] sm:w-[310px] md:w-[340px] h-[320px] sm:h-[370px] md:h-[400px] rounded-full overflow-hidden border-2 border-purple-400/30 shadow-2xl shadow-purple-950/50 z-10">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Modern Floating Status Pill */}
              <div className="absolute -bottom-2 sm:bottom-3 -right-1 sm:right-1 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/95 dark:bg-[#0c101c]/95 light:bg-white/95 border border-slate-700/60 dark:border-slate-800 light:border-slate-200 shadow-xl backdrop-blur-md text-xs font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 animate-float">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for projects</span>
              </div>

              {/* Decorative curved doodle line */}
              <div className="absolute bottom-5 -left-5 z-20 text-purple-400/80 pointer-events-none select-none">
                <svg width="44" height="44" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M 10,40 Q 25,10 40,25 T 30,45" />
                </svg>
              </div>

              {/* Background dot grid pattern */}
              <div className="absolute -top-5 -right-5 w-22 h-22 bg-grid-pattern opacity-40 -z-10 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
