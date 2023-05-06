import twindConfig from '../twind.config';
import withTwindApp from '@twind/next/app'
import '../styles/globals.css'
import { Provider } from '../context';

function App({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider> 

}

export default withTwindApp(twindConfig, App);