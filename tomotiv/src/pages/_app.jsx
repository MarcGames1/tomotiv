import withTwindApp from '@twind/next/app'
import '@/styles/globals.css'
import twindConfig from '../twind.config';


function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withTwindApp(twindConfig, App);