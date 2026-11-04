/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayur: {
          primary: '#174C32',      // Deep forest green
          primaryLight: '#216343', // Medium forest green
          primaryDark: '#0e3120',  // Darker forest green
          secondary: '#78966B',    // Sage green
          secondaryLight: '#94b387',
          secondarySoft: '#EBF2E8', // Light sage tint
          bg: '#FAF7EE',           // Warm ivory
          ivoryDark: '#F2ECE0',    // Slightly deeper ivory for borders/contrasts
          card: '#FFFFFF',         // Crisp White
          accent: '#C49A45',       // Muted gold
          accentLight: '#dfb768',  // Light gold
          accentGlow: 'rgba(196, 154, 69, 0.18)',
          text: '#242B25',         // Dark charcoal
          textMuted: '#58635B',    // Muted text
          textLight: '#7E8A81',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sanskrit: ['"Cinzel Decorative"', '"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'ayur-sm': '0 2px 8px -2px rgba(23, 76, 50, 0.08), 0 1px 4px -1px rgba(196, 154, 69, 0.06)',
        'ayur-md': '0 8px 24px -4px rgba(23, 76, 50, 0.1), 0 4px 12px -2px rgba(196, 154, 69, 0.08)',
        'ayur-lg': '0 16px 36px -6px rgba(23, 76, 50, 0.14), 0 6px 16px -3px rgba(196, 154, 69, 0.12)',
        'ayur-gold': '0 4px 20px 0 rgba(196, 154, 69, 0.25)',
      }
    },
  },
  plugins: [],
}
