/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2461E5'
      },
      fontFamily: {
        rubik: ['Rubik One', 'sans-serif']
      }
    }
  },
  plugins: []
};

// This is a Tailwind CSS configuration file that specifies the content files to scan for class names,