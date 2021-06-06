import getPlayerDetails from "../../services/api.handlers"

export const searchPlayerByID = async (playerID, url, history, PlayerContext) => {
  try {
    const { data, status } = await getPlayerDetails(playerID)
    PlayerContext.setPlayerDetails(data)
    if (url !== `/player/${playerID}`)
      history.push(`/player/${playerID}`)

  } catch (error) {
    // { response: { status }}
    console.error(error);
      history.push('/error/404')
  }
} 