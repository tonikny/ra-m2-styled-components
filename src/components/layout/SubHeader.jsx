import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import { Icon } from '../atoms'
import SelectCiudad from '../organisms/SelectCiudad'
import SelectTipoInmueble from '../organisms/SelectTipoInmueble'

const SubHeaderStyled = styled(FlexBox)`
  flex-direction: row;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: lightblue;

  &:hover {
    background-color: ${(props) =>
      props.hoverColor ? props.hoverColor : 'lightgreen'};
  }
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props}>
      <SelectTipoInmueble />
      <SelectCiudad />

      <Icon iconName="search" size={dimensions.font.h3} />
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
