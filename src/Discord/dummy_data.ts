import gamepad from 'resources/img/gamepad-icon.png'

export type ServerData = {
  name: string;
  icon?: string;
}

export type DiscrodDataType = {
  servers: ServerData[]
}

export const data: DiscrodDataType = {
  servers: [
    {name: "Serv 1"},
    {name: "Serv 2", icon: gamepad},
    {name: "Serv 3"},
    {name: "Serv 4"},
    {name: "Serv 5"},
    {name: "Serv 6"},
    {name: "Serv 7"},
    {name: "Serv 8"},
    {name: "Serv 8"},
    {name: "Serv 10"},
    {name: "Serv 11"},
    {name: "Serv 12"},
    {name: "Serv 13"},
  ]
}