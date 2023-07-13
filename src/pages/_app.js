import '../styles/globals.scss';
import Navbar from '../components/navbar.jsx'
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
    return(
        <>
            <Navbar style={{zIndex:100}}/>
            <Component {...pageProps} style={{zIndex: 1}} />
            <Footer/>
        </>
    );
  }