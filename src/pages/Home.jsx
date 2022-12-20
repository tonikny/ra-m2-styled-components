import { Houses, Map } from '../components/organisms'
import { Body } from '../components/layout'
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
