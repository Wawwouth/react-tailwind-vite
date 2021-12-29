import { useState } from "react"
import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import { ServerData } from "./dummy_data"

export type ServerBannerProps = {
  server: ServerData;
}

function ServerBanner({ server }: ServerBannerProps) {
  const [expanded, setExpanded] = useState<boolean>(server.banner ? true : false)

  return (
    <div 
      className={` shrink-0 ${server.banner ? 'items-start aspect-video bg-contain bg-no-repeat' : 'items-center h-12'} 
        border-b border-discord-gray-10
        [transition:background-color_ease_0.5s]
        ${expanded ? '' : 'hover:bg-discord-gray-6'}
        `}
      style={{backgroundImage: server.banner ? `url('${server.banner}')` : ''}}
    >
      <div className="flex items-center justify-between basis-full py-2 px-4 cursor-pointer">
        <span className="font-semibold">{server.name}</span>
        <IconButton name='expand_more' iconClass="text-discord-gray-2" noHover />
      </div>
    </div>
  )
}

export default ServerBanner
