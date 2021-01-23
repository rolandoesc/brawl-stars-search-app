import styled from 'styled-components'

const InfoHolderStyled = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  transform: skewX(-10deg);
  border-radius: 2px;
`
const InfoTextStyled = styled.span`
font-family: 'Lilita One';
font-size: 1rem;
color: white;
transform: skewX(10deg);
text-shadow: 0 2.5px 1px black;
`

const InfoText = ({ text }) => {
  return (
    <InfoHolderStyled>
      <InfoTextStyled>{text}</InfoTextStyled>
    </InfoHolderStyled>
  )
}
export default InfoText;