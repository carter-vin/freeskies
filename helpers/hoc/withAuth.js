import { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import API from 'configs/API';

// Hook
import useLocalStorage from 'helpers/hooks/useLocalStorage';
import { AuthContext } from 'helpers/services/UserController';
import { setAuthorization } from '../services/UserController';

function getRedirectTo() {
  if (typeof window !== 'undefined' && window.location) {
    return window.location;
  }
  return {};
}

export default function withAuth(WrappedComponent) {
  const Wrapper = (props) => {
    const [localstorage, setLocalStorage] = useLocalStorage('storage', {});
    const [auth, dispatch] = useContext(AuthContext);

    const redirectToLogin = () => {
      const redir = getRedirectTo();
      Router.replace(
        `/login?r=${redir.pathname + encodeURIComponent(redir.search)}`,
        '/login',
        { shallow: true }
      );

      setLocalStorage({});
    };

    const logout = () => {};

    const getUserData = async () => {
      try {
        const request = await API({
          method: 'post',
          url: '/accounts',
          headers: {
            'x-token': null,
          },
        });

        console.log('getUserData', request);
        return request;
      } catch (error) {
        console.log('getUserData', error);
      }
    };

    const refreshToken = async (cb) => {
      try {
        const request = await API({
          method: 'post',
          url: '/accounts/refresh-token',
          data: {
            refreshToken: localstorage.refreshToken,
          },
        });
        const { data, status } = request;
        // console.log('refreshToken', request);

        if (status === 200) {
          const newUserData = { ...auth, ...data };
          const userDispatchData = setAuthorization(newUserData);

          setLocalStorage(userDispatchData.payload);
          dispatch(userDispatchData);

          if (cb) {
            cb(userDispatchData.payload.token);
          }
        } else {
          throw new Error();
        }
      } catch (error) {
        redirectToLogin();
        console.error('refreshToken', error);
      }
    };

    useEffect(() => {
      if (localstorage.token) {
        dispatch(setAuthorization(localstorage));
      } else {
        redirectToLogin();
      }
    }, []);

    // useEffect(() => {
    //   console.log('localstorage, auth', localstorage, auth);
    // }, [auth]);

    if (auth.loading) return <span>Loading...</span>;
    return (
      <WrappedComponent
        auth={auth}
        authServices={{
          refreshToken,
          getUserData,
        }}
        {...props}
      />
    );
  };

  return Wrapper;
}
