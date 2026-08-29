import React from 'react';
import { Calendar, Code2, Smile, Trophy, Users, Star } from 'lucide-react';
import type { StatItem } from '../../types/portfolio';

interface StatCardProps {
  stat: StatItem;
  compact?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, compact = false }) => {
  const getIcon = () => {
    const iconClass = compact ? 'w-4 h-4 text-white' : 'w-5 h-5 text-white';
    switch (stat.icon) {
      case 'calendar':
        return <Calendar className={iconClass} />;
      case 'code':
        return <Code2 className={iconClass} />;
      case 'smile':
        return <Smile className={iconClass} />;
      case 'trophy':
        return <Trophy className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      default:
        return <Star className={iconClass} />;
    }
  };

  if (compact) {
    return (
      <div className="group relative p-3.5 rounded-xl bg-slate-900/60 dark:bg-[#0d1222]/80 light:bg-white border border-slate-800/80 dark:border-slate-800 light:border-slate-200/80 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-0.5 text-center">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex flex-col items-center gap-2">
          {/* Icon */}
          <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color ?? 'from-indigo-600 to-purple-600'} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
            {getIcon()}
          </div>
          {/* Value */}
          <div className="text-xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
            {stat.value}
          </div>
          {/* Label */}
          <div className="text-[10px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-500 leading-tight">
            {stat.label}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative p-5 rounded-2xl bg-slate-900/60 dark:bg-[#0d1222]/80 light:bg-white border border-slate-800/80 dark:border-slate-800 light:border-slate-200/80 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Ambient hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-center gap-4">
        {/* Icon container */}
        <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color ?? 'from-indigo-600 to-purple-600'} shadow-md shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-300`}>
          {getIcon()}
        </div>

        {/* Text info */}
        <div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-500">
            {stat.label}
          </div>
        </div>
      </div>
    </div>
  );
};
