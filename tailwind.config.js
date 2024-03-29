/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
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
      top: ['after', 'before'],


      colors: {
        'visa-blue': '#445fae',
        'zinc-grey': '#222222ed',
        'zinc-grey-header': '#222',
        'start-color': '#0075e3',
        'end-color': '#cbe3f9',
        'load-more': '#7a7a7a',
        'sign-up-hover': '#285ba3',
        'footer-blue': '#4385E0',
        'prop-details-grey': '#6a7889',
        'deep-grey': '#444',
        'helpful-color': '#ebf6fc',
        'stay-in-touch': '#222222',
        'footer-grey': '#253b56',
        'copyright': '#5b6c7d',
        'dark-charcoal': '#333333',

      },
      margin: {
        '10px': '10px',
        '5px': '5px',
        '13.5px': '13.5px',
        '30px': '30px',
        '70px': '70px',
        '165.5px': '165.5px',
        '0.5625rem': '0.5625rem',
        '0.9375em': '0.9375em',
        'header': '0.84375rem',
      },
      padding: {
        '5px': '5px',
        '10px': '10px',
        '13px': '13px',
        '15px': '15px',
        '20px': '20px',
        '21px': '21px',
        '25px': '25px',
        '30px': '30px',
        '41px': '41px',
        '45px': '45px',
        '60px': '60px',
        '63px': '63px',
        '81px': '81px',
        '150px': '150px',
        '50px': '50px',
      },
      boxShadow: {
        'helpful': 'inset 0 0 5px rgba(0, 0, 0, 0.2'
      },
      fontSize: {
        'star': '.9375rem',
        xs: '.625rem',
        s: '.75rem',
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'smol': '17px',
        'hundred': '5.9375rem',
        'header-bullet': '2.8125rem'
      },
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        AvenirNext: ['AvenirNext', 'Helvetica', 'Arial', 'sans-serif'],
        AvenirNextLight: ['AvenirNextLight', 'AvenirNext', 'Helvetica', 'Arial', 'sans-serif'],
        times: ['Times']
      },
      fontWeight: {
        '500': '500',
      },
      width: {
        'unset': 'unset',
        '1px': '1px',
      },
      height: {
        '90%': '90%',
      },
      maxWidth: {
        'unset': 'unset',
      },
      lineHeight: {
        'star': '1.3125rem',
        'review-number': '1.375rem',
      },
      borderWidth: {
        '1px': '1px',
        '5px': '5px',
      },
      spacing: {
        'neg-1px': '-1px',
        'neg-30px': '-30px',
        'neg-24px': '-24px',
        'neg-15': '-15px',
        '19px': '-19px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '30px': '30px',
        '50px': '50px',
        '108px': '108px',
        '113px': '113px',
        '280px': '280px',
        '292px': '292px',
        '300px': '300px',
        '346px': '346px',
        '384px': '384px',
        '424px': '424px',
        '576px': '576px',
        '588px': '588px',
        '5%': '5%'
      },
      letterSpacing: {
        wider: '.08em',
        '3px': '3px',
        '.048px': '.048px',
      },
      backgroundImage: {
        'sticky-gradient': 'linear-gradient(144.33deg, #f8f8f8 28.01%, #fff 98.8%)',
        'custom-gradient': 'linear-gradient(90deg, #0075e3 var(--percent), #cbe3f9 var(--percent))',
        'read-more-gradient': 'linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        '899': '899',
        '1250': '1250',
      },
      borderRadius: {
        '3px': '3px',
      },
      transitionProperty: {
        'w': 'width 80%',
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      }
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('flowbite/plugin'),
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
