import styled from 'styled-components'
import { themeVariablesMap } from 'styles'

interface HorizontalBreakProps {
  width?: string
  color?: string
}

const HorizontalBreak = styled.hr<HorizontalBreakProps>`
  width: ${props => props.width || '50px'};
  border: 2px solid ${props => props.color || themeVariablesMap.colors.divider};
  border-radius: 2px;
`

export default HorizontalBreak
