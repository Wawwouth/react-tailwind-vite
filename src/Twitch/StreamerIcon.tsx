import React from 'react'

type StreamerIconProps = {
  icon?: string;
  className?: string
}

function StreamerIcon({icon, className}: StreamerIconProps) {
  return (
    <button>
      <div 
        className={`w-7 aspect-square bg-twitch-tag-gray rounded-full bg-contain ${className ?? ''}`}
        style={{backgroundImage: icon ? `url('${icon}')` : ''}}
      >
      </div>
    </button>
  )
}

export default StreamerIcon
