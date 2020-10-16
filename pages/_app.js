import Head from 'next/head';
import { TransitionGroup } from 'react-transition-group';
import Modal from 'react-modal';
import { ModalProvider } from 'react-modal-hook';
import 'css/tailwind.css';
import 'antd/dist/antd.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'css/global.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);

Modal.setAppElement('#modal_place');

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Freeskies</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ModalProvider rootComponent={TransitionGroup}>
        <div id="app_root">
          <Component {...pageProps} />
        </div>
        <div id="modal_place"></div>
      </ModalProvider>
    </>
  );
}
