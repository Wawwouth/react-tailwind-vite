import gamepad from 'resources/img/gamepad-icon.png'
import banner from 'resources/img/discord_banner.jpg'

export type ServerData = {
  name: string;
  icon?: string;
  banner?: string;
}

export type DiscrodDataType = {
  servers: ServerData[]
}

export const data: DiscrodDataType = {
  servers: [
    {name: "Serv 1", banner},
    {name: "Serv 2", icon: gamepad, banner},
    {name: "Serv 3"},
    {name: "Serv 4", banner},
    {name: "Serv 5", banner},
    {name: "Serv 6", banner},
    {name: "Serv 7", banner},
    {name: "Serv 8", banner},
    {name: "Serv 8", banner},
    {name: "Serv 10", banner},
    {name: "Serv 11", banner},
    {name: "Serv 12", banner},
    {name: "Serv 13", banner},
  ]
}