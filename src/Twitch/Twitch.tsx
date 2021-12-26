import MaterialIcon from 'shared/MaterialIcon'
import CategoryCard from './CategoryCard'
import Tag from './Tag'
import IconButton from './IconButton'
import ProfileIcon from './ProfileIcon'
import './Twitch.css'
import ChannelsList from './ChannelsList'
import StreamerListItem from './StreamerListItem'

import { data } from './dummy_data'

function Twitch() {
  return (
    <div className='
      h-full w-full bg-twitch-gray text-white overflow-hidden
      flex flex-col
    '>
      <nav className='bg-twitch-gray2 flex gap-1 px-1 items-center'>
        <a href="#" className='grid place-items-center'>
          <MaterialIcon
            name='tv'
            className='rounded-full p-1 bg-twitch-purple2
          hover:translate-x-0.5 hover:-translate-y-0.5'
          />
        </a>
        <a href="#" 
        title='Suivis'
        className='grid place-items-center px-3 py-4 text-white link'>
          <MaterialIcon
            name='favorite_border'
            className='text-lg'
          />
        </a>
        <a href="#" 
        title='Parcourir'
        className='grid place-items-center px-3 py-4 text-white link current'>
          <MaterialIcon
            name='content_copy'
            className='text-lg'
          />
        </a>
        <IconButton name="more_vert"
          title='Plus'
          iconClass='text-white text-xls' />

        <span className='grow'></span>

        <IconButton name="search"
          iconClass='text-white text-lg' />
        <IconButton name="inbox"
          iconClass='text-white text-lg' />
        <IconButton name="chat_bubble_outline" iconType='round'
          iconClass='text-white text-lg' />
        <IconButton name="diamond" iconType='outlined'
          iconClass='text-white text-lg' />
        <ProfileIcon className='w-8' />
      </nav>
      <main className='grow flex min-h-0'>
        <nav className='
          shrink-0
          overflow-y-auto
          lg:w-60
          bg-twitch-gray3 
          flex flex-col gap-2
          '
        >
          <MaterialIcon name="favorite_border" iconType='round'
            className='lg:hidden text-gray-400'
          />
          <div className=' hidden lg:flex justify-between items-center pl-3 py-1'>
            <span className='text-sm font-semibold'>CHAÎNES SUIVIES</span>
            <IconButton name='first_page' />
          </div>
          <div className='space-y-1'>
            {data.following.map(({streamer, category, viewers, profilePicture}) => (
              <StreamerListItem key={streamer} streamerName={streamer} category={category} viewers={viewers} />
            ))}
          </div>
          <MaterialIcon name="videocam" iconType='outlined'
            className='lg:hidden text-gray-400'
          />
          <div className=' hidden lg:flex justify-between items-center pl-3 py-1'>
            <span className='text-sm font-semibold'>CHAÎNES RECOMMANDÉES</span>
          </div>
          <div className='space-y-1'>
            {data.following.map(({streamer, category, viewers, profilePicture}) => (
              <StreamerListItem key={streamer} streamerName={streamer} category={category} viewers={viewers} />
            ))}
          </div>
        </nav>
        <div className='grow flex flex-col px-4 py-8 gap-6 overflow-y-auto'>
          <span className='text-6xl font-bold'>Parcourir</span>
          {/* Categories list */}
          <div className='flex gap-x-2 gap-y-4 flex-wrap'>
            <CategoryCard name='Jeux' icon="videogame_asset" />
            <CategoryCard name='IRL' icon="mic" />
            <CategoryCard name='Musique' icon="headset_mic" />
            <CategoryCard name='Esports' icon="emoji_events" />
            <CategoryCard name='Créatif' icon="color_lens" />
          </div>
          {/* Categories or Channels */}
          <div className='flex gap-4'>
            <a href='#' className='font-semibold text-lg link'>
              <span>Catégories</span>
            </a>
            <a href='#' className='group font-semibold text-lg link current'>
              <span>Chaînes live</span>
            </a>
          </div>
          <div className='flex flex-wrap justify-between gap-x-2 gap-y-1'>
            {/* Filtering */}
            <div className='flex gap-2 items-center'>
              <span className='min-w-max'>Filtrer par</span>
              <div className='flex flex-wrap gap-x-4 gap-y-2'>
                <div className='flex items-center gap-2 bg-twitch-input-gray p-1 rounded-md text-sm text-gray-400 grow'>
                  <MaterialIcon name='search' />
                  <input
                    type='text'
                    placeholder='Rechercher des tags'
                    className='bg-transparent '
                  />
                </div>
                <div>
                  <Tag text='Français' size='medium' close />
                </div>
              </div>
            </div>

            {/* Sorting */}
            <div className='flex gap-2'>
              <span>Trier par</span>
              <select
                name="sort"
                id="sort"
                className='bg-twitch-input-gray rounded-md p-1 text-sm font-semibold'
              >
                <option value="0">Recommandées pour vous</option>
              </select>
            </div>
          </div>
          {/* Channels list */}
          <ChannelsList />
        </div>
      </main>
    </div>
  )
}

export default Twitch
