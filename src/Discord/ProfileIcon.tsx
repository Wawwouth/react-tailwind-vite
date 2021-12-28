import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { UserData } from './dummy_data';
import * as generators from './RandomAvatar'

const pictureTypes = Object.values(generators)
  .filter(g => ![generators.randomGridy, generators.randomBottts, generators.randomIdenticon].includes(g))

type ProfileIconProps = {
  user?: UserData;
  className?: string;
}

function ProfileIcon({ user, className }: ProfileIconProps) {
  const [icon, setIcon] = useState<string>(user?.icon ?? pictureTypes[Math.floor(Math.random() * pictureTypes.length)](uuid()))
  return (
    <button className={`relative ${className ?? ''}`}>
      <div 
      className={`w-7 aspect-square bg-white bg-contain bg-no-repeat rounded-full grid items-center`}
      style={{backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(icon)}')`}}
      >
      </div>
      <div className={`flex items-center justify-center absolute bottom-[-6%] right-[-6%] w-1/2 aspect-square bg-gray-400 rounded-full border-discord-gray-9 border-2`}>
        <div className="w-3/5 aspect-square rounded-full bg-discord-gray-9"></div>
      </div>
    </button>
  )
}

export default ProfileIcon
