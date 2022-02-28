import '../styles/globals.css'
import {ModalProvider} from '../context/Context'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider >
  <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
