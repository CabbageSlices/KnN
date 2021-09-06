import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles'

interface GridWrapperProps {
  padding?: string
}

const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;

  padding: ${props => props.padding || '0'};

  width: 100%;

  column-gap: 40px;
  row-gap: 20px;

  grid-template-columns: repeat(auto-fill, 254px);
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.smallDesktop.maxWidth}) {
    grid-template-columns: repeat(auto-fill, minmax(284px, 1fr));
  }

  @media only screen and (max-width: ${breakpoints.tablet.maxWidth}) {
    grid-template-columns: 1fr;
  }
`

interface IGrid {
  children?: React.ReactNode
  padding?: string
}

const Grid = ({ children, padding }: IGrid): JSX.Element => (
  <GridWrapper padding={padding}>{children}</GridWrapper>
)

export default Grid
