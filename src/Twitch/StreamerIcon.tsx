import React from 'react'

type StreamerIconProps = {
  className?: string
}
function StreamerIcon({className}: StreamerIconProps) {
  return (
    <button>
      <div 
        className={`w-7 aspect-square bg-twitch-tag-gray rounded-full ${className ?? ''}`}
      >
      </div>
    </button>
  )
}

export default StreamerIcon
