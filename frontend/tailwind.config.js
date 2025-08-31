export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
       primeYellow: "#d67a0aff", 
     },
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
      },
       animation: {
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
    },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards'
      }
  },
  plugins: [],
}

