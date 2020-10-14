import { Input, Popover } from 'antd';
import styles from './styles/comment.module.scss';
import classnames from 'classnames';
import { useState } from 'react';
import RatingSlide from '../forms/rating/RatingSlide';
import { StarFilled } from '@ant-design/icons';

const { TextArea } = Input;

function CommentItem({ message, mine }) {
  const [rateVisible, setRateVisible] = useState(false);

  const handleRateVisibleToggle = () => setRateVisible((state) => !state);

  return (
    <div
      className={classnames(styles.comment_item, {
        [styles.not_mine]: !mine,
      })}
    >
      <div className={styles.avatar}>
        <img
          src={`https://api.adorable.io/avatars/50/adorable.png`}
          alt="avatar"
        />

        <Popover
          content={() => <RatingSlide dark size="medium" />}
          // title="Title"
          placement="right"
          trigger="click"
          visible={rateVisible}
          onVisibleChange={handleRateVisibleToggle}
        >
          <div className={styles.rate}>
            <span className={styles.icon}>
              <StarFilled />
            </span>
            <span className={styles.rate_text}>4.5</span>
          </div>
        </Popover>
      </div>
      <div className={styles.message_container}>
        <div className={styles.message}>
          <span className={styles.author}>John Doe</span>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default function Comments({ show, index }) {
  // if (show !== index) return null;
  return (
    <div className={styles.comments}>
      <div className={styles.comments_wrapper}>
        <CommentItem
          mine
          message="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s"
        />

        <CommentItem message="message" />
      </div>

      <div className={styles.comment_box}>
        <div className={styles.avatar}>
          <img
            src={`https://api.adorable.io/avatars/50/adorable.png`}
            alt="avatar"
          />
        </div>
        <div className={styles.input}>
          <TextArea placeholder="What do you mean?" rows={2} />
        </div>
      </div>
    </div>
  );
}
