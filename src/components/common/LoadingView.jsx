import { useContext, useEffect } from "react"
import { useHistory, useRouteMatch } from "react-router-dom"
import { searchPlayerByID } from "../../assets/utils/search-player"
import PlayerContext from "../../context/player-context"

const LoadingView = () => {
  const player = useContext(PlayerContext);
  const { params: { playerID }, url } = useRouteMatch();
  let history = useHistory()
  useEffect(() => {
    const needsToSearch = !Object.keys(player.playerDetails).length
    if (needsToSearch)
      searchPlayerByID(playerID, url, history, player)
  }, [])
  return (
    <div className="flex my-auto justify-center">
      <span className="title text-shadow">Loading...</span>
    </div>
  )
}

export default LoadingView;