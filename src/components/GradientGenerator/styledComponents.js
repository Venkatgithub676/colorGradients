// Style your elements here

import styled from 'styled-components'

export const GradientBg = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:20px;
  text-align:center;
  background-image: linear-gradient(to ${props =>
    props.activeDirection}, ${props => props.color3}, ${props => props.color4});
  );

  

`

export const GenerateHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const ChooseDirectionHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ededed;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const GradientGeneratorUlCon = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;
  flex-wrap: wrap;

  @media screen and (max-width: 576px) {
    justify-content: space-between;
    width: 100%;
  }
`

export const PickColors = styled(ChooseDirectionHeading)``

export const ColorCon = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    width: 70%;
  }
`

export const ColorCon1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ParaEl = styled.p`
font-family:"Roboto",
font-size:20px;
margin-bottom:10px;
color:#ffffff;
`

export const InputEl = styled.input`
  width: 120px;
  height: 50px;
  padding: 0;
  border: none;
  background-color: transparent;
`

export const GenerateBtn = styled.button`
  width: 100px;
  height: 35px;
  font-family: 'Roboto';
  margin-top: 50px;
  background-color: #00c9b7;
  color: #1e293b;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`
