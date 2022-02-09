import '../styles/globals.css'
import Layout from '../components/Layout'
import { PokedexProvider } from '../contexts/PokedexContext'

function MyApp({ Component, pageProps }) {
  return (
    <PokedexProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PokedexProvider>
  )
}

export default MyApp
