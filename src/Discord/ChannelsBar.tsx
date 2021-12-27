import ChannelsListItem from "./ChannelsListItem"
import { ServerData } from "./dummy_data"
import ProfileFooter from "./ProfileFooter"
import ServerBanner from "./ServerBanner"

export type ChannelsBarProps = {
  server: ServerData;
}

function ChannelsBar({server}: ChannelsBarProps) {
  return (
    <div className={`
    hidden sm:flex flex-col w-64 shrink-0 overflow-hidden
    bg-discord-gray-5 
    rounded-tl-xl
    `}>
      <ServerBanner server={server} />
      <div className="grow">
        <ChannelsListItem />
      </div>
      <ProfileFooter />
    </div>
  )
}

export default ChannelsBar
