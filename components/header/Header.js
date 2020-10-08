import styles from './styles/header.module.scss';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.search}>
          <input name="search" placeholder="Search ..." />
        </div>
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
      </div>
    </div>
  );
}
