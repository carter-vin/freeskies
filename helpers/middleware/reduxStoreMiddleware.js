import API from 'configs/API';
import { extractSession } from 'helpers/services/session';
import {
  REFRESH_TOKEN,
  SET_AUTHORIZED,
  SET_USER_DATA,
} from '../../redux/reducers/authReducer';
import { saveSession } from 'helpers/services/session';

const getUserData = async (store) => {
  try {
    const localstorage = extractSession();
    const request = await API({
      method: 'get',
      url: '/accounts',
      headers: {
        'x-token': localstorage.token,
      },
    });

    const { data, status } = request;

    if (status === 200) {
      store.dispatch({ type: SET_USER_DATA, payload: data });
      store.dispatch({
        type: REFRESH_TOKEN,
        payload: {
          token: localstorage.token,
          refreshToken: localstorage.refreshToken,
        },
      });
      store.dispatch({ type: SET_AUTHORIZED });
    } else if (status === 403) {
      console.log('!!!!', store);
      store.dispatch({ type: '@@auth/REFRESH_TOKEN', payload: getUserData });
    }

    console.log('getUserData', data);
    return request;
  } catch (error) {
    console.log('getUserData', error);
  }
};

const refreshToken = async (store, callback) => {
  try {
    const localstorage = extractSession();
    const request = await API({
      method: 'post',
      url: '/accounts/refresh-token',
      data: {
        refreshToken: localstorage.refreshToken,
      },
    });
    const { data, status } = request;
    console.log('refreshToken', request);

    if (status === 200) {
      saveSession({
        ...localstorage,
        ...data,
      });

      store.dispatch({ type: REFRESH_TOKEN, payload: data });

      if (callback) {
        callback();
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    // redirectToLogin();
    console.error('refreshToken', error);
  }
};

const reduxStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === '@@redux/INIT') {
    console.log('!! @@redux/INIT');
  }
  if (action.type === '@@auth/REFRESH_TOKEN') {
    console.log('auth/REFRESH_TOKEN', action);
    refreshToken(store, action.payload);
    // if (action.payload) action.payload(store);
  }
  if (action.type === '@@auth/GET_USER') {
    console.log('auth/GET_USER');
    getUserData(store);
  }
  return next(action);
};

export default reduxStorageMiddleware;
