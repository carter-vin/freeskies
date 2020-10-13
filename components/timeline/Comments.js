import styles from './styles/comment.module.scss';

export default function Comments() {
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
    </div>
  );
}
