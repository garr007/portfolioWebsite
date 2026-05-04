/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#121212',
        'amber-gold': '#F59E0B',
        'amber-gold-dark': '#D97706',
        'amber-gold-light': '#FBBF24',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
      },
    },
  },
  plugins: [],
}
