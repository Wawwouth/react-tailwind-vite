import ChannelsListItem from "./ChannelsListItem"
import { isChannelGroup, ServerData } from "./dummy_data"
import ProfileFooter from "./ProfileFooter"
import ServerBanner from "./ServerBanner"

export type ChannelsBarProps = {
  server: ServerData;
}

function ChannelsBar({server}: ChannelsBarProps) {
  return (
    /* TODO:
      - make channels selectable
      - instead of hidden, make it an expandable bar that hovers channel content
    */
    <div className={`
    hidden lg:flex flex-col w-64 shrink-0 overflow-hidden
    select-none
    bg-discord-gray-8 
    rounded-tl-xl
    `}>
      <ServerBanner server={server} />
      <div className="grow flex flex-col py-2 overflow-y-auto [scrollbar-width:none]">
        {server.channels.map((channel) => (
          <ChannelsListItem channel={channel} />
        ))}
      </div>
      <ProfileFooter />
    </div>
  )
}

export default ChannelsBar
