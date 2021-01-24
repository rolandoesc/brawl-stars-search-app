import myJSON from '../../../../assets/dummy.json'
import BrawlerInfoHolder from '../../../../components/common/BrawlersHolder'
import InfoText from '../../../../components/common/InfoHolder'
import PlayerName from '../../../../components/common/PlayerNameStyled'
import DefaultLayout from '../../../../layouts/default'
console.log(myJSON, 'me ejecuto?')
const Brawlers = ({brawlers}) => [...brawlers].map(brawler => <>
<BrawlerInfoHolder brawler={brawler} key={brawler['id']}/>
</>)
const PlayerBrawlersList = () => {
  const player = {...myJSON}
  const List = (<div className="flex flex-col">
    <div className="w-full flex my-4">
      <PlayerName name={`${player.name}'s Brawlers`} color={player.nameColor}/>
    </div>
    <div className="w-2/3 mx-auto grid grid-cols-3 gap-4">
      <Brawlers brawlers={player.brawlers}/>
    </div>
  </div>)
  return <DefaultLayout view={List}/>
}
export default PlayerBrawlersList;