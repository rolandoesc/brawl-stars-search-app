import { BrawlStarsService } from './api.services'

async function getPlayerDetails(playerID) {
  return await BrawlStarsService.getPlayerByID(playerID)
  // try {
  //   const { data, status } = await BrawlStarsService.getPlayerByID(playerID)
  //   return { data, status }
  // } catch ({ response: { status } }) {
  //   return { data: { NotFound } , status }
  // }
}

export default getPlayerDetails;