import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { useActiveSection } from '../../hooks/useActiveSection';

import { portfolioData } from '../../data/portfolioData';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = portfolioData;

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const activeSection = useActiveSection(['home', 'about', 'skills', 'projects', 'contact'], 120);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'py-3.5 bg-slate-950/80 dark:bg-[#070a12]/85 light:bg-white/85 backdrop-blur-md border-b border-slate-800/60 dark:border-slate-800/80 light:border-slate-200/80 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-indigo-500 text-white shadow-md shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <span className="font-mono font-bold text-xl tracking-wider">A</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white dark:text-white light:text-slate-900 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors font-mono flex items-center">
                <span className="text-indigo-400 font-normal mr-0.5">&lt;</span>
                <span>{profile.name.split(' ')[0]}</span>
                <span className="text-purple-400">.dev</span>
                <span className="text-indigo-400 font-normal ml-0.5">/&gt;</span>
              </span>
              <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-400 light:text-slate-500 tracking-wider uppercase -mt-1 hidden sm:block">
                Full Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-100/80 px-4 py-1.5 rounded-full border border-slate-800/60 dark:border-slate-800/80 light:border-slate-200/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive
                      ? 'text-white dark:text-white light:text-indigo-600 bg-indigo-600/20 dark:bg-indigo-600/30 light:bg-white shadow-sm font-semibold'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              href="#contact"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu & Theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-800 dark:border-slate-800 light:border-slate-200 bg-slate-900/60 dark:bg-slate-900/80 light:bg-white text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-3 pb-6 bg-slate-950/95 dark:bg-[#090d16]/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-800 dark:border-slate-800 light:border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${isActive
                      ? 'text-white dark:text-white light:text-indigo-600 bg-indigo-600/20 dark:bg-indigo-600/30 light:bg-indigo-50 font-semibold'
                      : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3">
              <Button
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};