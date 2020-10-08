import styles from './styles/header.module.scss';
import { useRouter } from 'next/router';

export default function Header({ withoutSearch }) {
  return (
    <div className={styles.header}>
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
