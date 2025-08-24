export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
       primeYellow: "#d67a0aff", // your custom yellow
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
  },
  plugins: [],
}

