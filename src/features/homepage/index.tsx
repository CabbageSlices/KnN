import Column from 'components/column'
import NavBar from 'components/nav-bar'
import Footer from 'features/footer'
import styled from 'styled-components'
import { themeVariablesMap } from 'styles'
import AppStoreLinks from './app-store-links'
import Banner from './banner'
import Communities from './communities'
import SignupForm from './signup-form'

interface BackgroundColor {
  backgroundColor: string
}

const LimitWidthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  max-width: 1178px;
  width: 100%;
`

const SectionWrapper = styled(Column)<BackgroundColor>`
  background-color: ${props =>
    props.backgroundColor || themeVariablesMap.colors.backgroundSecondary};
`

const Section = ({
  children,
  backgroundColor,
}: {
  children?: JSX.Element
  backgroundColor: string
}) => (
  <SectionWrapper backgroundColor={backgroundColor}>
    <LimitWidthWrapper>{children}</LimitWidthWrapper>
  </SectionWrapper>
)

const Homepage = () => (
  <Column>
    <NavBar />
    <Banner />
    <Section backgroundColor={themeVariablesMap.colors.backgroundSecondary}>
      <Communities />
    </Section>
    <SignupForm />
    <AppStoreLinks />
    <Footer />
  </Column>
)

export default Homepage
