import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import { ServerData } from "./dummy_data"

export type ServerBannerProps = {
  server: ServerData;
}
function ServerBanner({ server }: ServerBannerProps) {
  return (
    <div 
      className={`${server.banner ? 'items-start aspect-video bg-contain bg-no-repeat' : 'items-center'} 
        border-b border-discord-gray-6
        `}
      style={{backgroundImage: server.banner ? `url('${server.banner}')` : ''}}
    >
      <div className="flex items-center h-12 justify-between basis-full py-2 px-4">
        <span className="font-semibold">{server.name}</span>
        <IconButton name='expand_more' iconClass="h-12 text-discord-gray-2" noHover />
      </div>
    </div>
  )
}

export default ServerBanner
