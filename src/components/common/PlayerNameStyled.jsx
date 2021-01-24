import styled from 'styled-components'

const PlayerName = ({ name, color }) => {
  const NameStyled = styled.h2`
    color: #${color.substring(4)};
    font-family: 'Lilita One';
    font-size: 22px;
  `
  return (<NameStyled className="text-shadow mx-auto text-center">{name}</NameStyled>)
}

export default PlayerName;