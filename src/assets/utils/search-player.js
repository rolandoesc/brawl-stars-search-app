import getPlayerDetails from "../../services/api.handlers"

export const searchPlayerByID = async (playerID, url, history, PlayerContext) => {
  try {
    const { data, status } = await getPlayerDetails(playerID)
    PlayerContext.setPlayerDetails(data)
    if (url !== `/player/${playerID}`)
      history.push(`/player/${playerID}`)

  } catch ({ response: { status }}) {
      history.push('/error/404')
  }
} 