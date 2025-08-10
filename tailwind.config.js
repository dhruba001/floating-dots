/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gradient-to-br',
    'from-slate-900',
    'from-gray-900', 
    'from-neutral-900',
    'from-stone-900',
    'from-zinc-900',
    'via-purple-900',
    'via-blue-900',
    'via-red-900',
    'via-green-900',
    'via-pink-900',
    'via-indigo-900',
    'via-teal-900',
    'via-orange-900',
    'via-cyan-900',
    'via-violet-900',
    'to-slate-900',
    'to-gray-900',
    'to-neutral-900', 
    'to-stone-900',
    'to-zinc-900'
  ],
  theme: {
    extend: {
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'fade-in-out': 'fadeInOut 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        textShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInOut: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
      backgroundSize: {
        '400': '400% 400%',
        '200': '200% 200%',
      },
      letterSpacing: {
        'wider-2': '2px',
      },
    },
  },
  plugins: [],
}