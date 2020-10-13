import { LikeFilled, MessageFilled } from '@ant-design/icons';
import styles from './styles/actions.module.scss';

export default function Actions({ actions, index }) {
  return (
    <div className={styles.post_actions}>
      <div>
        <LikeFilled />
        <p>Like</p>
      </div>
      <div onClick={() => actions.toggleCommentShow(index)}>
        <MessageFilled />
        <p>
          Comment <span>(2)</span>
        </p>
      </div>
    </div>
  );
}
