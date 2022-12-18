import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Title } from '../atoms'

// Le faltan los select y el icono de buscar
const SubHeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0em;
  padding-bottom: 0em;
  background-color: lightblue;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'lightgreen'};
  }
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props}>
      <Title level="2">Subheader</Title>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
