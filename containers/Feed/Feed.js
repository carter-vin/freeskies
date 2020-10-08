import Header from 'components/header/Header';
import FeedPosts from 'components/profile/FeedPosts';
import styles from './styles/feed.module.scss';

export default function Feed() {
  return (
    <>
      <Header />
      <div className={styles.feed}>
        <div className={styles.feed_container}>
          <FeedPosts />
        </div>
      </div>
    </>
  );
}
