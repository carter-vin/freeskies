import { LikeFilled, MessageFilled } from '@ant-design/icons';
import styles from './styles/timeline-post.module.scss';
import classnames from 'classnames';

// temporary data
const image1 = [0];
const image2 = [0, 0];
const image3 = [0, 0, 0];

export default function TimelinePosts() {
  return (
    <div className={styles.activity_content}>
      {[0, 0, 0, 0].map((item, index) => (
        <div className={styles.post} key={index}>
          <div className={styles.post_header}>
            <div className={styles.avatar}>
              <img
                src={`https://api.adorable.io/avatars/50/adorable${
                  index + 5
                }.png`}
                alt="avatar"
              />
            </div>
            <div className={styles.user_info}>
              <p className={styles.user_name}>John Doe</p>
              <p className={styles.date}>3 jun, 2020 - 10:30 AM</p>
            </div>
          </div>
          <div className={styles.post_content}>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div
              className={classnames(styles.image, {
                [styles.grid_2]: index === 1,
                [styles.grid_3]: index === 2,
              })}
            >
              {(index === 0 || index > 2) && (
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              )}

              {index === 1 && (
                <>
                  <div
                    className={classnames(styles.image_item, styles.main_photo)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </>
              )}

              {index === 2 && (
                <>
                  <div
                    className={classnames(styles.image_item, styles.main_photo)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={styles.comments}>
            <div className={styles.comment_item}>
              <div className={styles.avatar}>
                <img
                  src={`https://api.adorable.io/avatars/50/adorable${
                    index + 5
                  }.png`}
                  alt="avatar"
                />
              </div>
              <div className={styles.message}>message</div>
            </div>
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
      ))}
    </div>
  );
}