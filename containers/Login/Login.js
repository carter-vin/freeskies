import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { message } from 'antd';
import API from 'configs/API';

// Hook
import useLocalStorage from 'helpers/hooks/useLocalStorage';

// Styles
import styles from './styles/login.module.css';
import { LoginContext } from './storage/LoginContext';

// Actions
import { setLoading, setAuthorization } from './actions';

export default function Login() {
  const [username, setUsername] = useState('alex');
  const [password, setPassword] = useState('123');
  const router = useRouter();
  const [storage, dispatch] = useContext(LoginContext);
  const [localstorage, setLocalStorage] = useLocalStorage('storage', storage);

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/signup');
  };

  const handleLogin = (username, password) => {
    dispatch(setLoading(true));
    API({
      method: 'post',
      url: '/accounts/login',
      data: {
        username,
        password,
      },
    }).then((response) => {
      const { status, data } = response;

      if (status === 200) {
        const dispatchData = setAuthorization(data);

        dispatch(dispatchData);
        setLocalStorage(dispatchData.payload);
        setUsername('');
        setPassword('');

        router.push('/');
      } else {
        message.error(data?.message || 'Something wrong');
      }

      dispatch(setLoading(false));
    });
  };

  useEffect(() => {
    console.log(storage, { localstorage });
  }, [storage]);

  return (
    <div className="flex content-center w-full min-h-screen bg-blue-900">
      <div className="m-auto flex flex-col items-center" style={{ width: 410 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
        <div className="w-full">
          <input
            className="w-full text-lg bg-transparent py-2 text-white"
            value={username}
            onChange={({ target }) => {
              setUsername(target.value);
            }}
            style={{
              outline: 'none',
              borderBottom: '1px solid #DDDFE29E',
              caretColor: 'white',
            }}
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full text-lg bg-transparent py-2 text-white"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
            style={{
              outline: 'none',
              borderBottom: '1px solid #DDDFE29E',
              caretColor: 'white',
            }}
            placeholder="Password"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-md bg-blue-700 h-12 mt-8 text-white text-lg font-medium"
          style={{ outline: 'none' }}
          onClick={() => {
            if (storage.loading) return;
            handleLogin(username, password);
          }}
        >
          {storage.loading ? 'Loading...' : 'SIGN IN'}
        </button>
        <button
          className="w-full rounded-md bg-green-700 h-12 mt-8 text-white text-lg font-medium"
          style={{ outline: 'none' }}
          onClick={handleClick}
        >
          JOIN
        </button>
        <Link href="/forget-password">
          <a className={styles.forgottenpassword}>Forgot Password?</a>
        </Link>
      </div>
    </div>
  );
}
