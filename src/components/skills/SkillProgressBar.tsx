import React from 'react';
import type { SkillItem } from '../../types/portfolio';
import {
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  GitIcon,
  TailwindIcon,
  ReduxIcon,
  RtkQueryIcon,
  ExpressIcon,
  MongodbIcon,
  PostgresIcon,
  PrismaIcon,
  RestApiIcon,
  WebSocketsIcon,
  DockerIcon,
} from '../ui/BrandIcons';
import { Database } from 'lucide-react';

interface SkillProgressBarProps {
  skill: SkillItem;
}

export const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ skill }) => {
  const renderSkillIcon = () => {
    switch (skill.icon) {
      case 'html':
        return <Html5Icon className="w-4 h-4" />;
      case 'css':
        return <Css3Icon className="w-4 h-4" />;
      case 'javascript':
        return <JavaScriptIcon className="w-4 h-4" />;
      case 'typescript':
        return <TypeScriptIcon className="w-4 h-4" />;
      case 'react':
        return <ReactIcon className="w-4 h-4" />;
      case 'nextjs':
        return <NextjsIcon className="w-4 h-4" />;
      case 'nodejs':
        return <NodejsIcon className="w-4 h-4" />;
      case 'tailwind':
        return <TailwindIcon className="w-4 h-4" />;
      case 'redux':
        return <ReduxIcon className="w-4 h-4" />;
      case 'rtk':
        return <RtkQueryIcon className="w-4 h-4" />;
      case 'express':
        return <ExpressIcon className="w-4 h-4" />;
      case 'mongodb':
        return <MongodbIcon className="w-4 h-4" />;
      case 'prisma':
        return <PrismaIcon className="w-4 h-4" />;
      case 'git':
        return <GitIcon className="w-4 h-4" />;
      case 'database':
      case 'postgres':
        return <PostgresIcon className="w-4 h-4" />;
      case 'docker':
        return <DockerIcon className="w-4 h-4" />;
      case 'api':
      case 'rest':
        return <RestApiIcon className="w-4 h-4" />;
      case 'websocket':
      case 'websockets':
        return <WebSocketsIcon className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="group p-4 rounded-xl bg-slate-900/40 dark:bg-[#0c101d]/60 light:bg-white border border-slate-800/80 dark:border-slate-800 light:border-slate-200/80 hover:border-indigo-500/40 transition-all duration-300">
      <div className="flex items-center justify-between mb-2.5">
        {/* Left: Icon & Skill Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 flex items-center justify-center border border-slate-700/50 dark:border-slate-700 light:border-slate-200 group-hover:scale-105 transition-transform">
            {renderSkillIcon()}
          </div>
          <span className="text-sm font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
            {skill.name}
          </span>
        </div>

        {/* Right: Percentage */}
        <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
          {skill.percentage}%
        </span>
      </div>

      {/* Progress Bar Track & Fill */}
      <div className="w-full h-2 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 overflow-hidden p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 shadow-sm shadow-indigo-500/50 transition-all duration-1000 ease-out group-hover:brightness-110"
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );
};
