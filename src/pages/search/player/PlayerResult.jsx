import {
  useParams
} from "react-router-dom";
import DefaultLayout from "../../../layouts/default"
import SearchInput from "../../../components/common/SearchInput"
import myJSON from '../../../assets/dummy.json'
import styled from 'styled-components'
import InfoText from '../../../components/common/InfoHolder'
const Name = ({ name, color }) => {
  const NameStyled = styled.h2`
    color: #${color.substring(4)};
    font-family: 'Lilita One';
    font-size: 22px;
  `
  return (<NameStyled className="text-shadow mx-auto text-center">{name}</NameStyled>)
}
const PlayerResult = () => {
  const Player = { ...myJSON }
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
    let detail = Player[currentKey]
    if (currentKey === 'club')
      detail = detail.name
    else if (currentKey === 'brawlers')
      detail = detail.length
    return <InfoText text={detail} />
  }
  const ResultsDetails = Object.keys(keysList).map((el, index) => {
    return (
      <div className="result-detail" key={el}>
        <label className="text-shadow uppercase">{keysList[el]}</label>
        <InfoDetail currentKey={el} />
      </div>
    )
  })


  return (<div className="my-2">
    <Name color={Player.nameColor} name={Player.name} />
    <div className="grid grid-cols-3 gap-4">
      {ResultsDetails}
    </div>
  </div>
  )
}

const ResultPageView = () => {
  const { playerID } = useParams();
  const View = (<div className="flex justify-center">
    <div className="flex flex-col mx-auto justify-center">
      <div className="flex justify-center pb-4">
        <SearchInput slug={playerID} />
      </div>
      <p className="title uppercase text-shadow">Results For Player ID "#{playerID}"</p>

      <PlayerResult />
    </div>
  </div>)
  return <DefaultLayout view={View} />
}

export default ResultPageView;