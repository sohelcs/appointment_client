import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>
    <Head>
      <link rel="icon" href="https://i.ibb.co/V3LJrK9/Slotify-1.png" type="image/x-icon" />
    </Head>
    {getLayout(<Component {...pageProps} />)}
    <ToastContainer />
  </>;
}
