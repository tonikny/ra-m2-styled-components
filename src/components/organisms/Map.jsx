import React from 'react'
import styled from 'styled-components'
import { dimensions } from '../../styles'

const MapStyled = styled.div`
  width: 50%;
  margin: ${() => dimensions.card.gap};
  padding: 2rem;
  background-color: grey;
  border-radius: 10px;
`

function Map() {
  return <MapStyled>Map</MapStyled>
}

export default Map
