import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'styles'
import { cssGridTemplateMeasurementUnits, cssMeasurement } from 'utils/css-types'

type cssGridTemplateMeasurement = `${number}${cssGridTemplateMeasurementUnits}` | '0'
type cssGridColumnSize =
  | cssGridTemplateMeasurement
  | `minmax(${cssGridTemplateMeasurement}, ${cssGridTemplateMeasurement})`

interface GridWrapperProps {
  padding?: string
  columnGap?: cssMeasurement
  rowGap?: cssMeasurement
  defaultColumnSize?: cssGridColumnSize
  smallDesktopColumnSize?: cssGridColumnSize
}

const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;

  padding: ${props => props.padding || '0'};

  width: 100%;

  column-gap: ${props => props.columnGap || '40px'};
  row-gap: ${props => props.rowGap || '20px'};

  grid-template-columns: repeat(auto-fill, ${props => props.defaultColumnSize || '254px'});
  justify-content: center;

  @media screen and (max-width: ${breakpoints.smallDesktop.maxWidth}) {
    grid-template-columns: repeat(
      auto-fill,
      ${props => props.smallDesktopColumnSize || 'minmax(284px, 1fr)'}
    );
  }

  @media screen and (max-width: ${breakpoints.tablet.maxWidth}) {
    grid-template-columns: 1fr;
  }
`

interface IGrid {
  children?: React.ReactNode
  padding?: string
  columnGap?: cssMeasurement
  rowGap?: cssMeasurement
  defaultColumnSize?: cssGridColumnSize
  smallDesktopColumnSize?: cssGridColumnSize
}

const Grid = ({
  children,
  padding,
  columnGap,
  rowGap,
  defaultColumnSize,
  smallDesktopColumnSize,
}: IGrid): JSX.Element => (
  <GridWrapper
    padding={padding}
    defaultColumnSize={defaultColumnSize}
    rowGap={rowGap}
    columnGap={columnGap}
    smallDesktopColumnSize={smallDesktopColumnSize}
  >
    {children}
  </GridWrapper>
)

export default Grid
