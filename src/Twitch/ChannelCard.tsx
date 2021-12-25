import React from 'react'
import Tag from './Tag'
import IconButton from './IconButton'
import StreamerIcon from './StreamerIcon'

function ChannelCard() {
  const title = "very very very very very very long stream title"
  return (
    <div className='w-[48%] sm:w-[31%] md:w-[23%] 2xl:w-[19%]
      flex flex-col gap-1'>
      <div className='
        relative
        aspect-video sm:bg-red-400 md:bg-green-400 lg:bg-blue-400
        bg-twitch-tag-gray
        cursor-pointer
        transition-transform
        hover:translate-x-1.5 hover:-translate-y-1.5
      '>
        <span className='
          absolute top-2 left-2
          font-semibold text-sm leading-none
          bg-red-600 p-1 rounded-sm
        '>
          LIVE
        </span>
        <span className='
          absolute bottom-2 left-2
          bg-black bg-opacity-30 rounded-sm p-1
          text-xs font-semibold leading-none
          '>
          3 k spectateurs
        </span>
      </div>
      <div className='flex gap-2 place-items-start'>
        <StreamerIcon className='w-9' />
        <div className='flex flex-col grow overflow-hidden gap-0.5'>
          <div className='flex justify-between'>
            <a href="" className='overflow-hidden text-md text-white hover:text-twitch-purple3'>
              <p title={title} className='font-semibold whitespace-nowrap text-ellipsis overflow-hidden'>{title}</p>
            </a>
            <IconButton title='Options' name="more_vert" className='h-6' iconClass='text-md'/>
          </div>
          <a href="" className='text-gray-400 hover:text-twitch-purple3'>
            <p className='text-xs'>game</p>
          </a>
          <a href="" className='text-gray-400 hover:text-twitch-purple3'>
            <p className='text-xs'>streamer name</p>
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
