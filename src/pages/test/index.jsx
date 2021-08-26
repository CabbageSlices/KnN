import Styled from 'styled-components'

const Container = Styled.div`
    background: red;
    padding: 100px;
    border: 1px solid black;
    font-size: 40px;
`

const Test = () => <Container>I am rendered statically</Container>

export default Test
