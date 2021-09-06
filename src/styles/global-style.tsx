import { createGlobalStyle } from 'styled-components'
import { fontSizes } from 'styles'
import { themeVariablesMap } from './themes'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: ${themeVariablesMap.colors.backgroundPrimary};
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: ${themeVariablesMap.colors.white};
    font-size: ${fontSizes.small};
  }

  body {
    min-height: 100vh;
  }

  a, button {
    text-decoration: none;
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  button {
    background: none;
  }

  *:not(body):not(html) {
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
