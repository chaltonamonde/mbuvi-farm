/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          page: '#07130E',          /* Page background: near-black green */
          section: '#0B1F17',       /* Section alternate background */
          surface: '#0F2A1F',       /* Card / surface background */
          surfaceAlt: '#14382A',    /* Elevated interactive surface */
          border: '#1E4D38',        /* 1px borders */
          primary: '#22C55E',       /* Primary green highlights & buttons */
          primaryHover: '#16A34A',  /* Primary green hover */
          deep: '#14532D',          /* Deep green for headings accents & footers */
          accent: '#38BDF8',        /* Sky blue accents, icons, links, glows */
          accentHover: '#7DD3FC',   /* Sky blue hover */
          textPrimary: '#F0FDF4',   /* Primary light text */
          textSecondary: '#A7C4B5', /* Secondary sage text */
          textMuted: '#6B8F7E',     /* Muted slate-green captions */
          success: '#22C55E',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        farm: {
          deep: '#14532D',
          medium: '#1E4D38',
          accent: '#22C55E',
          light: '#14382A',
        },
        sky: {
          deep: '#0369A1',
          primary: '#38BDF8',
          light: '#7DD3FC',
          soft: '#BAE6FD',
          tint: '#0C2A38',
        },
        neutral: {
          ink: '#F0FDF4',           /* Inverted for dark theme readability */
          muted: '#A7C4B5',
          subtle: '#6B8F7E',
          border: '#1E4D38',        /* Target border */
          mint: '#07130E',          /* Target near-black green base */
          surface: '#0F2A1F',       /* Target card surface */
          surfaceAlt: '#0B1F17',    /* Target section alternate */
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #14532D 0%, #22C55E 50%, #38BDF8 100%)',
        'hero-dark-overlay': 'linear-gradient(135deg, rgba(7, 19, 14, 0.94) 0%, rgba(20, 83, 45, 0.88) 50%, rgba(14, 60, 85, 0.85) 100%)',
        'card-gradient': 'linear-gradient(145deg, #0F2A1F 0%, #0B1F17 100%)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px #1E4D38',
        card: '0 4px 20px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px #1E4D38',
        cardHover: '0 12px 30px -8px rgba(34, 197, 94, 0.18), 0 0 0 1px #38BDF8',
        glow: '0 0 24px -4px rgba(34, 197, 94, 0.35)',
        skyGlow: '0 0 24px -4px rgba(56, 189, 248, 0.35)',
      },
      borderRadius: {
        'farm-sm': '8px',
        'farm-md': '14px',
        'farm-lg': '20px',
        'farm-xl': '28px',
      },
      animation: {
        'drift': 'drift 18s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(15px, 20px) scale(1.05)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.95', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
