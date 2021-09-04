import { createGlobalStyle } from 'styled-components'
import { Theme, Themes, ThemeVariablesMap } from './theme-type-definitions'
import { head, join, keys, pipe, reduce, values } from 'ramda'
import computePathsToNestedAttributes from 'utils/compute-paths-to-nested-attributes'
import flattenObj from 'utils/flatten-obj'

const themes: Themes = {
  default: {
    colors: {
      white: '#F0F0F0',
      background: '#292929',
      link: '#63c059',
    },
    fontSizes: {
      regular: '13px',
    },
    fontWeights: {
      bold: 700,
    },
  },
  test: {
    colors: {
      white: '#000000',
      background: '#FF0000',
      link: '#63c059',
    },
    fontSizes: {
      regular: '29px',
    },
    fontWeights: {
      bold: 900,
    },
  },
}

export function getThemeVariableValues<T>(theme: T): string {
  const themeVariableValues = flattenObj(theme, nestedPaths => `--${nestedPaths.join('-')}`) //theme variable to value

  //return as one string
  return pipe(
    reduce(
      (themeVariableStrings: string[], variableName: string) => [
        ...themeVariableStrings,
        `${variableName}: ${themeVariableValues[variableName]}`,
      ],
      []
    ),
    join(';\n')
  )(keys(themeVariableValues))
}

export function convertThemesToGlobalStyleString<T extends Record<string, any>>(themes: T): string {
  const styleString = pipe(
    reduce(
      (allThemesStyles: string[], currentThemeName: string) => [
        ...allThemesStyles,
        //eslint-disable-next-line
        //prettier-ignore
        `:root[data-theme='${currentThemeName}'] {${getThemeVariableValues(themes[currentThemeName])}}`,
      ],
      []
    ),
    join('\n')
  )(keys(themes))

  return styleString
}

export const themeVariablesMap: ThemeVariablesMap<Theme> = <ThemeVariablesMap<Theme>>(
  computePathsToNestedAttributes(
    <Record<string, any>>head(values(themes)),
    nestedPath => `var(--${nestedPath.join('-')})`
  )
)

export const GlobalThemeStyle = createGlobalStyle`${convertThemesToGlobalStyleString(themes)}`
