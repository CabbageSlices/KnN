import styled from 'styled-components'
import { fontSizes, fontWeights, themeVariablesMap } from 'styles'
import { cssMeasurement } from 'utils/css-types'

interface ButtonProps {
  fontSize?: string
  fontWeight?: string
  width: cssMeasurement
  height: cssMeasurement
  outlineColor: string
  hoverColor?: string
}

const HollowButton = styled.button<ButtonProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '36px'};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  border-radius: 5px;
  border: 1px solid ${props => props.outlineColor || themeVariablesMap.colors.link};
  cursor: pointer;

  :hover {
    background-color: ${props =>
      props.hoverColor || props.outlineColor || themeVariablesMap.colors.link};
    color: black;

    ${props => (props.hoverColor ? `border-color: ${props.hoverColor};` : '')}
  }
`

export default HollowButton
