// @ts-check
import '../styles/globals.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <pre>{JSON.stringify(pageProps, null, 2)}</pre>
      <Footer date="2021" />
    </div>
  );
}

export default MyApp;
