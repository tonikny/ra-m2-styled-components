import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'

const Card = styled(FlexBox)`
  border-width: ${({ border }) => border || '1px'};
  border-radius: ${({ radius }) => radius || dimensions.card.radius};
  background-color: ${({ color }) => color || ""};
`

export default Card