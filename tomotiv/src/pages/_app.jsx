import twindConfig from '../twind.config';
import withTwindApp from '@twind/next/app'
import '../styles/globals.css'
import { Provider } from '../context';
import { Toaster } from 'react-hot-toast';

function App({ Component, pageProps }) {
  return <Provider>
    <Toaster />
    <Component {...pageProps} />
    </Provider> 

}

export default withTwindApp(twindConfig, App);