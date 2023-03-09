import Footer from './components/footer'
import Navbar from './components/navbar'
// import Head from 'next/head'
import '../styles/globals.css'

export const metadata = {
  title: 'Portfolio of Jenny Nguyen Öberg',
  description: 'Portfolio of Jenny Nguyen Öberg',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>   
  )
}