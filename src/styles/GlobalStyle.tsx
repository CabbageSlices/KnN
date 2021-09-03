import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #292929;
    font-family: Nunito,Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #F0F0F0;
    font-size: 13px;
  }

  body {
    min-height: 100vh;
  }

  a {
    text-decoration: none;
  }

  * {
    color: inherit;
  }
`

export default GlobalStyle
