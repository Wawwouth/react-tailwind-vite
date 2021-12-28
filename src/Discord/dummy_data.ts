import gamepad from 'resources/img/gamepad-icon.png'
import banner from 'resources/img/discord_banner.jpg'

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
      {username: 'bandef', status: 'small status'},
      {username: 'Niromane', status: 'Joue à League of Legends'},
      {username: 'Sarakzite', status: 'very long status to test x-overflow'},
      {username: 'Spenc'},
    ]
  },
  {
    name: 'FRÈRES DE BOLOSSAGE', 
    color: '#206694',
    users: [
      {username: 'Aliatil'},
      {username: 'Bloos'},
      {username: 'Chap'},
      {username: 'Feunin'},
      {username: 'Memori'},
    ]
  },
  {
    name: 'LES GENTILS MEMBRES', 
    color: '#992D22',
    users: [
      {username: '7IBO'},
      {username: 'Ace'},
      {username: 'Acoodoir/Kenny'},
      {username: 'AkwaTiikzZ', status: 'Joue à World of Warcraft Classic'},
      {username: 'zzZzzZzzzZZzZzzzzZZZZZzzzzZZz'},
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
    {name: "Serv 1", banner, channels: []},
    {name: "Serv 2", icon: gamepad, banner, channels: []},
    {name: "Serv 3", channels: [
      {name: "accueil", unread: true},
      {name: "règles"},
      {name: "THÈMES", channels: [{name: "art"}, {name: "finance", unread: true}, {name: "musiciens"}, {name: "entrepreunariat"}]},
      {name: "ENTRAIDE", channels: [{name: "aide_aux_devoirs"}, {name: "aide_informatique"}, {name: "aide_programmation"}]},
      {name: "ENTRAIDE 2", channels: [{name: "aide_aux_devoirs"}, {name: "aide_informatique"}, {name: "aide_programmation"}]},
      {name: "ENTRAIDE 3", channels: [{name: "aide_aux_devoirs"}, {name: "aide_informatique"}, {name: "aide_programmation"}]},
    ]},
    {name: "Serv 4", banner, channels: []},
    {name: "Serv 5", banner, channels: []},
    {name: "Serv 6", banner, channels: []},
    {name: "Serv 7", banner, channels: []},
    {name: "Serv 8", banner, channels: []},
    {name: "Serv 8", banner, channels: []},
    {name: "Serv 10", banner, channels: []},
    {name: "Serv 11", banner, channels: []},
    {name: "Serv 12", banner, channels: []},
    {name: "Serv 13", banner, channels: []},
  ]
}