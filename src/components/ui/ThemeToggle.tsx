import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative p-2.5 rounded-xl transition-all duration-300 border border-slate-700/60 dark:border-slate-800 bg-slate-800/60 dark:bg-slate-900/80 hover:bg-slate-700/70 dark:hover:bg-slate-800 text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white shadow-sm hover:shadow-indigo-500/20 active:scale-95 group light:bg-slate-100 light:border-slate-200 light:text-slate-700 light:hover:bg-slate-200 light:hover:text-slate-900 ${className}`}
      title={isDark ? 'التبديل إلى الوضع النهاري (Light Mode)' : 'التبديل إلى الوضع الليلي (Dark Mode)'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transform transition-transform duration-500 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transform transition-transform duration-500 -rotate-12 group-hover:rotate-0" />
        )}
      </div>
    </button>
  );
};
