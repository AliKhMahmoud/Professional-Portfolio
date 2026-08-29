import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Mail, User, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Button } from '../ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti effect
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899'],
        });
      } catch (err) {
        // ignore if not supported
      }

      onSuccessToast("Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.");

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onClose();
      }, 2200);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 dark:bg-[#0d1222] light:bg-white border border-slate-700/80 dark:border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-2xl shadow-purple-950/40 z-10 animate-in zoom-in-95 duration-300">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
              Message Sent!
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xs mx-auto">
              Thank you for reaching out. I'll review your project details and reply promptly to your inbox.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Start A Conversation
              </span>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                Let's Build Something Great
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
                Send a message directly, or reach me at <span className="text-indigo-400 font-medium">ali.mahmoud.135246@gmail.com</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ali Khuder"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ali.mahmoud.135246@gmail.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Project Type / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 transition-all"
                >
                  <option value="" className="bg-slate-900 text-slate-400">Select project scope</option>
                  <option value="Full-Stack Application" className="bg-slate-900 text-white">Full-Stack Web App Development</option>
                  <option value="Frontend UI/UX" className="bg-slate-900 text-white">Frontend / React Architecture</option>
                  <option value="Backend API & Microservices" className="bg-slate-900 text-white">Backend & Cloud Microservices</option>
                  <option value="Freelance Consultation" className="bg-slate-900 text-white">Freelance or Full-time Role</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me a bit about your project goals, timeline, and vision..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};