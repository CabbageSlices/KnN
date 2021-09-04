import React, { useLayoutEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalThemeStyle } from './themes'

export interface ThemeContextType {
  readonly theme: string
  setTheme: (newTheme: string) => void
}

const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState<string>('default')

  //TODO fix layouteffect
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const themeProp = {
    theme,
    setTheme: (newTheme: string) => setTheme(newTheme),
  }
  return (
    <StyledThemeProvider theme={themeProp}>
      <GlobalThemeStyle />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
