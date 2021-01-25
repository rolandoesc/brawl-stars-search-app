import getPlayerDetails from "../../services/api.handlers"

export const searchPlayerByID = async (playerID, url, history, PlayerContext) => {
  try {
    const response = await getPlayerDetails(playerID)
    PlayerContext.setPlayerDetails(response)
    if (url !== `/player/${playerID}`)
      history.push(`/player/${playerID}`)

  } catch (error) {
    console.error(error)
  }
} 