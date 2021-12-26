import StreamerIcon from './StreamerIcon'

export type StreamerListItemProps = {
  streamerName: string;
  category: string;
  viewers: string;
}

function StreamerListItem(props: StreamerListItemProps) {
  const { streamerName, category, viewers } = props
  // Football Manager 2021 édition spéciale
  return (
    <div className='
      flex gap-2 px-2
      cursor-pointer
      lg:hover:bg-twitch-gray5
    '>
      <StreamerIcon />
      <div className='hidden lg:flex grow flex-col overflow-hidden'>
        <span className='text-ellipsis whitespace-nowrap overflow-hidden'>{streamerName}</span>
        <span 
          className='text-sm font-normal text-gray-400 text-ellipsis whitespace-nowrap overflow-hidden'
          title={category}
        >{category}</span>
      </div>
      <div className='hidden lg:flex items-center gap-2'>
        <div className='h-2 w-2 bg-red-600 rounded-full'></div>
        <h3 className='text-sm font-semibold text-gray-400 w-max'>{viewers}</h3>
      </div>
    </div>
  )
}

export default StreamerListItem
