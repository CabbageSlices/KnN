import React, { useLayoutEffect, useState } from 'react'
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components'

// eslint-disable-next-line
const themes = {
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
}

const GlobalThemeVariables = createGlobalStyle`
  :root[data-theme='default'] {
    --colors-white: #f0f0f0;
    --colors-background: #292929;
    --colors-link: #63c059;
    --fontSizes-regular: 13px;
    --fontWeights-bold: 700;
  }
`

export const themeVariables = {
  colors: {
    white: 'var(--colors-white)',
    background: 'var(--colors-background)',
    link: 'var(--colors-link)',
  },
  fontSizes: {
    regular: 'var(--fontSizes-regular)',
  },
  fontWeights: {
    bold: 'var(--fontWeights-bold)',
  },
}

export interface ThemeContextType {
  readonly theme: string
  setTheme: (newTheme: string) => void
}

const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<string>('default')

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const themeProp = {
    theme,
    setTheme: (newTheme: string) => setTheme(newTheme),
  }
  return (
    <StyledThemeProvider theme={themeProp}>
      <GlobalThemeVariables />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
