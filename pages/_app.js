import Head from 'next/head';
import { TransitionGroup } from 'react-transition-group';
import { ModalProvider } from 'react-modal-hook';
import 'css/tailwind.css';
import 'antd/dist/antd.css';
import 'css/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Freeskies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ModalProvider rootComponent={TransitionGroup}>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
