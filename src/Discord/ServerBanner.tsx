import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import { ServerData } from "./dummy_data"

export type ServerBannerProps = {
  server: ServerData;
}
function ServerBanner({ server }: ServerBannerProps) {
  return (
    <div 
      className={`flex py-2 justify-between px-4 
        ${server.banner ? 'items-start aspect-video bg-contain bg-no-repeat' : 'items-center'} 
        border-b border-discord-gray-6
        `}
      style={{backgroundImage: server.banner ? `url('${server.banner}')` : ''}}
    >
      <span className="font-semibold">{server.name}</span>
      <IconButton name='expand_more' iconClass="text-discord-gray-2" noHover />
    </div>
  )
}

export default ServerBanner
