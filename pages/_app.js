import '../styles/globals.css'
import Navbar from '../Components/Navbar.jsx';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
    );
}

export default MyApp
