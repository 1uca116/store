/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    colors: {
      white: generateColorClass('color-white'),
      black: generateColorClass('color-black'),
      scarpaGray: generateColorClass('color-scarpa-flow'),
      shuttleGray: generateColorClass('color-shuttle-gray'),
      nevada: generateColorClass('color-nevada'),
      trout: generateColorClass('color-trout'),
      marengo: generateColorClass('color-marengo'),
      brightGray: generateColorClass('color-bright-gray'),
      lightGunmetal: generateColorClass('color-light-gunmetal'),
      steelGray: generateColorClass('color-steel-gray'),
      darkGunmetal: generateColorClass('color-dark-gunmetal'),
      pastelGreen: generateColorClass('color-pastel-green'),
      lightSalmon: generateColorClass('color-light-salmon'),
      gold: generateColorClass('color-gold'),

      neutral: {
        200: generateColorClass('color-neutral-200'),
        300: generateColorClass('color-neutral-300'),
        400: generateColorClass('color-neutral-400'),
        500: generateColorClass('color-neutral-500')
      },
      transparent: 'transparent',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        1400: '1400px',
      },
    },
  },
  plugins: [],
};

function generateColorClass(variable) {
  return ({ opacityValue }) =>
      opacityValue
          ? `rgba(var(--${variable}), ${opacityValue})`
          : `rgb(var(--${variable}))`;
}
