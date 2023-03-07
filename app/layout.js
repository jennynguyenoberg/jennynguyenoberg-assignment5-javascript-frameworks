import Footer from './footer/page.js'
import Navbar from './navbar/page.js'
import Head from 'next/head'

export const metadata = {
  title: 'Portfolio of Jenny Nguyen Öberg',
  description: 'Portfolio of Jenny Nguyen Öberg',
}

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
