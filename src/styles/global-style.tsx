import { createGlobalStyle } from 'styled-components'
import { themeVariables } from './theme-provider'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${themeVariables.colors.background};
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: ${themeVariables.colors.white};
    font-size: ${themeVariables.fontSizes.regular};
  }

  body {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  *:not(body):not(html) {
    color: inherit;
  }
`

export default GlobalStyle
