module.exports = {
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#C09558',
        secondary: '#696E95',
        tertiary: '#F8F3EE',

        alt: {
          1: '#262627',
          2: '#DFE2E6',
          3: '#FFFFFF',
        },
      },
      maxWidth: theme => {
        return {
          'screen-xl': theme('screens.xl'),
        };
      },
      spacing: {
        '44': '11rem',
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(192, 149, 88, 0.5)',
        custom: '0px 4px 16px rgba(0, 0, 0, 0.1)',
      },
    },
    customForms: theme => ({
      default: {
        checkbox: {
          borderRadius: theme('borderRadius.none'),
          '&:focus': {
            borderColor: theme('colors.primary'),
            boxShadow: theme('boxShadow.outline'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
};
