/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#0A2540',
        navy: '#0A2540',
        coral: '#F06A5B',
      },
    },
  },
  plugins: [],
}
