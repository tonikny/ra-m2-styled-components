/* eslint-disable camelcase */ // Becasuse of the json format
import React from 'react'
import styled from 'styled-components'
import Ads from '../../data/ads.json'
import { dimensions, Grid } from '../../styles'
import { CardHouse } from '../molecules'

const HousesStyled = styled(Grid)`
  column-gap: ${() => dimensions.card.gap};
  row-gap: ${() => dimensions.card.gap};
  padding: 2rem;
`

function Houses() {
  return (
    <HousesStyled>
      {Ads.map(({ listing_id, title, price, image_url, details_url }) => {
        const newPrice = `${price * 1000}` // Cast new price to text
        return (
          <CardHouse
            key={listing_id}
            title={title}
            price={newPrice}
            image={image_url}
            link={details_url}
          />
        )
      })}
    </HousesStyled>
  )
}

export default Houses
