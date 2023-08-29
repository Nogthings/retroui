/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   plugins: [],
// }

export const darkMode = 'class';
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'primary': '#f4fc99',
      'secondary': '#f711dc',
      'accent': '#037ca8',
      'neutral': '#1c1c1c',
      'base-100': '#38424b',
      'info': '#82bff8',
      'success': '#55ecd0',
      'warning': '#9d5e07',
      'error': '#f844978',
    },
    fontFamily: {
      jetbrains: ['"JetBrains Mono"', 'monospace'],
      start: ['"Press Start 2P"', 'cursive']
    },
  },
};

