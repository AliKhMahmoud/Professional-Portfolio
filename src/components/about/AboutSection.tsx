import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { SectionBadge } from '../ui/SectionBadge';
import { StatCard } from './StatCard';

const cvImages = ['/images/cv/1.png', '/images/cv/2.png'];
const cvDriveUrl = 'https://drive.google.com/file/d/1Jsd0epAkjUNbKA0T0uMHRQCUlT2bMJDD/view?usp=sharing';

// ── Inline CV Slider Lightbox ────────────────────────────────
interface CvLightboxProps {
  startIndex: number;
  onClose: () => void;
}

const CvLightbox: React.FC<CvLightboxProps> = ({ startIndex, onClose }) => {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + cvImages.length) % cvImages.length);
  const next = () => setIdx((i) => (i + 1) % cvImages.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/90 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-105"
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 sm:left-8 z-10 p-3 rounded-full bg-slate-900/80 text-white border border-slate-700 hover:bg-slate-800 hover:scale-105 transition-all backdrop-blur-sm"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image */}
      <img
        src={cvImages[idx]}
        alt={`CV page ${idx + 1}`}
        className="max-h-[90vh] max-w-[85vw] rounded-2xl shadow-2xl object-contain select-none"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 sm:right-8 z-10 p-3 rounded-full bg-slate-900/80 text-white border border-slate-700 hover:bg-slate-800 hover:scale-105 transition-all backdrop-blur-sm"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 flex gap-2">
        {cvImages.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIdx(i); }}
            className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  );
};

// ── About Section ─────────────────────────────────────────────
export const AboutSection: React.FC = () => {
  const { profile, stats } = portfolioData;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ── Left: Short bio + compact stats ── */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div>
              <SectionBadge variant="blue" className="mb-3">About Me</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight mt-2">
                {profile.aboutTitle}
              </h2>
            </div>

            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-lg">
              {profile.aboutDescription}
            </p>

            {/* Compact 4-col stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {stats.map((stat) => (
                <StatCard key={stat.id} stat={stat} compact />
              ))}
            </div>
          </div>

          {/* ── Right: CV images + Drive button ── */}
          <div className="lg:col-span-6 flex flex-col items-center gap-4">
            <p className="self-start text-xs font-semibold tracking-widest text-slate-400 dark:text-slate-400 light:text-slate-500 uppercase">
              My Resume / CV
            </p>

            {/* Two large CV thumbnails side by side */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {cvImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden border-2 border-slate-700/60 dark:border-slate-700 light:border-slate-200 hover:border-indigo-500/70 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1 cursor-zoom-in bg-slate-950"
                  aria-label={`View CV page ${idx + 1}`}
                >
                  <img
                    src={src}
                    alt={`CV page ${idx + 1}`}
                    className="w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/8 transition-colors flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100">
                    <span className="text-[11px] font-semibold text-white bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                      Page {idx + 1} — click to enlarge
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Google Drive button */}
            <a
              href={cvDriveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              View & Download CV on Google Drive
            </a>
          </div>

        </div>
      </div>

      {/* Inline slider lightbox */}
      {lightboxIndex !== null && (
        <CvLightbox
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};
