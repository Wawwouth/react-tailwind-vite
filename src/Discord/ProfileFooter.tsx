import IconButton from 'Twitch/IconButton'
import ProfileIcon from './ProfileIcon'

function ProfileFooter() {
  return (
    <div className={`group flex items-center justify-between px-2 py-1
    bg-discord-gray-9
    `}>
      <div className='grow min-w-0 flex items-center gap-x-2'>
        <ProfileIcon className='hover:brightness-90' />
        <div className='grow min-w-0 flex flex-col leading-tight py-1.5 font-bold text-sm'>
          <span className='cursor-pointer'>Username</span>
          <div className='text-xs flex flex-col text-discord-gray-3 h-4 overflow-hidden'>
            <p className='shrink-0 group-hover:-translate-y-4 transition-transform [transition-duration:0.4s] text-ellipsis whitespace-nowrap overflow-x-hidden'>🐵 custom status 🙊</p>
            <span className='translate-y-4 group-hover:-translate-y-4 transition-transform [transition-duration:0.4s]'>#3670</span>
          </div>
        </div>
      </div>
      <div className='flex justify-around text-discord-gray-2'>
        <IconButton name='mic' />
        <IconButton name='headset' />
        <IconButton name='settings' />
      </div>
    </div>
  )
}

export default ProfileFooter
