import styled from 'styled-components'
import { fontSizes, themeVariablesMap } from 'styles'

interface HeadingProps {
  margin?: string
  padding?: string
}

const Heading = styled.h1<HeadingProps>`
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  font-size: ${fontSizes.heading};
  color: ${themeVariablesMap.colors.white};
`
export default Heading
