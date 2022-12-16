import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const ButtonStyled = styled.button`
  background-color: ${({ color }) => color || colors.button.background};
  color: ${({ textColor }) => textColor || colors.button.textColor};
  border: 0;
  border-radius: ${dimensions.card.radius};
  padding: 5px 10px;
  cursor: pointer;
`

export default function Button({ children, ...rest }) {
  return (
    <ButtonStyled type="button" {...rest}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}
