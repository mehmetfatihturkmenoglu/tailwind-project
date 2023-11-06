/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tailwindcss e ait olan classları yazacağımız dosyaları adresler
  content: ["./public/**/*.{html,js}"],
  theme: {
    // Kullanacağımız Fontfamily özelliklerini extend objesinin içerisine yazacağız, temaya ek bir özellik vermiş olduk
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      colors: {
        "tail-red": "#BC1A45",
        "tail-melon": "#FFD369",
        "tail-grey": "#DDDDDD",
        "tail-white": "#F7F7F7",
      },
      // Container isimli bir class tanımladığımız durumda defaultta oluşacak stil
      container: {
        center: true,
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
    },
  },
  plugins: [],
};
