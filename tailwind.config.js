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
        run: {
          '0%': { transform: 'translateX(0) ' },
          '100%': { transform: 'translateX(-120%) ' },
        },
        runtRUMP: {
          '0%': {
            opacity: 0,
            transform: 'translate(-10px,-100px) rotate(20deg)',
          },
          '10%': {
            opacity: 1,
            transform: 'translate(100px,0px) rotate(-20deg)',
          },
          '20%': {
            transform: 'translate(200px, -100px) rotate(20deg)',
          },
          '30%': {
            transform: 'translate(300px,0px) rotate(20deg)',
          },
          '40%': {
            transform: ' translate(400px,-100px) rotate(-20deg)',
          },
          '50%': {
            transform: ' translate(500px, 0px) rotate(20deg)',
          },
          '60%': {
            transform: ' translate(600px, -100px) rotate(-20deg)',
          },
          '70%': {
            transform: ' translate(700px, 0px) rotate(20deg)',
          },
          '80%': {
            transform: 'translate(800px, -100px) rotate(-20deg)',
          },
          '90%': {
            opacity: 1,
            transform: 'translate(900px, 0px) rotate(20deg)',
          },
          '100%': {
            opacity: 0,
            transform: 'translate(1280px,-100px) rotate(-20deg) ',
          },
        },
      },
      animation: {
        rightAnimation: 'rightAnimation 3s infinite',
        leftAnimation: 'leftAnimation 3s infinite',
        run: 'run 5s infinite linear',
        runtRUMP: 'runtRUMP 8s infinite linear',
      },
    },
  },
  plugins: [],
};
