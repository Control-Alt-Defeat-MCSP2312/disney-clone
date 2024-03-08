/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['after', 'before'],
      display: ['after', 'before'],
      height: ['after', 'before'],
      width: ['after', 'before'],
      position: ['after', 'before'],
      bottom: ['after', 'before'],
      left: ['after', 'before'],
      letterSpacing: ['after', 'before'],
      backgroundImage: ['after', 'before'],

      colors: {
        'visa-blue': '#445fae',
        'zinc-grey': '#222',
        'start-color': '#0075e3',
        'end-color': '#cbe3f9',
        'load-more': '#7a7a7a',
        'sign-up-hover': '#285ba3',
        'footer-blue': '#4385E0',
        'helpful-color': '#ebf6fc'
      },
      margin: {
        '10px': '10px',
        '5px': '5px',
      },
      padding: {
        '5px': '5px',
        '10px': '10px',
        '25px': '25px',
      },
      boxShadow: {
        'helpful': 'inset 0 0 5px rgba(0, 0, 0, 0.2'
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
        'review-number': '1.375rem'
      },
      spacing: {
        '19px': '-19px',
        '4px': '4px',
      },
      letterSpacing: {
        wider: '.08em',
        '3px': '3px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #0075e3 var(--percent), #cbe3f9 var(--percent))',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
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
