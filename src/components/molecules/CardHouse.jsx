import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { dimensions, FlexBox } from '../../styles'
import { Button, Card, Title } from '../atoms'

const CardHouseStyled = styled(Card)`
  img {
    max-height: ${() => dimensions.card.height};
    width: 100%;
    min-height: ${() => dimensions.card.height};
    border-radius: ${() => dimensions.card.radius};
    object-fit: cover;
  }
  justify-content: space-between;
  box-shadow: 1px 1px 1px ${({ shadowColor }) => shadowColor || 'black'};
`
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`

function CardHouse({ title, price, image, link, ...rest }) {
  return (
    <CardHouseStyled {...rest}>
      <img src={image} alt={title} />
      <TextDiv>
        <Title level="6" padBottom="4px">
          {title}
        </Title>
        <FlexBox direction="row" justify="space-between" align="center">
          {price}€{' '}
          <a href={link}>
            <Button>Localizar</Button>
          </a>
        </FlexBox>
      </TextDiv>
    </CardHouseStyled>
  )
}

CardHouse.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default CardHouse
