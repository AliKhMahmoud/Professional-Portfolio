import React from 'react';
import {
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  TailwindIcon,
  ReduxIcon,
  RtkQueryIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  PostgresIcon,
  PrismaIcon,
  RestApiIcon,
  WebSocketsIcon,
  GitIcon,
  GithubIcon,
} from '../ui/BrandIcons';

export const TechIconsRow: React.FC = () => {
  // Row 1: 9 icons
  const row1 = [
    { name: 'HTML5', icon: <Html5Icon className="w-5 h-5" />, bg: 'hover:border-[#E34F26]/60' },
    { name: 'CSS3', icon: <Css3Icon className="w-5 h-5" />, bg: 'hover:border-[#1572B6]/60' },
    { name: 'JavaScript', icon: <JavaScriptIcon className="w-5 h-5" />, bg: 'hover:border-[#F7DF1E]/60' },
    { name: 'TypeScript', icon: <TypeScriptIcon className="w-5 h-5" />, bg: 'hover:border-[#3178C6]/60' },
    { name: 'React', icon: <ReactIcon className="w-5 h-5" />, bg: 'hover:border-[#61DAFB]/60' },
    { name: 'Tailwind CSS', icon: <TailwindIcon className="w-5 h-5" />, bg: 'hover:border-[#06B6D4]/60' },
    { name: 'Redux', icon: <ReduxIcon className="w-5 h-5" />, bg: 'hover:border-[#764ABC]/60' },
    { name: 'RTK Query', icon: <RtkQueryIcon className="w-5 h-5" />, bg: 'hover:border-[#764ABC]/60' },
    { name: 'Node.js', icon: <NodejsIcon className="w-5 h-5" />, bg: 'hover:border-[#539E43]/60' },
  ];

  // Row 2: 8 icons
  const row2 = [
    { name: 'Express.js', icon: <ExpressIcon className="w-5 h-5" />, bg: 'hover:border-slate-400' },
    { name: 'MongoDB', icon: <MongodbIcon className="w-5 h-5" />, bg: 'hover:border-[#47A248]/60' },
    { name: 'PostgreSQL', icon: <PostgresIcon className="w-5 h-5" />, bg: 'hover:border-[#4169E1]/60' },
    { name: 'Prisma', icon: <PrismaIcon className="w-5 h-5" />, bg: 'hover:border-[#2D3748]/60' },
    { name: 'REST API', icon: <RestApiIcon className="w-5 h-5" />, bg: 'hover:border-blue-400' },
    { name: 'WebSockets', icon: <WebSocketsIcon className="w-5 h-5" />, bg: 'hover:border-amber-400' },
    { name: 'Git', icon: <GitIcon className="w-5 h-5" />, bg: 'hover:border-[#F05032]/60' },
    { name: 'GitHub', icon: <GithubIcon className="w-5 h-5" />, bg: 'hover:border-slate-300' },
  ];

  return (
    <div className="pt-2">
      <p className="text-[11px] font-semibold tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase mb-2.5">
        Technologies I work with
      </p>

      <div className="flex flex-col gap-2.5">
        {/* Row 1: 9 Symmetrical Icons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {row1.map((tech) => (
            <div
              key={tech.name}
              className={`group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/80 light:bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 cursor-default ${tech.bg}`}
            >
              <div className="transition-transform duration-200 group-hover:scale-105">
                {tech.icon}
              </div>

              {/* Tooltip */}
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 border border-slate-700">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 8 Symmetrical Icons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {row2.map((tech) => (
            <div
              key={tech.name}
              className={`group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/80 light:bg-white shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 cursor-default ${tech.bg}`}
            >
              <div className="transition-transform duration-200 group-hover:scale-105">
                {tech.icon}
              </div>

              {/* Tooltip */}
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 px-2 py-0.5 bg-slate-900 text-white text-[10px] font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 border border-slate-700">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
