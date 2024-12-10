/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        fellix: ['Fellix', 'sans-serif'],
        fellixBold: ['Fellix-Bold', 'sans-serif'],
        fellixMedium: ['Fellix-Medium', 'sans-serif'],
        fellixLight: ['Fellix-Light', 'sans-serif'],
        fellixSemiBold: ['Fellix-Semibold'],
        fellixExtraBold: ['Fellix-ExtraBold', 'sans-serif'],
        fellixMediumItalic: ['Fellix-Medium-Italic', 'sans-serif'],
        fellixLightItalic: ['Fellix-Light-Italic', 'sans-serif'],
        fellixBoldItalic: ['Fellix-Bold-Italic', 'sans-serif'],
        fellixItalic: ['Fellix-Italic', 'sans-serif'],
        lufga: ['lufga', 'sans-serif'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        periwinkle: "#5156BE",
        darkCharcoal: "#2C3131",
        slateGray: "#60697B",
        lightGray: "#E3E3E3",
        lavenderBlue: "#D0DBFF",
        charcoalGray: "#626262",
        raisinBlack: "#111827",
        ghostWhite: "#F8F8FC",
        honeyDew: "#E8F9F4",
        teal: "#006D6D",
        raisin: "#212121",
        davysGray: "#6D6D6D",
        gunMetal: "#343F52",
        desaturatedBlue: "#526179",
        isabelline: "#F0F0F0",
        darkGray: "#A9A9A9",
      }
    },
  },
  plugins: [],
}

