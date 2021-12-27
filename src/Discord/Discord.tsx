import { useCallback, useState } from "react"
import ChannelContent from "./ChannelContent"
import ChannelsBar from "./ChannelsBar"
import ServerBar from "./ServerBar"
import UsersBar from "./UsersBar"

import { data } from "./dummy_data"

function Discord() {
  const [currentServer, setCurrentServer] = useState<number>(2)
  const serverSelected = useCallback((index: number) => {
    setCurrentServer(index)
  }, [])
  return (
    <div className='
      h-full w-full bg-discord-gray-6 text-white overflow-hidden
      flex
    '>
      <ServerBar current={currentServer} onServerSelect={serverSelected} />
      <main className="grow flex">
        <ChannelsBar server={data.servers[currentServer]} />
        <ChannelContent />
        <UsersBar />
      </main>
    </div>
  )
}

export default Discord
