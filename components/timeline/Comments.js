import styles from './styles/comment.module.scss';
import classnames from 'classnames';

export default function Comments({ show }) {
  if (!show) return null;
  return (
    <div className={styles.comments}>
      <div className={styles.comment_item}>
        <div className={styles.avatar}>
          <img
            src={`https://api.adorable.io/avatars/50/adorable.png`}
            alt="avatar"
          />
        </div>
        <div className={styles.message_container}>
          <div className={styles.message}>
            <span className={styles.author}>John Doe</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>

      <div className={classnames(styles.comment_item, styles.not_mine)}>
        <div className={styles.avatar}>
          <img
            src={`https://api.adorable.io/avatars/50/adorable2.png`}
            alt="avatar"
          />
        </div>
        <div className={styles.message}>
          <span className={styles.author}>John Doe</span>
          <p>message</p>
        </div>
      </div>
    </div>
  );
}
