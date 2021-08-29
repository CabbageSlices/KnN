import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
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
