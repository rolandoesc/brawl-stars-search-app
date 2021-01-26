import styled from 'styled-components'
import brawlersHashList from '../../assets/utils/brawlerMap'
const BrawlerHolder = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  transform: skewX(-10deg);
  border-radius: 2px;
  position: relative;
  height: 6rem;
`
const BrawlerInfoText = styled.span`
font-family: 'Lilita One';
color: white;
transform: skewX(10deg);
text-shadow: 0 2.5px 1px black;
`
const BrawlerNameText = styled.span`
font-family: 'Lilita One';
color: white;
transform: skewX(10deg);
text-shadow: 0 2.5px 1px black;
position: absolute;
top: 0;
left: 0;
z-index: 1;
`
const BrawlerImg = styled.img`
height: 6rem;
width: auto;
position: absolute;
top: 0;
left: 0;
`

const BrawlerDetailsHolder = ({ power, rank, trophies }) => (<div className="brawlers-list__holder">
  <div>
    <BrawlerInfoText>Power: {power}</BrawlerInfoText>
  </div>
  <div>
    <BrawlerInfoText>Rank: {rank}</BrawlerInfoText>
  </div>
  <div>
    <BrawlerInfoText>Trophies: {trophies}</BrawlerInfoText>
  </div>
</div>)


const brawlersPortraitList = brawlersHashList()
const BrawlerInfoHolder = ({ brawler }) => {
  const { name, power, rank, trophies } = { ...brawler }
  return (
    <BrawlerHolder>
      <BrawlerImg src={`${brawlersPortraitList.get(name)}`} />
      <BrawlerNameText>{name}</BrawlerNameText>
      <BrawlerDetailsHolder power={power} rank={rank} trophies={trophies} />

    </BrawlerHolder>
  )
}

export default BrawlerInfoHolder;