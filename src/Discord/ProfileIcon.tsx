type ProfileIconProps = {
  className?: string
}

function ProfileIcon({className}: ProfileIconProps) {
  return (
    <button className='relative'>
      <div className={`w-7 aspect-square bg-blue-500 rounded-full ${className ?? ''}`}>
      </div>
      <div className={`flex items-center justify-center absolute bottom-[-6%] right-[-6%] w-1/2 aspect-square bg-gray-400 rounded-full border-discord-gray-6 border-2`}>
        <div className="w-3/5 aspect-square rounded-full bg-discord-gray-6"></div>
      </div>
    </button>
  )
}

export default ProfileIcon
