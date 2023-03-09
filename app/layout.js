import Footer from './components/footer'
import Navbar from './components/navbar'
// import Head from 'next/head'
import '../styles/globals.css'

export const metadata = {
  title: 'Portfolio of Jenny Nguyen Öberg',
  description: 'Portfolio of Jenny Nguyen Öberg',
}

export default function Layout({ children }) {
  return <>
    <div>
      {/* <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  </>
}