import Head from 'next/head'
import WebAR from '../components/WebAR'
import Hero from '../components/Hero'
import Overlay from '../components/Overlay'
import Filter from '../components/Filter'
import Nft from '../components/NFT'
import Techno from '../components/Tech'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Services from '../components/Services'
import About from '../components/About'

export default function Home() {
  return (
<div>

      <Head>
        <title>VAM | DEMO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       {/* <Hero />
      <Overlay /> */}
      <WebAR />
      {/*<Filter />
      <Nft />
      <Techno />
      <Contact />
      <Footer /> */}
       {/* <Services />      */}
       {/* <About /> */}
     </div>
  )
}

{/* <h1>Hello</h1> */}