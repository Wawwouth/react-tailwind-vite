import MaterialIcon from "shared/MaterialIcon"
import { ChannelData } from "./dummy_data"
import { messages } from "./dummy_data"
import MessageItem from "./MessageItem"

export type ChannelContentProps = React.HTMLAttributes<HTMLDivElement> & {
  channel: ChannelData;
}

function ChannelContent({channel, className, ...props}: ChannelContentProps) {
  return (
    <div {...props} className={`flex flex-col ${className}
    `}>
      <div className=" grow flex flex-col px-4 py-4 gap-y-4 overflow-y-auto ![scrollbar-width:thin] scrollable">
        {messages.map((message) => (
          <MessageItem key={`${message.user.username}-${message.date.unix()}`} message={message} />
        ))}
      </div>
      <div className="
        flex items-center gap-x-3 p-2 px-4 mx-3 mb-3 rounded-md
        bg-discord-gray-5
      ">
        <MaterialIcon name='add_circle' className="text-discord-gray-2 hover:text-discord-gray cursor-pointer" />
        <input
          type="text" 
          placeholder={`Envoyer un message dans #${channel.name}`} 
          className="grow bg-transparent text-sm placeholder-discord-gray-3 outline-none"
        />
        <div className="flex gap-x-3 text-discord-gray-2">
          <MaterialIcon name='card_giftcard' iconType="round" className="hover:text-pink-500 hover:scale-110 cursor-pointer" />
          <MaterialIcon name='gif_box' iconType="outlined" className="hover:text-discord-gray cursor-pointer" />
          <MaterialIcon name='check_box_outline_blank' iconType="round" className="hover:text-discord-gray cursor-pointer" />
          <MaterialIcon name='emoji_emotions' iconType="round" className="hover:text-yellow-400 hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default ChannelContent
