import App from 'next/app';
import Head from 'next/head';
import { TransitionGroup } from 'react-transition-group';
import { ModalProvider } from 'react-modal-hook';
import 'css/tailwind.css';
import 'antd/dist/antd.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'css/global.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { AuthProvider } from 'helpers/services/UserController';
import { wrapper } from 'redux/store';

library.add(far);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
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
          <AuthProvider>
            <div id="app_root">
              <Component {...pageProps} />
              <div id="modal_place"></div>
            </div>
          </AuthProvider>
        </ModalProvider>
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
