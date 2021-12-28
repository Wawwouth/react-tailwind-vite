import { v4 as uuid } from 'uuid';

type ProfileIconProps = {
  className?: string
}

function ProfileIcon({className}: ProfileIconProps) {
  return (
    <button className='relative'>
      <div className={`w-7 aspect-square bg-blue-500 rounded-full ${className ?? ''}`}
        style={{backgroundImage: `url('https://avatars.dicebear.com/api/pixel-art/${uuid()}.svg')`}}
      >
      </div>
      <div className={`absolute bottom-[5%] right-[5%] w-1/3 aspect-square bg-gray-400 rounded-full border-twitch-gray2 border-2`}>
      </div>
    </button>
  )
}

export default ProfileIcon
