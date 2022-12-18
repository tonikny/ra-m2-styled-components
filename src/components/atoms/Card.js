import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'

// No se donde esta el fallo, pero el borde izquierdo no aparece y el sombreado tampoco es o parece el correcto
const Card = styled(FlexBox)`
  border-width: ${({ border }) => border || '1px'};
  border-radius: ${({ radius }) => radius || dimensions.card.radius};
  background-color: ${({ color }) => color || ''};
`

export default Card
