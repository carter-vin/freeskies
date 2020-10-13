import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { message } from 'antd';
import API from 'configs/API';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// Hook
import useLocalStorage from 'helpers/hooks/useLocalStorage';

// Styles
import styles from './styles/login.module.css';
import { LoginContext } from './storage/LoginContext';

// Actions
import { setLoading, setAuthorization } from './actions';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

        message.success('Authentication successful');

        router.push('/timeline');
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
      <div className="m-auto flex flex-col items-center" style={{ width: 300 }}>
        <img src="/logo.png" className="mb-32" style={{ height: 55 }} />
        <div className="w-full">
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #DDDFE29E',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#ffffff69', marginRight: 10 }}>
              <UserOutlined style={{ fontSize: 18 }} />
            </span>
            <input
              className="w-full text-lg bg-transparent py-2 text-white"
              value={username}
              onChange={({ target }) => {
                setUsername(target.value);
              }}
              style={{
                outline: 'none',
                caretColor: 'white',
              }}
              placeholder="Username"
            />
          </div>

          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid #DDDFE29E',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#ffffff69', marginRight: 10 }}>
              <LockOutlined style={{ fontSize: 18 }} />
            </span>
            <input
              type="password"
              className="w-full text-lg bg-transparent py-2 text-white"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              style={{
                outline: 'none',
                caretColor: 'white',
              }}
              placeholder="Password"
            />
          </div>
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
