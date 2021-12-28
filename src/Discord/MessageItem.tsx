import { MessageData, messages } from "./dummy_data"
import ProfileIcon from "./ProfileIcon"

export type MessageItemProps = {
  message: MessageData
}

function MessageItem({message}: MessageItemProps) {
  return (
    <div className="
      flex items-start gap-x-4
    ">
      <ProfileIcon user={message.user} className="w-8 shrink-0" />
      <div className="flex flex-col cursor-default">
        <div className="flex gap-x-2 items-center">
          <span className="
            hover:underline cursor-pointer
            text-sm text-white font-semibold
            "
          >{message.user.username}</span>
          <span 
          title={message.date.format('DD/MM/YYYY HH:mm')}
          className="text-xs font-normal text-discord-gray-3"
        >
            {message.date.locale('fr').fromNow()}
          </span>
        </div>
        <span className="text-sm text-discord-gray cursor-text">
          {message.content}
        </span>
      </div>
    </div>
  )
}

export default MessageItem
