import { createGlobalStyle } from 'styled-components'
import { themeVariablesMap } from './themes'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${themeVariablesMap.colors.background};
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: ${themeVariablesMap.colors.white};
    font-size: ${themeVariablesMap.fontSizes.regular};
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
