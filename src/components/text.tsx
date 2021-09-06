import styled from 'styled-components'
import { fontSizes, themeVariablesMap } from 'styles'

interface TextProps {
  margin?: string
  padding?: string
}

const Text = styled.p<TextProps>`
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  font-size: ${fontSizes.text};
  color: ${themeVariablesMap.colors.white};
`

export default Text
