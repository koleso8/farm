/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/background.png')",
        'bg-vector': "url('/vector.png')",
      },
      keyframes: {
        rightAnimation: {
          '0%': { transform: 'translateX(-38px)', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1.1)', opacity: '1' },
        },
        leftAnimation: {
          '0%': { transform: 'translateX(30px) ', opacity: '0' },
          '100%': { transform: 'translateX(0) scale(1.1)', opacity: '1' },
        },
        backgroundImage: {
          heroPattern:
            "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('ph1.jpg')",
        },
      },
    },
  },
  plugins: [],
};
