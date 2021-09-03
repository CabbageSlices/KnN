import GlobalStyle from 'styles/global-style'
import type { AppProps } from 'next/app'
import ThemeProvider from 'styles/theme-provider'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
