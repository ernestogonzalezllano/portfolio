import Home from '../components/Home/index'
import Head from 'next/head'

export default function Layout() {
  return (
    <>
      <Head>
        <title>Ernesto Gonzalez Llano - Full Stack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </>
  )
}
