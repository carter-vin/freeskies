import { LikeFilled, MessageFilled } from '@ant-design/icons';
import styles from './styles/feed-post.module.scss';
import { Button } from 'antd';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Avatar from '../../components/common/Avatar';
import TimelinePosts from '../../components/timeline/TimelinePosts'

export default function FeedPosts({ user, onRatePost, onUpdateTimeline }) {
  const router = useRouter();
  const goToActivity = () => {
    router.push('/activity');
  };

  // const profileUrl = user !== null && user !== undefined ? `https://freeskies.com/static/${user.profilePhoto?.src}` : null
  const profileFeed = user !== null && user !== undefined ? user?.recentActivity.map(item => { item.account = user; return item }) : []

  return (
    <div className={styles.activity_content}>
      <div className={styles.section_title}>
        <p>Activities</p>
        <Button type="link" onClick={goToActivity}>
          All activities
        </Button>
      </div>
      {profileFeed.length !== 0 && (
        <TimelinePosts
          data={profileFeed}
          onRatePost={onRatePost}
          onUpdateTimeline={onUpdateTimeline}
        />
      )}

      {/* {user?.recentActivity.map((item, index) => (
        <div className={styles.post} key={index}>
          <div className={styles.post_header}>
            <div className={styles.avatar}>
              <Avatar
                size={50}
                url={profileUrl}
                text={user?.username}
              />
            </div>
            <div className={styles.user_info}>
              <p className={styles.user_name}>{user.firstName} {user.lastName}</p>
              <p className={styles.date}>3 jun, 2020 - 10:30 AM</p>
            </div>
          </div>
          <div className={styles.post_content}>
            <p className={styles.description}>
              {item.text}
            </p>
            {item.images.map((image) => (
              <div
                className={classnames(styles.image, {
                  [styles.grid_2]: index === 1,
                  [styles.grid_3]: index === 2,
                  [styles.grid_4]: index === 3,
                })}
              >
                <div className={styles.image}>
                  <img src={`https://freeskies.com/static/${image.src}`} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.post_actions}>
            <div>
              <LikeFilled />
              <span>Like</span>
            </div>
            <div>
              <MessageFilled />
              <span>Comment</span>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
