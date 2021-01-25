import { BrawlStarsService } from './api.services'

async function getPlayerDetails(playerID) {
  try {
    const { data } = await BrawlStarsService.getPlayerByID(playerID)
    return data
  } catch (error) {
    console.error(error)
  }
}

export default getPlayerDetails;