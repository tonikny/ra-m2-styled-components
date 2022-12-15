import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import { Title, Icon } from '../atoms'
import { MenuList } from '../molecules'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`
function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <FlexBox direction="row" align="center">
        {' '}
        <Icon iconName="home" size={dimensions.font.h1} />
        <Title level="1">MIPISO.com</Title>
      </FlexBox>
      <MenuList>
        <li>Buscador</li>
        <li>Datos</li>
        <li>Mi Perfil</li>
      </MenuList>
    </HeaderStyled>
  )
}

export default Header
