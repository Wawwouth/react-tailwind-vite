import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import ChannelHeader from "./ChannelHeader"
import { ChannelData } from "./dummy_data"
import UsersList from "./UsersList"

export type ChannelContentProps = {
  channel?: ChannelData;
}

function ChannelContent({ channel }: ChannelContentProps) {
  return channel ? (
    <div className="grow flex flex-col
      bg-discord-gray-4
    ">
      <div className="flex justify-between py-0.5 h-12
      bg-discord-gray-4 
        border-b border-discord-gray-6
      ">
        <ChannelHeader channel={channel} />
        {/* SEARCHBAR */}
        <div className="flex items-center justify-between h-12 min-w-[15rem]">
          {/* SEARCH INPUT */}
          <div className="flex justify-between items-center px-2 py-0.5 h-fit
          bg-discord-gray-6
            text-xs text-discord-gray-unread
            rounded-md
            "
          >
            <input
              type="text"
              placeholder="Rechercher"
              className="bg-transparent outline-none"
            />
            <MaterialIcon name='search' iconType="round" className="" />
          </div>
          {/* INBOX */}
          <IconButton noHover name='inbox' iconType="round" iconClass="text-discord-gray-2" />
          {/* HELP */}
          <IconButton noHover name='help' iconType="round" iconClass="text-discord-gray-2" />
        </div>
      </div>
      {/* CHANNEL + USERS */}
      <div className=" grow flex justify-between">
        <div className="grow p-1">
          CONTENT
        </div>
        <UsersList />
      </div>
    </div>
  ) : (
    <div>NO CHANNEL SELECTED</div>
  )
}

export default ChannelContent
