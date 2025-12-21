/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#313034',   // Background utama
        'brand-gold': '#cdc72a',   // Warna kuning aksen
        'brand-gray': 'rgba(255, 255, 255, 0.6)', // Teks paragraf
      },
      fontFamily: {
        'arimo': ['Arimo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}