module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      dropShadow: {
        '4xl': [
            '34px 211px 238px rgba(0, 0, 0, 1)',
            '17px 24px 39px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}