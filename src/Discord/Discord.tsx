import { useCallback, useEffect, useState } from "react"
import ChannelContainer from "./ChannelContainer"
import ChannelsBar from "./ChannelsBar"
import ServerBar from "./ServerBar"

import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { data } from "./dummy_data"

function Discord() {
  const [currentServer, setCurrentServer] = useState<number>(2)
  const [currentChannel, setCurrentChannel] = useState<number>(0)

  useEffect(() => {
    document.title = 'Thiscord'
  }, [])
  
  const serverSelected = useCallback((index: number) => {
    setCurrentServer(index)
  }, [])
  
  const channelSelected = useCallback((index: number) => {
    setCurrentChannel(index)
  }, [])

  return (
    <div className='discord font-discord-primary
      h-full w-full bg-discord-gray-10 text-white overflow-hidden
      flex
    '>
      <ServerBar current={currentServer} onServerSelect={serverSelected} />
      <main className="grow flex">
        <ChannelsBar server={data.servers[currentServer]} />
        <ChannelContainer channel={data.servers[currentServer].channels[currentChannel]} />
      </main>
    </div>
  )
}

export default Discord
