import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      // إظهار الزر عندما ينزل المستخدم قليلاً في الصفحة
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950/60 dark:bg-[#070a12]/80 light:bg-slate-50 py-8 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
            <div>
              © {currentYear} {portfolioData.profile.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 backdrop-blur-md border border-slate-800 dark:border-slate-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-indigo-600 hover:border-slate-700 shadow-xl shadow-black/20 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-3"
          aria-label="Scroll to top"
        >
          <span className="text-xs font-medium">Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
};