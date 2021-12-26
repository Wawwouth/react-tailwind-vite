import ChannelCard from "./ChannelCard"
import { data } from "./dummy_data"

function ChannelsList() {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5
     gap-3'>
       {data.following.map((channel) => (
         <ChannelCard channel={channel} />
       ))}
    </div>
  )
}

export default ChannelsList
