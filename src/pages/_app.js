import '../styles/globals.scss';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en);

export default function App({ Component, pageProps }) {
    return(
        <div>
            <Component {...pageProps} style={{zIndex: 1}} />
        </div>
    );
  }