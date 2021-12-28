module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        'twitch-gray' : '#0E0E10',
        'twitch-gray2': '#18181B',
        'twitch-gray3': '#1F1F23',
        'twitch-gray4': '#3E3E40',
        'twitch-gray5': '#26262C',
        'twitch-input-gray': '#3E3E40',
        'twitch-tag-gray': '#323234',
        'twitch-purple' : '#772CE8',
        'twitch-purple2' : '#BF94FF',
        'twitch-purple3' : '#9256ED',
        'discord-gray': '#DCDDDE',
        'discord-gray-2': '#B9BBBE',
        'discord-gray-3': '#8E9297',
        'discord-gray-4': '#4F545C',
        'discord-gray-5': '#40444B',
        'discord-gray-6': '#36393F',
        'discord-gray-7': '#34373C',
        'discord-gray-8': '#2F3136',
        'discord-gray-9': '#292B2F',
        'discord-gray-10': '#202225',
        'discord-blue': '#5865F2',
      },
      fontFamily: {
        'rubik-sans': ['Rubik', 'sans-serif'],
        'discord-display': ['Ginto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'discord-primary': ['Whitney', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'discord-headline': ['Ginto Nord', 'Ginto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
