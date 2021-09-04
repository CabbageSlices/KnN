import { convertThemesToGlobalStyleString, getThemeVariableValues } from 'styles/themes'

type Theme = {
  colors: {
    white: string
    black: string
  }
  fontSizes: {
    regular: string
  }
}

type Themes = {
  [name: string]: Theme
}

it('getThemeVariableValues generates string containing correct values for each of the theme variables', () => {
  const theme = <Theme>{
    colors: { white: '#ffffff', black: '#000000' },
    fontSizes: { regular: '10px' },
  }

  const values = getThemeVariableValues(theme)

  expect(values).toBe(
    '--colors-white: #ffffff;\n--colors-black: #000000;\n--fontSizes-regular: 10px'
  )
})

it('convertThemesToGlobalStyleString generates string containing correct values for each theme', () => {
  const themes = <Themes>{
    default: {
      colors: { white: '#ffffff', black: '#000000' },
      fontSizes: { regular: '10px' },
    },
    inverted: {
      colors: { white: '#000000', black: '#ffffff' },
      fontSizes: { regular: '99px' },
    },
  }

  const values = convertThemesToGlobalStyleString(themes)

  expect(values).toBe(
    ":root[data-theme='default'] {--colors-white: #ffffff;\n--colors-black: #000000;\n--fontSizes-regular: 10px}\n" +
      ":root[data-theme='inverted'] {--colors-white: #000000;\n--colors-black: #ffffff;\n--fontSizes-regular: 99px}"
  )
})
