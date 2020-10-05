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

      <div
        className={classnames(
          styles.container,
          styles.content,
          styles.container_bg
        )}
      >
        <div className={styles.profile_contents}>
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Recent photos</p>
              <Button type="link">All photos</Button>
            </div>

            <div className={styles.photos}>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Friends</p>
              <Button type="link">All friends</Button>
            </div>
          </div>
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Rated</p>
              <Button type="link">My rates</Button>
            </div>
          </div>
        </div>
        <div className={styles.activity}>Activity</div>
      </div>
    </div>
  );
}
