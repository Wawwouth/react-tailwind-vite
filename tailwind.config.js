module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitch-gray" : "#0E0E10",
        "twitch-gray2": "#18181B",
        "twitch-gray3": "#1F1F23",
        "twitch-gray4": "#3E3E40",
        "twitch-input-gray": "#3E3E40",
        "twitch-tag-gray": "#323234",
        "twitch-purple" : "#772CE8",
        "twitch-purple2" : "#BF94FF",
        "twitch-purple3" : "#9256ED",
      },
      fontFamily: {
        "rubik-sans": ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
