/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAF7F2',
          secondary: '#F5F1EA',
          dark: '#0D0D0D',
          'dark-secondary': '#1A1A1A',
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
          'dark-primary': '#F5F5F5',
          'dark-secondary': '#A3A3A3',
        },
        accent: {
          DEFAULT: '#B7791F',
          hover: '#A16207',
          light: '#D4A94A',
        },
        card: {
          light: '#FFFFFF',
          dark: '#141414',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};
