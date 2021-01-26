
import { Link, useParams } from "react-router-dom";
import DefaultLayout from "../../../layouts/default"
import SearchInput from "../../../components/common/SearchInput"
import InfoText from '../../../components/common/InfoHolder'
import PlayerName from '../../../components/common/PlayerNameStyled'
import { useContext } from "react";
import PlayerContext from "../../../context/player-context";
import LoadingView from "../../../components/common/LoadingView";




const PlayerResult = ({ details }) => {
  
  const keysList = {
    "trophies": "Trophies",
    "highestTrophies": "Highest Trophies",
    "expLevel": "Exp Level",
    "expPoints": "Exp Points",
    "3vs3Victories": "3vs3 Victories",
    "soloVictories": "Solo Victories",
    "duoVictories": "Duo Victories",
    "bestRoboRumbleTime": "Best RoboRumble Time",
    "bestTimeAsBigBrawler": "Best Time As Big Brawler",
    "club": "Club",
    "brawlers": "Brawlers"
  }
  const InfoDetail = ({ currentKey }) => {
    const { playerID } = useParams();
    let detail = details[currentKey]
    if (currentKey === 'club')
      detail = detail.name
    else if (currentKey === 'brawlers') {
      detail = detail.length
      const URL = `/player/${playerID}/brawlers`
      return (<Link to={URL} className="section__link">
        <InfoText text={detail} />
      </Link>)
    }
    return <InfoText text={detail} />
  };

  const ResultsDetails = Object.keys(keysList).map((el, index) => {
    return (
      <div className="result-detail" key={el}>
        <label className="text-shadow uppercase">{keysList[el]}</label>
        <InfoDetail currentKey={el} />
      </div>
    )
  });


  return (<div className="my-2">
    <PlayerName color={details.nameColor} name={details.name} />
    <div className="result-details__list">
      {ResultsDetails}
    </div>
  </div>
  )
}

const ResultPageView = () => {
  const { playerID } = useParams();
  const { playerDetails: Player, setPlayerDetails } = useContext(PlayerContext)
  const View = (

    <div className="result-page__holder">
      <div className="result-page--holder__alignment">
        <div className="flex justify-center pb-4">
          <SearchInput slug={playerID} />
        </div>
        {Object.keys(Player).length ? (
          <div className="result-details__holder">
            <p className="title uppercase text-shadow">Results For Player ID "#{playerID}"</p>

            <PlayerResult details={Player} /></div>) : <LoadingView/>}

      </div>
    </div>

  )
  return <DefaultLayout view={View} />
}

export default ResultPageView;