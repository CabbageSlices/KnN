import styled from 'styled-components'
import { themeVariables } from 'styles/theme-provider'

const Container = styled.div`
  background-color: ${themeVariables.colors.white};
  font-size: ${themeVariables.fontSizes.regular};
  font-weight: ${themeVariables.fontWeights.bold};
`

const Banner = () => <Container>I am bruce banner</Container>

export default Banner
