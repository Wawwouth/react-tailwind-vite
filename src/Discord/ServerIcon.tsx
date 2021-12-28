import { v4 as uuid } from "uuid"
import { ServerData } from "./dummy_data"

export type ServerIconProps = React.HTMLAttributes<HTMLDivElement> & {
  server: ServerData;
  current?: boolean;
}

const pictureTypes = ['gridy', 'bottts', 'identicon']

function ServerIcon({ server, current, ...props }: ServerIconProps) {
  return (
    <div {...props} className="w-full flex items-center content-center relative">
      {/* Server icon */}
      <div className={`w-full aspect-square cursor-pointer p-1 peer overflow-hidden
      [transition:border-radius_linear_0.3s]
      border border-transparent rounded-[24px] hover:rounded-2xl
      bg-discord-gray-3
      `}
      >
        <div className="h-full w-full bg-contain" style={{backgroundImage: server.icon ? `url('${server.icon}')` : `url('https://avatars.dicebear.com/api/${pictureTypes[Math.floor(Math.random() * pictureTypes.length)]}/${uuid()}.svg')`}}></div>
      </div>
      {/* Left cursor */}
      <div className={`w-1/5 aspect-square bg-white 
      rounded-full
      [transition:height_ease_0.3s]
      absolute -left-[15px]
      ${current ? 'h-4/5' : 'h-1/4 peer-hover:h-1/2 peer-hover:aspect-auto'}
      `}></div>
    </div>
  )
}

export default ServerIcon
