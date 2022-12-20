import { Houses } from '../components/organisms'
import { Body } from '../components/layout'
import Map from '../components/organisms/Map'
import { FlexBox } from '../styles'

function Home() {
  return (
    <Body>
      <FlexBox direction="row">
        <Houses />
        <Map />
      </FlexBox>
    </Body>
  )
}

export default Home
