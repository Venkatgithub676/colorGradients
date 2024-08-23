import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientBg,
  GenerateHeading,
  ChooseDirectionHeading,
  GradientGeneratorUlCon,
  PickColors,
  ColorCon,
  ColorCon1,
  InputEl,
  ParaEl,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirectionId: 'top',
    color1: '#8ae323',
    color2: '#014f7b',
    allDtls: {activeDirection: 'top', color3: '#8ae323', color4: '#014f7b'},
  }

  clickDir = value => {
    // console.log(id)
    const filteredDir = gradientDirectionsList.filter(
      each => each.value === value,
    )
    console.log(filteredDir)
    this.setState({activeDirectionId: filteredDir[0].value})
  }

  changeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  changeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  clickGenerate = () => {
    const {activeDirectionId, color1, color2} = this.state
    this.setState({
      allDtls: {
        activeDirection: activeDirectionId,
        color3: color1,
        color4: color2,
      },
    })
  }

  render() {
    const {activeDirectionId, color1, color2, allDtls} = this.state
    const {activeDirection, color3, color4} = allDtls
    return (
      <GradientBg
        data-testid="gradientGenerator"
        activeDirection={activeDirection}
        color3={color3}
        color4={color4}
      >
        <GenerateHeading>Generate a CSS Color Gradient</GenerateHeading>
        <ChooseDirectionHeading>Choose Direction</ChooseDirectionHeading>
        <GradientGeneratorUlCon>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              each={each}
              activeDirection={activeDirectionId === each.value}
              key={each.directionId}
              clickDir={this.clickDir}
            />
          ))}
        </GradientGeneratorUlCon>
        <PickColors>Pick the Colors</PickColors>
        <ColorCon>
          <ColorCon1>
            <ParaEl>{color1}</ParaEl>
            <InputEl onChange={this.changeColor1} value={color1} type="color" />
          </ColorCon1>
          <ColorCon1>
            <ParaEl>{color2}</ParaEl>
            <InputEl onChange={this.changeColor2} type="color" value={color2} />
          </ColorCon1>
        </ColorCon>
        <GenerateBtn onClick={this.clickGenerate}>Generate</GenerateBtn>
      </GradientBg>
    )
  }
}

export default GradientGenerator
