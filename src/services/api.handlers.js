import { BrawlStarsService } from './api.services'

async function getPlayerDetails(playerID) {
  console.log(playerID)
  try {
    const response = await BrawlStarsService.getPlayerByID(playerID)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

export default getPlayerDetails;