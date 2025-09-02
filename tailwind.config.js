/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'font-comic',
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: [
          'Comic Sans MS',
          'Comic Sans',
          'cursive',
          'sans-serif',
        ],
      },
      colors: {
        sciFiBlue: '#00eaff',
        sciFiPink: '#ff00c8',
        sciFiYellow: '#ffe600',
        sciFiBlack: '#1a1a1a',
      },
      boxShadow: {
        comic: '4px 4px 0px 0px #000',
      },
    },
  },
  plugins: [],
}
