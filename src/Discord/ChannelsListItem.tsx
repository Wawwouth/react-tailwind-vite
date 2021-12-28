import MaterialIcon from "shared/MaterialIcon"
import { ChannelData, ChannelGroupData, isChannelGroup } from "./dummy_data"

export type ChannelsListItemProps = {
    channel: ChannelData | ChannelGroupData
}

function ChannelsListItem({ channel }: ChannelsListItemProps) {
  return !isChannelGroup(channel) ? (
    <div className="flex items-center relative
      text-[16px] font-semibold text-discord-gray-2
      "
    >
      <div className={`
        flex grow py-1 mx-2 px-2 gap-1 hover:bg-discord-gray-7 cursor-pointer
        rounded-sm
        ${channel.unread ? 'text-discord-gray' : 'text-discord-gray-3'}
      `}>
        <MaterialIcon name='numbers' iconType="round" />
        <span>{channel.name}</span>
      </div>
      {/* Left cursor */}
      <div className={`${channel.unread ? '' : 'hidden'}
      h-2 aspect-square bg-white 
      rounded-full
      [transition:height_ease_0.3s]
      absolute -left-1
      `}></div>
    </div>
  ) : (
    <div className="text-discord-gray-2 py-2">
      <span className="px-2 text-[12px] font-semibold font-discord-display">{channel.name}</span>
      {channel.channels.map((channel) => (
        <ChannelsListItem channel={channel} />
      ))}
    </div>
  )
}

export default ChannelsListItem
