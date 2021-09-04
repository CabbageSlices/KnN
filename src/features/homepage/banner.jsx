import styled from 'styled-components'
import { themeVariablesMap } from 'styles/themes'

const Container = styled.div`
  background-color: ${themeVariablesMap.colors.white};
  font-size: ${themeVariablesMap.fontSizes.regular};
  font-weight: ${themeVariablesMap.fontWeights.bold};
`

const Banner = () => <Container>I am bruce banner</Container>

export default Banner
