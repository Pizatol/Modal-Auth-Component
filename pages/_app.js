import '../styles/globals.css'
import {ModalProvider} from '../context/Context'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider >
    <Navbar/>
  <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
