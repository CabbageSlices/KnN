import styled from 'styled-components'

interface ColumnProps {
  width?: string
  padding?: string
}

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.width || '100%'};
  ${props => (props.padding ? `padding: ${props.padding};` : '')}
`

export default Column
