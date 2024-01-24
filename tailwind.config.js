/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black-noise': '#151515',
        'silver': "#adadad",
        'stone': "#303030",
        'coffee': {
          '50': '#fdf6ef',
          '100': '#fbe9d9',
          '200': '#f6d0b2',
          '300': '#f0b181',
          '400': '#e78044',
          '500': '#e3682c',
          '600': '#d45022',
          '700': '#b03c1e',
          '800': '#8d321f',
          '900': '#722b1c',
          '950': '#3d130d',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
