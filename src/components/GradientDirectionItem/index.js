// Write your code here

import {
  GradientButtons,
  OpacityDirection,
  GradientGeneratorLiItem,
} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, activeDirection, clickDir} = props
  const {displayText, value, directionId} = each
  console.log(activeDirection)

  const clickDirectionBtn = () => {
    clickDir(value)
  }

  return (
    <GradientGeneratorLiItem>
      <GradientButtons
        activeDirection={activeDirection}
        onClick={clickDirectionBtn}
        value={value}
      >
        {displayText}
      </GradientButtons>
    </GradientGeneratorLiItem>
  )
}

export default GradientDirectionItem
