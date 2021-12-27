import { data } from "./dummy_data"

function Discord() {
  const [currentServer, setCurrentServer] = useState<number>(2)
  const serverSelected = useCallback((index: number) => {
    setCurrentServer(index)
  }, [])
  return (
      <ServerBar current={currentServer} onServerSelect={serverSelected} />
    </div>
  )
}

export default Discord
