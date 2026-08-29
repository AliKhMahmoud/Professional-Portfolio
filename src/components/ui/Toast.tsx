import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastProps {
  show: boolean;
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  show,
  message,
  type = 'success',
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl bg-slate-900 border border-slate-700 text-white dark:bg-slate-900 dark:border-slate-700 light:bg-white light:border-slate-200 light:text-slate-900 animate-in fade-in slide-in-from-bottom-5 duration-300">
      {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
      {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
      {type === 'info' && <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />}
      
      <p className="text-sm font-medium pr-2">{message}</p>

      <button
        onClick={onClose}
        className="p-1 rounded-lg hover:bg-slate-800 light:hover:bg-slate-100 text-slate-400 hover:text-slate-200 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
