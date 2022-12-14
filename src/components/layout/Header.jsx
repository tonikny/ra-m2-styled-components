import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Title } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <div>
        <Title level="1">MIPISO.com</Title>
      </div>
      <div>
        <ul>
          <li>Buscador</li>
          <li>Datos</li>
          <li>Mi Perfil</li>
        </ul>
      </div>
    </HeaderStyled>
  )
}

export default Header
