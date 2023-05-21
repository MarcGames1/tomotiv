/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        tomotiv: {
          primary: '#51b14d',
          secondary: '#435561',
          accent: '#fc1b50',
          neutral: '#f0f0f0',
          'base-100': '#ffffff',
          info: '#29BFE0',
          success: '#67DABA',
          warning: '#A56612',
          error: '#EE1749',
        },
      },

      'night',
    ],
    daisyui: {
      styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
    },
  },
};
