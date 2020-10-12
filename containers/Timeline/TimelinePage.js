import Header from 'components/header/Header';
import TimelinePosts from 'components/timeline/TimelinePosts';
import PostingPost from 'components/profile/PostingPost';
import styles from './styles/timeline.module.scss';

export default function TimelinePage() {
  return (
    <>
      <Header />
      <div className={styles.timeline}>
        <div className={styles.feed_container}>
          <PostingPost />
          <TimelinePosts />
        </div>
      </div>
    </>
  );
}
