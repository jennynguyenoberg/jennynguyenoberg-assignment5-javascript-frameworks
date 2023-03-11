import Footer from './components/footer'
import Navbar from './components/navbar'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

export const metadata = {
  title: 'Jenny Nguyen Öberg',
  description: 'Portfolio of Jenny Nguyen Öberg',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}