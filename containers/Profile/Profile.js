import styles from './styles/profile.module.scss';
import classnames from 'classnames';
import { StarFilled } from '@ant-design/icons';
import { Button } from 'antd';

export default function Profile() {
  return (
    <div>
      <div className={classnames(styles.container, styles.user_profile)}>
        <div
          className={styles.cover}
          style={{
            backgroundImage:
              'url(https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg)',
          }}
        ></div>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img
              src="https://api.adorable.io/avatars/128/adorable.png"
              alt="avatar"
            />
          </div>

          <div className={styles.user_info}>
            <p className={styles.fullname}>
              <span>John Doe</span>
              <span className={styles.rating}>
                <StarFilled className={styles.rating_icon} /> <span>4.8</span>
              </span>
            </p>
            <p className={styles.followers}>232 following / 130 followers</p>
          </div>

          <div className={styles.user_actions}>
            <Button type="primary">Follow</Button>
            <Button type="primary">Edit porfile</Button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
