import { v4 as uuid } from 'uuid';

type ProfileIconProps = {
  className?: string
}

function ProfileIcon({ className }: ProfileIconProps) {
  return (
    <button className={`relative ${className ?? ''}`}>
      <div 
      className={`w-7 aspect-square bg-white bg-contain bg-no-repeat rounded-full`}
      style={{backgroundImage: `url('https://avatars.dicebear.com/api/pixel-art/${uuid()}.svg')`}}
      >
      </div>
      <div className={`flex items-center justify-center absolute bottom-[-6%] right-[-6%] w-1/2 aspect-square bg-gray-400 rounded-full border-discord-gray-6 border-2`}>
        <div className="w-3/5 aspect-square rounded-full bg-discord-gray-6"></div>
      </div>
    </button>
  )
}

export default ProfileIcon
