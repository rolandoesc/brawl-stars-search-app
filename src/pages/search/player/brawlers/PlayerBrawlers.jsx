
import { Link, useParams } from "react-router-dom";
import { useContext } from 'react'
import BrawlerInfoHolder from '../../../../components/common/BrawlersHolder'
import LoadingView from '../../../../components/common/LoadingView'
import PlayerName from '../../../../components/common/PlayerNameStyled'
import PlayerContext from '../../../../context/player-context'
import DefaultLayout from '../../../../layouts/default'
import BSButton from "../../../../components/common/BSButton";
const Brawlers = ({ brawlers }) => [...brawlers].map(brawler => <>
  <BrawlerInfoHolder brawler={brawler} key={brawler['id']} />
</>)
const PlayerBrawlersList = () => {
  const { playerID } = useParams();
  const { playerDetails: player, setPlayerDetails } = useContext(PlayerContext)

  const List = <>{Object.keys(player).length ?
    <>
      <div className="flex flex-col">
        <div className="w-full flex my-4">
          <PlayerName name={`${player.name}'s Brawlers`} color={player.nameColor} />
        </div>
        <div className="brawlers__list">
          <Brawlers brawlers={player.brawlers} />
        </div>
      </div>
    </> : <LoadingView />}
    <Link className="text-center mt-2" to={`/player/${playerID}`}>
      <BSButton text="Go Back" />
    </Link>
  </>
  return <DefaultLayout view={List} />
}
export default PlayerBrawlersList;