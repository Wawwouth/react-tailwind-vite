import ServerIcon from "./ServerIcon"

import { data } from "./dummy_data"
import HomeIcon from "./HomeIcon"

function ServerBar() {
  return (
    <nav className="flex flex-col gap-y-2 w-16 p-1 px-2.5 overflow-y-auto [scrollbar-width:none]">
      <HomeIcon />
      <hr className="border-t border-discord-gray-3 w-2/3 mx-auto" />
      {data.servers.map((server, i) => (
        <ServerIcon server={server} current={i === 2}/>
      ))}
    </nav>
  )
}

export default ServerBar
