import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import { ChannelData } from "./dummy_data"

export type ChannelHeaderProps = {
  channel: ChannelData
}

function ChannelHeader({ channel }: ChannelHeaderProps) {
  return (
    <div className="grow flex items-center justify-between p-1 px-4 select-none">
      <div className="flex items-center gap-x-2">
        <MaterialIcon name='numbers' className="text-discord-gray-4" />
        <span className="text-base font-semibold">
          {channel.name}
        </span>
      </div>
      <div className="flex gap-x-1">
        <IconButton noHover name='question_answer' iconType="round" iconClass="text-discord-gray-2 hover:text-discord-gray" />
        <IconButton noHover name='notifications_off' iconType="round" iconClass="text-discord-gray-2 hover:text-discord-gray" />
        <IconButton noHover name='push_pin' iconType="round" iconClass="text-discord-gray-2 hover:text-discord-gray" />
        <IconButton noHover name='people' iconType="round" iconClass="text-discord-gray-2 hover:text-discord-gray" />
      </div>
    </div>
  )
}

export default ChannelHeader
