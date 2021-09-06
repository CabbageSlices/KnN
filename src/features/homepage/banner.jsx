import styled from 'styled-components'
import { fontSizes, fontWeights } from 'styles'
import { themeVariablesMap } from 'styles/themes'

const Container = styled.div`
  background-color: ${themeVariablesMap.colors.white};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
`

const Banner = () => <Container>I am bruce banner</Container>

export default Banner
