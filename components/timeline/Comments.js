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
        <div className={styles.message}>message</div>
      </div>

      <div className={classnames(styles.comment_item, styles.not_mine)}>
        <div className={styles.avatar}>
          <img
            src={`https://api.adorable.io/avatars/50/adorable2.png`}
            alt="avatar"
          />
        </div>
        <div className={styles.message}>message</div>
      </div>
    </div>
  );
}
