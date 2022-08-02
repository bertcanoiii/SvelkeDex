const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        'poke-dex-red': '#cc2d3a'
      },
      fontFamily: {
        sans: ['Bebas Neue', 'sans-serif']
      }
    },
  },

  plugins: [],
};

module.exports = config;
