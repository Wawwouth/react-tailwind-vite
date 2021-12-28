import ServerIcon from "./ServerIcon"

import { data } from "./dummy_data"
import HomeIcon from "./HomeIcon"

export type ServerBarProps = {
  current: number;
  onServerSelect: (index: number) => any
}

function ServerBar({current, onServerSelect}: ServerBarProps) {
  return (
    <nav className="shrink-0 flex flex-col gap-y-2 w-16 p-1 px-2.5 overflow-y-auto without-scrollbar">
      <HomeIcon />
      <hr className="border-t border-discord-gray-5 w-2/3 mx-auto" />
      {data.servers.map((server, i) => (
        <ServerIcon key={server.name} server={server} current={i === current} onClick={() => onServerSelect(i)} />
      ))}
    </nav>
  )
}

export default ServerBar
