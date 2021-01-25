import { useContext } from 'react'
import myJSON from '../../../../assets/dummy.json'
import BrawlerInfoHolder from '../../../../components/common/BrawlersHolder'
import InfoText from '../../../../components/common/InfoHolder'
import LoadingView from '../../../../components/common/LoadingView'
import PlayerName from '../../../../components/common/PlayerNameStyled'
import PlayerContext from '../../../../context/player-context'
import DefaultLayout from '../../../../layouts/default'
const Brawlers = ({brawlers}) => [...brawlers].map(brawler => <>
<BrawlerInfoHolder brawler={brawler} key={brawler['id']}/>
</>)
const PlayerBrawlersList = () => {
  const { playerDetails: player, setPlayerDetails } = useContext(PlayerContext)

  const List = Object.keys(player).length ? 
  <>
  <div className="flex flex-col">
    <div className="w-full flex my-4">
      <PlayerName name={`${player.name}'s Brawlers`} color={player.nameColor}/>
    </div>
    <div className="w-3/4 mx-auto grid grid-cols-3 gap-4 max-h-80 overflow-y-auto overflow-x-hidden">
      <Brawlers brawlers={player.brawlers}/>
    </div>
  </div>
  </> : <LoadingView/>
  return <DefaultLayout view={List}/>
}
export default PlayerBrawlersList;