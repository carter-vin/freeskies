import { LikeFilled, MessageFilled } from '@ant-design/icons';
import styles from './styles/feed-post.module.scss';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import Avatar from '../../components/common/Avatar';

export default function FeedPosts({ user }) {
  const router = useRouter();

  const goToActivity = () => {
    router.push('/activity');
  };

  return (
    <div className={styles.activity_content}>
      <div className={styles.section_title}>
        <p>Activities</p>
        <Button type="link" onClick={goToActivity}>
          All activities
        </Button>
      </div>
      {user?.recentActivity.map((item, index) => (
        <div className={styles.post} key={index}>
          <div className={styles.post_header}>
            <div className={styles.avatar}>
              <Avatar
                size={50}
                url={user?.profilePhoto}
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
              {item.type === 'Photo' && item.caption}
              {item.type === 'Comment' && item.text}
            </p>
            {item.type === 'Photo' && (
              <div className={styles.image}>
                <img src={`https://www.freeskies.com/static/${item.src}`} alt="" />
              </div>
            )}
          </div>
          {item.type === 'Photo' && (
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
          )}
        </div>
      ))}
    </div>
  );
}
