import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Title = styled('h1')
  .attrs(({ level }) => {
    if (level < 1 || level > 6) throw new Error('Level must be 1,2,3,4,5 or 6')
    return {
      as: `h${level}`,
    }
  })
  `
  color: ${({ color }) => color || colors.font.headings};
  font-size: ${({ fontSize, level }) => fontSize || dimensions.font[`h${level}`]};
  margin: ${({ margin }) => margin || "0"};
  padding-bottom: ${({ padBottom }) => padBottom || "0"};
`

export default Title;
