import React from 'react';
import { Quote } from 'lucide-react';
import type { TestimonialItem } from '../../types/portfolio';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative p-6 rounded-2xl bg-slate-900/60 dark:bg-[#0d1222]/80 light:bg-white border border-slate-800/80 dark:border-slate-800 light:border-slate-200/80 shadow-md">
      {/* Big Quote Icon Header */}
      <div className="flex items-center justify-start mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400">
          <Quote className="w-4 h-4 fill-indigo-400" />
        </div>
      </div>

      {/* Quote text */}
      <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed italic mb-5">
        "{testimonial.quote}"
      </p>

      {/* Author details */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60 dark:border-slate-800 light:border-slate-100">

        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white dark:text-white light:text-slate-900 leading-tight">
            {testimonial.author}
          </h4>
          <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};
