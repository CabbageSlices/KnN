import Styled from 'styled-components'

const Container = Styled.div`
    background: green;
    padding: 100px;
    border: 1px solid black;
    font-size: 40px;
`

export async function getServerSideProps() {
  // Fetch data from external API

  // Pass data to the page via props
  return { props: {} }
}

const Test = () => <Container>I am rendered servierside</Container>

export default Test
