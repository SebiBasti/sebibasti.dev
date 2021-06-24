import '../styles/global.scss'
import '../styles/colors.scss'
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
