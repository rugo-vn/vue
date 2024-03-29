import { createTheme } from './lib/theme.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './lib/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@rugo-vn/vue/lib/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: createTheme(),
  plugins: []
};
