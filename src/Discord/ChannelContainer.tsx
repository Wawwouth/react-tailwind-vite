import MaterialIcon from "shared/MaterialIcon"
import IconButton from "Twitch/IconButton"
import ChannelContent from "./ChannelContent"
import ChannelHeader from "./ChannelHeader"
import { ChannelData } from "./dummy_data"
import UsersList from "./UsersList"

export type ChannelContainerProps = {
  channel?: ChannelData;
}

function ChannelContainer({ channel }: ChannelContainerProps) {
  return channel ? (
    <div className="grow flex flex-col
      bg-discord-gray-6
    ">
      <div className="flex justify-between py-0.5 h-12
      bg-discord-gray-6 
        border-b border-discord-gray-10
      ">
        <ChannelHeader channel={channel} />
        {/* SEARCHBAR */}
        <div className="hidden sm:flex items-center justify-between h-12 min-w-[15rem]">
          {/* SEARCH INPUT */}
          <div className="flex justify-between items-center px-2 py-0.5 h-fit
          bg-discord-gray-10
            text-xs text-discord-gray-3
            rounded-md
            "
          >
            <input
              type="text"
              placeholder="Rechercher"
              className="bg-transparent outline-none placeholder-discord-gray-3"
            />
            <MaterialIcon name='search' iconType="round" className="" />
          </div>
          {/* INBOX */}
          <IconButton noHover name='inbox' iconType="round" iconClass="text-discord-gray-2 hover:text-discord-gray
            hover:text-discord-gray
            hover:text-discord-gray
            hover:text-discord-gray"
          />
          {/* HELP */}
          <IconButton noHover name='help' iconType="round" iconClass="text-discord-gray-2 hover:text-discord-gray
            hover:text-discord-gray
            hover:text-discord-gray
            hover:text-discord-gray"
          />
        </div>
      </div>
      {/* CHANNEL + USERS */}
      <div className="grow flex justify-between overflow-hidden">
        <ChannelContent
          channel={channel}
          className="grow"
        />
        {/* <div className="bg-black font-semibold text-discord-gray">gray</div>
          <div className="bg-black font-semibold text-discord-gray-2">gray-2</div>
          <div className="bg-black font-semibold text-discord-gray-3">gray-3</div>
          <div className="bg-black font-semibold text-discord-gray-4">gray-4</div>
          <div className="bg-black font-semibold text-discord-gray-5">gray-5</div>
          <div className="bg-black font-semibold text-discord-gray-6">gray-6</div>
          <div className="bg-black font-semibold text-discord-gray-7">gray-7</div>
          <div className="bg-black font-semibold text-discord-gray-8">gray-8</div>
          <div className="bg-black font-semibold text-discord-gray-9">gray-9</div>
          <div className="bg-black font-semibold text-discord-gray-10">gray-10</div> */}
        <UsersList />
      </div>
    </div>
  ) : (
    <div>NO CHANNEL SELECTED</div>
  )
}

export default ChannelContainer
