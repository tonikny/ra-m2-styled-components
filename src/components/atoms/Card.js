import styled from 'styled-components'
import { colors, dimensions, FlexBox } from '../../styles'

const Card = styled(FlexBox)`
  border: ${({ border }) => border || 'none'};
  border-radius: ${({ radius }) => radius || dimensions.radius};
  height: ${({ height }) => height || dimensions.card.height};
  width: ${({ width }) => width || dimensions.card.width};
  background-color: ${({ color }) => color || colors.secondary};
`

export default Card