import { v4 as uuid } from 'uuid';

type StreamerIconProps = {
  icon?: string;
  className?: string
}

function StreamerIcon({icon, className}: StreamerIconProps) {
  return (
    <button>
      <div 
        className={`w-7 aspect-square bg-twitch-tag-gray rounded-full bg-contain ${className ?? ''}`}
        style={{backgroundImage: icon ? `url('${icon}')` : `url('https://avatars.dicebear.com/api/pixel-art/${uuid()}.svg')`}}
      >
      </div>
    </button>
  )
}

export default StreamerIcon
