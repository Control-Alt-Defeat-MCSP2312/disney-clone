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
      },
      zIndex: {
        '900': '900', 
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
        sans: ['AvenirNext', 'Helvetica', 'Arial', 'sans-serif'],
        times: ['Times']
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.200', 'currentColor'),
        custom: 'rgba(0, 0, 0, 0.1)',
      }),
      borderWidth: {
        '1.25': '1.25px', 
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
      },
      colors: {
        'visa-blue': '#445fae',
        'sign-up-blue': '#0075e3',
        'sign-up-hover': '#285ba3',
        'footer-blue': '#4385E0',
      },
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
