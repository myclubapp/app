module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

    },
    colors:{
      primary: {
        default: 'var(--ion-color-primary)',
        shade: 'var(--ion-color-primary-shade)',
        tint: 'var(--ion-color-primary-tint)',
      },
      secondary: {
        default: 'var(--ion-color-secondary)',
        shade: 'var(--ion-color-secondary-shade)',
        tint: 'var(--ion-color-secondary-tint)',
      },
      tertiary: {
        default: 'var(--ion-color-tertiary)',
        shade: 'var(--ion-color-tertiary-shade)',
        tint: 'var(--ion-color-tertiary-tint)',
      },
      success: {
        default: 'var(--ion-color-success)',
        shade: 'var(--ion-color-success-shade)',
        tint: 'var(--ion-color-success-tint)',
      },
      warning: {
        default: 'var(--ion-color-warning)',
        shade: 'var(--ion-color-warning-shade)',
        tint: 'var(--ion-color-warning-tint)',
      },
      danger: {
        default: 'var(--ion-color-danger)',
        shade: 'var(--ion-color-danger-shade)',
        tint: 'var(--ion-color-danger-tint)',
      } ,
      light: {
        default: 'var(--ion-color-light)',
        shade: 'var(--ion-color-light-shade)',
        tint: 'var(--ion-color-light-tint)',
      },
      medium: {
        default: 'var(--ion-color-medium)',
        shade: 'var(--ion-color-medium-shade)',
        tint: 'var(--ion-color-medium-tint)',
      },
      dark: {
        default: 'var(--ion-color-dark)',
        shade: 'var(--ion-color-dark-shade)',
        tint: 'var(--ion-color-dark-tint)',
      }
    }
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
