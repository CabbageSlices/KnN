import { createGlobalStyle } from 'styled-components'
import { Theme, Themes, ThemeVariablesMap } from './theme-type-definitions'
import { head, join, keys, pipe, reduce, values } from 'ramda'
import computePathsToNestedAttributes from 'utils/compute-paths-to-nested-attributes'
import flattenObj from 'utils/flatten-obj'

const themes: Themes = {
  default: {
    colors: {
      white: '#F0F0F0',
      background: '#222222',
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

export function convertThemesToGlobalStyleString<T extends Record<string, any>>(
  themes: T,
  defaultTheme?: string
): string {
  const styleString = pipe(
    reduce(
      (allThemesStyles: string[], currentThemeName: string) => [
        ...allThemesStyles,
        //eslint-disable-next-line
        //prettier-ignore
        `:root[data-theme='${currentThemeName}'] {${getThemeVariableValues(themes[currentThemeName])}}`,

        //if this is a default theme, we need to add to stylesheet without the data seelctor, that way even without a theme selected, these variables are applied.
        //this is because the initial server side render will not have a theme selected, which means none of our variables will be loaded unless we have this selector
        ...(defaultTheme && currentThemeName === defaultTheme
          ? //prettier-ignore
            [`:root:not([data-theme]), :root[data-theme=''] {${getThemeVariableValues(themes[currentThemeName])}}`]
          : []),
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

export const GlobalThemeStyle = createGlobalStyle`${convertThemesToGlobalStyleString(
  themes,
  'default'
)}`
