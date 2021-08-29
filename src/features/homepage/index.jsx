import NavBar from 'components/nav-bar'
import Footer from 'features/footer'
import styled from 'styled-components'
import AppStoreLinks from './app-store-links'
import Banner from './banner'
import Communities from './communities'
import SignupForm from './signup-form'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Homepage = () => (
  <Container>
    <NavBar />
    <Banner />
    <Communities />
    <SignupForm />
    <AppStoreLinks />
    <Footer />
  </Container>
)

export default Homepage
