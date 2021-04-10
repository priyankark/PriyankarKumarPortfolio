import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(fab,faGithub,faLinkedin);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
