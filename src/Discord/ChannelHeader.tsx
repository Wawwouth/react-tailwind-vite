import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import { ChannelData } from "./dummy_data"

export type ChannelHeaderProps = {
  channel: ChannelData
}

function ChannelHeader({ channel }: ChannelHeaderProps) {
  return (
    <div className="grow flex items-center justify-between p-1 px-4">
      <div className="flex items-center gap-x-2">
        <MaterialIcon name='numbers' className="text-discord-gray-unread" />
        <span className="text-base font-semibold">
          {channel.name}
        </span>
      </div>
      <div className="flex gap-x-1">
        <IconButton noHover name='question_answer' iconType="round" iconClass="text-discord-gray-2" />
        <IconButton noHover name='notifications_off' iconType="round" iconClass="text-discord-gray-2" />
        <IconButton noHover name='push_pin' iconType="round" iconClass="text-discord-gray-2" />
        <IconButton noHover name='people' iconType="round" iconClass="text-discord-gray-2" />
      </div>
    </div>
  )
}

export default ChannelHeader
