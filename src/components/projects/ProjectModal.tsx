import React, { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Layers } from 'lucide-react';
import type { ProjectItem } from '../../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Build the final gallery: prefer project.images, fallback to single image
  const gallery = project?.images && project.images.length > 0
    ? project.images
    : project
    ? [project.image]
    : [];

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, goNext, goPrev]);

  // Reset slider index when project changes
  useEffect(() => {
    setActiveIndex(0);
  }, [project?.id]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container - much larger */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-3xl bg-slate-900 dark:bg-[#0c111e] light:bg-white border border-slate-700/60 dark:border-slate-800 light:border-slate-200 shadow-2xl shadow-purple-950/50 z-10 animate-in zoom-in-95 duration-300">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:scale-110 transition-all border border-slate-700/50 light:border-slate-200 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ── Image Slider ─────────────────────────────────────────── */}
        <div className="relative w-full bg-slate-950 overflow-hidden rounded-t-3xl" style={{ aspectRatio: '16 / 9' }}>
          {/* Slides — absolute-stacked, fade transition */}
          {gallery.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={src}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-[#0c111e]/80 light:from-white/60 via-transparent to-transparent pointer-events-none" />

          {/* Project badge */}
          <div className="absolute bottom-4 left-6 z-10">
            <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-600/90 text-white shadow-lg backdrop-blur-sm">
              Project {project.index}
            </span>
          </div>

          {/* Navigation arrows — only show if > 1 image */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-slate-700/60 hover:scale-105 transition-all backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white border border-slate-700/60 hover:scale-105 transition-all backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {gallery.length > 1 && (
            <div className="absolute bottom-4 right-6 z-10 flex items-center gap-1.5">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-5 h-2 bg-white'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Thumbnail strip (if gallery has images) ──────────── */}
        {gallery.length > 1 && (
          <div className="flex gap-2 px-6 pt-4 pb-1 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
            {gallery.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  idx === activeIndex
                    ? 'border-indigo-500 scale-105'
                    : 'border-slate-700/50 dark:border-slate-700 light:border-slate-200 opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}

        {/* ── Modal Body ─────────────────────────────────────────── */}
        <div className="p-6 sm:p-8 space-y-6">

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-bold tracking-wider text-indigo-400 uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Key Architecture & Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 p-3 rounded-xl bg-slate-800/40 dark:bg-slate-800/50 light:bg-slate-50 border border-slate-700/50 dark:border-slate-800 light:border-slate-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" /> Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-slate-700 light:border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
