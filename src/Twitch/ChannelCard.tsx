import Tag from './Tag'
import IconButton from './IconButton'
import StreamerIcon from './StreamerIcon'
import { liveChannel } from './dummy_data'

export type ChannelCardProps = {
  channel: liveChannel
}

function ChannelCard({ channel }: ChannelCardProps) {
  const title = "very very very very very very long stream title"
  return (
    <div className='w-full flex flex-col gap-1'>
      <div className='
        relative aspect-video 
        bg-twitch-tag-gray
        cursor-pointer
        transition-transform
        hover:translate-x-1.5 hover:-translate-y-1.5
      '>
        <span className='
          absolute top-2 left-2 p-1
          text-sm font-semibold leading-none
          bg-red-600 rounded-sm
        '>
          LIVE
        </span>
        <span className='
          absolute bottom-2 left-2 p-1
          bg-black bg-opacity-30
          text-xs font-semibold leading-none
          rounded-sm
          '>
          {channel.viewers} spectateurs
        </span>
      </div>
      <div className='flex gap-2 place-items-start'>
        <StreamerIcon className='w-9' />
        <div className='flex flex-col grow overflow-hidden gap-0.5'>
          <div className='flex justify-between'>
            <a href="" className='overflow-hidden text-md text-white hover:text-twitch-purple3'>
              <p title={channel.title} className='font-semibold whitespace-nowrap text-ellipsis overflow-hidden'>{channel.title}</p>
            </a>
            <IconButton title='Options' name="more_vert" className='h-6' iconClass='text-md' />
          </div>
          <a href="" className='text-gray-400 hover:text-twitch-purple3'>
            <p className='text-xs'>{channel.streamer}</p>
          </a>
          <a href="" className='text-gray-400 hover:text-twitch-purple3'>
            <p className='text-xs'>{channel.category}</p>
          </a>
          <div>
            <Tag text='Français' size='small' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChannelCard
