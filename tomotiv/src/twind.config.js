const colors = require('tailwindcss/colors');
export default {
  content: [
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{ts,tsx,jsx}',
    './public/**/*.html',
  ],
  plugins: [require('flowbite/plugin')],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
  ],
  darkMode: 'class',
  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  theme: {
    colors: {
      black: colors.black,
      red: colors.red,
      gray: colors.gray,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      stone: colors.stone,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        slate: colors.slate,
        stone: colors.stone,
        blue: {
          default: '#2A19FF',
          L20: '#5547ff',
          L60: '#aaa3ff',
          D20: '#2214cc',
          D60: '#110a66',
          D80: '#080533',
        },

        //          --accent: #EE4444;

        //   --blue: #2A19FF;
        //   --blueL20:#5547ff;
        //   --blueL60:#aaa3ff;
        //   --blueD20:#2214cc;
        //   --blueD60:#110a66;
        //   --blueD80:#080533;

        // --black-color: #000;
        // --white-color: #fff;
        // --gray-color: #ccc;
      },
      container: {
        center: true,
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      fontSize: {
        small: '1rem',
        medium: '1.125rem',
        large: '1.75rem',
        xlarge: '2rem',
        huge: 'clamp(2.25rem, 4vw, 2.75rem)',
        gigantic: 'clamp(2.75rem, 6vw, 3.25rem)',
        colossal: 'clamp(3.25rem, 8vw, 6.25rem)',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },

  purge: ['./**/*.tsx', './**/*.css'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
