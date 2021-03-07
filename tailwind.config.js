module.exports = {
  darkMode: false,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: {
          default: "#F0972D",
          hover: "#CA8029",
        },
        secondaryColor: {
          default: "#393E41",
          hover: "#CA8029",
        },
        pseudoWhite: {
          default: "#F4FAFF",
          hover: "#C5CBCF",
        },
        backgroundColor: "#232323",
      },
      width: {
        "42/100": "42%",
        "45/100": "45%",
        "48/100": "48%",
        "52/100": "52%",
        "55/100": "55%",
        "60/100": "60%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
