import IconButton from 'Twitch/IconButton'
import ProfileIcon from './ProfileIcon'

function ProfileFooter() {
  return (
    <div className={`flex items-center justify-between px-2
    bg-discord-gray-6
    `}>
      <div className='grow flex items-center gap-x-2'>
        <ProfileIcon />
        <div className='group flex flex-col leading-tight py-1.5 font-bold text-sm'>
          <span className='cursor-pointer'>Username</span>
          <div className='text-xs flex flex-col text-discord-gray-2 h-4 overflow-hidden'>
            <span className='group-hover:-translate-y-4 transition-transform [transition-duration:0.4s]'>status</span>
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
