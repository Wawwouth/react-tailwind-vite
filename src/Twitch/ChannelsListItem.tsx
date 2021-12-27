import { liveChannel } from './dummy_data'
import StreamerIcon from './StreamerIcon'

export type ChannelsListItemProps = {
  channel: liveChannel;
  expanded?: boolean;
}

function ChannelsListItem({ channel, expanded }: ChannelsListItemProps) {
  const { streamer, category, viewers, profilePicture } = channel
  // Football Manager 2021 édition spéciale
  return (
    <div className={`
      flex gap-2 px-1 lg:px-2
      cursor-pointer
      ${expanded ? 'lg:hover:bg-twitch-gray5' : ''}
    `}>
      <StreamerIcon icon={profilePicture} />
      <div className={`hidden ${expanded ? 'lg:flex' : ''} grow flex-col overflow-hidden py-1`}>
        <span className='text-ellipsis whitespace-nowrap overflow-hidden leading-tight'>
          {streamer}
        </span>
        <span
          className='text-sm font-normal text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden leading-none'
          title={category}
        >
          {category}
        </span>
      </div>
      <div className={`hidden ${expanded ? 'lg:flex' : ''} items-center gap-2`}>
        <div className='h-2 w-2 bg-red-600 rounded-full'></div>
        <h3 className='text-sm font-semibold text-gray-400 w-max'>{viewers}</h3>
      </div>
    </div>
  )
}

export default ChannelsListItem
