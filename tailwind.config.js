/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'visa-blue': '#445fae',
        'zinc-grey': '#222',
        'start-color': '#0075e3',
        'end-color': '#cbe3f9',
        'load-more': '#7a7a7a',
        'sign-up-hover': '#285ba3',
        'footer-blue': '#4385E0',
      },
      margin: {
        '10px': '10px',
      },
      fontSize: {
        'star': '.9375rem',
        xs: '.625rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      fontFamily: {
        sans: ['Prompt', 'Helvetica', 'Arial', 'sans-serif'],
        times: ['Times']
      },
      lineHeight: {
        'star': '1.3125rem',
      },
      letterSpacing: {
        wider: '.08em',
        '3px': '3px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #0075e3 var(calc(var(4.5) / 5* 100%)), #cbe3f9 var(calc(var(4.5) / 5* 100%)));',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-text': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }

      addUtilities(newUtilities)
    }
  ],
};
