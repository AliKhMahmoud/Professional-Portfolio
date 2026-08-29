/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090d16',
          card: '#0e1424',
          'card-hover': '#141c32',
          border: '#1e293b',
          'border-glow': '#6366f140',
          text: '#f8fafc',
          muted: '#94a3b8',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          'card-hover': '#f1f5f9',
          border: '#e2e8f0',
          'border-glow': '#6366f130',
          text: '#0f172a',
          muted: '#64748b',
        },
        brand: {
          primary: '#6366f1',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          accent: '#a855f7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(99, 102, 241, 0.3)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card-light': '0 10px 30px -10px rgba(100, 116, 139, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
