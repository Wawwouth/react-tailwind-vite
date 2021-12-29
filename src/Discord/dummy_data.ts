import gamepad from 'resources/img/gamepad-icon.png'
import banner from 'resources/img/discord_banner.jpg'
import dayjs, { Dayjs } from 'dayjs'

export function isChannelGroup(c: any): c is ChannelGroupData {
  return c.channels !== undefined
}

export type ChannelGroupData = {
  name: string;
  icon?: string;
  channels: ChannelData[]
}

export type ChannelData = {
  name: string;
  icon?: string;
  unread?: boolean;
}

export type UserData = {
  username: string;
  icon?: string;
  status?: string;
}

export type MessageData = {
  content: string;
  user: UserData;
  date: Dayjs;
}
const user: UserData = {username: "User 1"}
let date = 1610409152
export const messages: MessageData[] = [
  {user: {username: `User 0`}, content : 'Salut !', date: dayjs.unix(date)}
]
for(let i = 0; i < 15; ++i) {
  date += Math.floor(Math.random() * 30 + 1) * 24 * 60 * 60
  messages.push({user: {username: `User ${i}`}, content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor a eros a molestie. Praesent vel tristique sem. Morbi ac congue mauris. Quisque sit amet urna eu massa fringilla fermentum id volutpat elit. Integer in risus elit. Sed at urna id nam.', date: dayjs.unix(date)})
}
messages.push({user: {username: `Last User`}, content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor a eros a molestie. Praesent vel tristique sem. Morbi ac congue mauris. Quisque sit amet urna eu massa fringilla fermentum id volutpat elit. Integer in risus elit. Sed at urna id nam.', date: dayjs().subtract(15, 'minute')})

export type ServerRole = {
  name: string;
  color?: string;
  users: UserData[]
}

export const roles: ServerRole[] = [
  {
    name: 'GARDIENS DE ZOO',
    color: '#71368A',
    users: [
      { username: 'bandef', status: 'small status' },
      { username: 'Niromane', status: 'Joue à League of Legends' },
      { username: 'Sarakzite', status: 'very long status to test x-overflow' },
      { username: 'Spenc' },
    ]
  },
  {
    name: 'FRÈRES DE BOLOSSAGE',
    color: '#206694',
    users: [
      { username: 'Aliatil' },
      { username: 'Bloos' },
      { username: 'Chap' },
      { username: 'Feunin' },
      { username: 'Memori' },
    ]
  },
  {
    name: 'LES GENTILS MEMBRES',
    color: '#992D22',
    users: [
      { username: '7IBO' },
      { username: 'Ace' },
      { username: 'Acoodoir/Kenny' },
      { username: 'AkwaTiikzZ', status: 'Joue à World of Warcraft Classic' },
      { username: 'zzZzzZzzzZZzZzzzzZZZZZzzzzZZz' },
      { username: 'zzZzzZzZZZZzzZZzzzzzZzZZzzZzz' },
      { username: 'zzZZZZZZzzzzzzzzZZzzZZZZZZZzz' },
      { username: 'zzZZZZZZZZZZzzzzzzzzzzZZZZZZZ' },
      { username: 'zZZZZZzzzzZZZzzZZZZZZzzzZZzZZ' },
      { username: 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ' },
      { username: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzz' },
      { username: 'ZZZZZZZZZZZZZZZzzzzzzzzzzzzzz' },
      { username: 'zzzzzZZZZZZZZZzzzzzzzzzzZZZZZ' },
      { username: 'ZZZZZZZZzzzzzzzzzzzZZZZZZZZZZ' },
      { username: 'ZZZZZzzzzzzzzzzzzzzzzzzzzZZZZ' },
    ]
  },
]

export type ServerData = {
  name: string;
  icon?: string;
  banner?: string;
  channels: Array<ChannelData | ChannelGroupData>
}

export type DiscrodDataType = {
  servers: ServerData[]
}

export const data: DiscrodDataType = {
  servers: [
    { name: "Server n°1", banner, channels: [] },
    { name: "Server n°2", banner, channels: [] },
    {
      name: "Server n°3", icon: gamepad, channels: [
        { name: "accueil", unread: true },
        { name: "règles" },
        { name: "THÈMES", channels: [{ name: "art" }, { name: "finance", unread: true }, { name: "musiciens" }, { name: "entrepreunariat" }] },
        { name: "ENTRAIDE", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 2", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 3", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 4", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 5", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 6", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 7", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
      ]
    },
    { name: "Server n°4", banner,  icon: gamepad, channels: [
        { name: "accueil", unread: true },
        { name: "règles" },
        { name: "THÈMES", channels: [{ name: "art" }, { name: "finance", unread: true }, { name: "musiciens" }, { name: "entrepreunariat" }] },
        { name: "ENTRAIDE", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 2", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 3", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 4", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 5", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 6", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
        { name: "ENTRAIDE 7", channels: [{ name: "aide_aux_devoirs" }, { name: "aide_informatique" }, { name: "aide_programmation" }] },
      ]
     },
    { name: "Server n°5", banner, channels: [] },
    { name: "Server n°6", banner, channels: [] },
    { name: "Server n°7", banner, channels: [] },
    { name: "Server n°8", banner, channels: [] },
    { name: "Server n°8", banner, channels: [] },
    { name: "Server n°10", banner, channels: [] },
    { name: "Server n°11", banner, channels: [] },
    { name: "Server n°12", banner, channels: [] },
    { name: "Server n°13", banner, channels: [] },
    { name: "Server n°14", banner, channels: [] },
    { name: "Server n°15", banner, channels: [] },
    { name: "Server n°16", banner, channels: [] },
    { name: "Server n°17", banner, channels: [] },
    { name: "Server n°18", banner, channels: [] },
    { name: "Server n°19", banner, channels: [] },
    { name: "Server n°20", banner, channels: [] },
  ]
}