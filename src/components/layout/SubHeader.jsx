import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Title } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2em;
  padding-bottom: 2em;
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
