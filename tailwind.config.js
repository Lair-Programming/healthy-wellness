/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#16A34A',
          'green-dark': '#15803D',
          'green-light': '#22C55E',
          'green-50': '#F0FDF4',
          'green-100': '#DCFCE7',
          'green-200': '#BBF7D0',
          'green-600': '#16A34A',
          'green-700': '#15803D',
          'green-800': '#166534',
        },
        accent: {
          orange: '#F97316',
          'orange-dark': '#EA580C',
          'orange-light': '#FB923C',
          'orange-50': '#FFF7ED',
          'orange-100': '#FFEDD5',
        },
        surface: {
          light: '#F8FAFC',
          white: '#FFFFFF',
        },
        ink: {
          dark: '#0F172A',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(15, 23, 42, 0.06)',
        card: '0 4px 24px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 40px rgba(15, 23, 42, 0.12)',
        glow: '0 8px 32px rgba(22, 163, 74, 0.18)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
