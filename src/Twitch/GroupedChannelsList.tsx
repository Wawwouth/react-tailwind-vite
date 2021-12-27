import MaterialIcon from "shared/MaterialIcon"
import IconButton from "./IconButton"
import ChannelsListItem from "./ChannelsListItem"

import { data } from "./dummy_data"

export type GroupedChannelsListProps = {
  expanded?: boolean;
  icon: string;
  title: string;
  switchExpand?: () => any
}

function GroupedChannelsList({ expanded, icon, title, switchExpand }: GroupedChannelsListProps) {
  return (
    <div className={`flex flex-col gap-y-4 ${expanded ? 'lg:gap-y-1' : ''}`}>
      {/* TITLE + EXPAND */}
      <div className={`
        flex justify-between items-center gap-y-5
        ${expanded ? 'flex-col lg:flex-row' : 'flex-col'} 
      `}>
        {expanded && (
          <span className={`hidden ${expanded ? 'lg:flex' : ''} text-sm font-semibold pl-3 `}>{title}</span>
        )}
        {switchExpand && (
          <IconButton name={`${expanded ? 'first_page' : 'last_page'}`} onClick={switchExpand} />
        )}
        <MaterialIcon name={icon} iconType='round'
          className={`${expanded ? 'lg:hidden' : ''} text-gray-400 text-lg`}
        />
      </div>
      {/* CHANNELS LIST */}
      <div className={`flex flex-col gap-y-3 ${expanded ? 'lg:gap-y-0': ''} `}>
        {data.following.map((channel) => (
          <ChannelsListItem key={channel.streamer} channel={channel} expanded={expanded} />
        ))}
      </div>
      {/* FOOTER */}
      <div className={`hidden ${expanded ? 'lg:flex' : ''} justify-between px-2 pt-2`}>
        <button className="text-twitch-purple2 text-xs hover:text-twitch-purple3 hover:underline">
          <span>Afficher plus</span>
        </button>
        <button className="text-twitch-purple2 text-xs hover:text-twitch-purple3 hover:underline">
          <span>Afficher moins</span>
        </button>
      </div>
    </div>
  )
}

export default GroupedChannelsList
