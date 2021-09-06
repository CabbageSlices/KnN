import styled from 'styled-components'
import { themeVariablesMap } from 'styles'

interface HorizontalBreakProps {
  width?: string
  color?: string
}

const HorizontalBreak = styled.hr<HorizontalBreakProps>`
  width: ${props => props.width || '50px'};
  border: 1px solid ${props => props.color || themeVariablesMap.colors.divider};
  height: 3px;
  background-color: ${props => props.color || themeVariablesMap.colors.divider};
  border-radius: 5px;
  margin: 0;
`

export default HorizontalBreak
