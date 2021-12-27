import { ServerData } from "./dummy_data"
import discord from 'resources/img/discord_white.png'

export type HomeIconProps = {
  current?: boolean;
}

function HomeIcon({ current }: HomeIconProps) {
  return (
    <div className="w-full flex items-center content-center relative">
      {/* Home icon */}
      <div className={`w-full aspect-square cursor-pointer p-2 peer
      [transition:border-radius_linear_0.3s_,_background-color_ease_0.5s]
      border border-transparent rounded-[24px] hover:rounded-2xl
      bg-discord-gray-3 hover:bg-discord-blue
      `}>
        <div className="h-full w-full bg-contain bg-no-repeat" style={{backgroundImage: `url('${discord}')`}}></div>
      </div>
      {/* Left cursor */}
      <div className={`w-1/5 aspect-square bg-transparent
      rounded-full
      [transition:height_ease_0.3s]
      absolute -left-[15px]
      ${current ? 'h-full' : 'h-1/4 peer-hover:h-1/2 peer-hover:aspect-auto peer-hover:bg-white'}
      `}></div>
    </div>
  )
}

export default HomeIcon
