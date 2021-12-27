import { ServerData } from "./dummy_data"

export type ServerBannerProps = {
  server: ServerData;
}
function ServerBanner({server}: ServerBannerProps) {
  return (
    <div>
      banner
    </div>
  )
}

export default ServerBanner
