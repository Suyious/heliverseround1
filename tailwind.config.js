/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D051F',
        'foreground': '#EEE5FF',
        'accent': '#EEE5FFBD',
      },
      fontFamily: {
        'sans': ["Outfit", 'sans-serif'],
        'display': ['Sora', 'sans-serif']
      },
    },
  },
  plugins: [],
}

