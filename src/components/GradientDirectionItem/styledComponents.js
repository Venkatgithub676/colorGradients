// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorLiItem = styled.li`
  margin-right: 10px;

  @media screen and (max-width: 576px) {
    width: 47%;
    margin-bottom: 10px;
    margin-right: 0;
  }
`

export const OpacityDirection = styled(GradientGeneratorLiItem)`
   ;
`

export const GradientButtons = styled.button`
  height: 40px;
  width: 120px;
  border: none;
  opacity: ${props => (props.activeDirection ? 1 : 0.5)};
  background-color: #ffffff;
  font-family: 'Roboto';
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 576px) {
    height: 45px;
    width: 100%;
  }
`
