import twindConfig from '../twind.config';
import withTwindApp from '@twind/next/app'
import '../styles/globals.css'


function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withTwindApp(twindConfig, App);