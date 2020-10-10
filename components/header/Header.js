import styles from './styles/header.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import _ from 'lodash';

export default function Header({ withoutSearch }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    try {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    } catch (error) {
      // catch windiow === undefined error
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      window.addEventListener('scroll', _.throttle(handleScroll, 250));
    } catch (error) {
      // catch windiow === undefined error
      console.log(error);
    }
    return () => {
      // unmount action
      try {
        window.removeEventListener('scroll', handleScroll);
      } catch (error) {
        // catch windiow === undefined error
        console.log(error);
      }
    };
  }, [prevScrollPos]);

  return (
    <>
      <div
        className={classnames(styles.header, {
          [styles.header_hidden]: !visible,
        })}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </div>
          <div className={styles.search}>
            {!withoutSearch && (
              <>
                <input name="search" placeholder="Search ..." />

                <UserProfile />
              </>
            )}
          </div>
          <UserProfile />
        </div>
      </div>
      <div className={styles.additional_header} />
    </>
  );
}

function UserProfile() {
  const router = useRouter();
  return (
    <div
      className={styles.profile}
      onClick={() => {
        router.push('/profile');
      }}
    >
      <div className={styles.avatar}>
        <img
          src="https://api.adorable.io/avatars/128/adorable.png"
          alt="avatar"
        />
      </div>
      <span className={styles.name}>John</span>
    </div>
  );
}
