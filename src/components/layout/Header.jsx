import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Title } from '../atoms'
import { MenuList } from '../molecules'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`
function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <FlexBox direction="row" align="center">
        <Title level="1">MIPISO.com</Title>
      </FlexBox>
      <MenuList>
        <li>
          <Link to="/">Buscador</Link>
        </li>
        <li>
          <Link to="/data">Datos</Link>
        </li>
        <li>
          <Link to="/profile">Mi Perfil</Link>
        </li>
      </MenuList>
    </HeaderStyled>
  )
}

export default Header
