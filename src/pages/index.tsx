import Head from 'next/head'
import Homepage from 'features/homepage'

const Home = () => {
  return (
    <>
      <Head>
        <title>Game Jostle</title>
      </Head>
      <Homepage />
    </>
  )
}

export default Home
