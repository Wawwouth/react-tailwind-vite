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
        "twitch-gray5": "#26262C",
        "twitch-input-gray": "#3E3E40",
        "twitch-tag-gray": "#323234",
        "twitch-purple" : "#772CE8",
        "twitch-purple2" : "#BF94FF",
        "twitch-purple3" : "#9256ED",
        "discord-gray": "#DCDDDE",
        "discord-gray-2": "#B9BBBE",
        "discord-gray-3": "#40444B",
        "discord-gray-4": "#36393F",
        "discord-gray-5": "#2F3136",
        "discord-gray-6": "#202225",
        "discord-gray-hover": "#34373C",
        "discord-gray-unread": "#4F545C",
        "discord-blue": "#5865F2",
      },
      fontFamily: {
        "rubik-sans": ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}
