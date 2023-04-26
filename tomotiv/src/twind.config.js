const colors = require('tailwindcss/colors');
export default {

  theme: {
    extend: {
      fontFamily: {
        sans: `"Lamarkie", "Manrope", "Poppins Inter", ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
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
  plugins: [require('tw-elements/dist/plugin')],
  purge: ['./**/*.tsx', './**/*.css'],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
