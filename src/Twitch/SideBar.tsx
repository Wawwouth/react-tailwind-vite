import MaterialIcon from 'shared/MaterialIcon'
import IconButton from './IconButton'
import ChannelsListItem from './ChannelsListItem'

import { data } from './dummy_data'
import { useCallback, useState } from 'react'
import GroupedChannelsList from './GroupedChannelsList'

function SideBar() {
  const [expanded, setExpanded] = useState<boolean>(false)
  const expandeBtnClicked = useCallback(
    () => {
      setExpanded(v => !v)
    },
    [],
  )
  return (
    <nav className={`
      shrink-0
      flex flex-col
      ${expanded ? 'lg:w-60' : ''}
      bg-twitch-gray3 
      `}
    >
      <div className='flex flex-col grow overflow-y-auto overflow-x-hidden gap-4 py-2'>
        <GroupedChannelsList title='CHAÎNES SUIVIES' icon='favorite_border' expanded={expanded} switchExpand={expandeBtnClicked} />
        <GroupedChannelsList title='CHAÎNES RECOMMANDÉES' icon='videocam' expanded={expanded} />
      </div>
      <div className={`border-t-gray-500 border-t p-2 hidden ${expanded ? 'lg:grid' : ''} place-items-center`}>
        <div className='
        flex gap-1 p-0.5
        text-sm font-semibold
        border-2 rounded-md 
        transition-colors
        border-transparent hover:border-gray-600 focus-within:!border-twitch-purple2
        bg-twitch-input-gray focus-within:bg-twitch-gray
        '>
          <MaterialIcon name='search' />
          <input
            type="text"
            placeholder='Chercher des amis'
            className='bg-transparent outline-none'
          />
        </div>
      </div>
    </nav>
  )
}

export default SideBar
