import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'purple' | 'blue' | 'cyan';
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  className = '',
  variant = 'purple',
}) => {
  const variantStyles = {
    purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/40',
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/40',
    cyan: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800/40',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border shadow-sm ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
};
