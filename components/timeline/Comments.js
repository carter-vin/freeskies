import { Input, Popover } from 'antd';
import styles from './styles/comment.module.scss';
import classnames from 'classnames';
import { useState } from 'react';
import { RatingSlide } from 'components/forms';
import { StarFilled } from '@ant-design/icons';
import TrimText from 'components/common/TrimText';
import Avatar from '../common/Avatar';

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
        <Avatar
          url={mine ? 'https://api.adorable.io/avatars/50/adorable.png' : null}
          size={35}
          text="John"
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
          <p>
            <TrimText limit={110}>{message}</TrimText>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Comments({ show, index, modalMode = false }) {
  // if (show !== index) return null;
  const [commentText, setCommentText] = useState('');
  const [commentList, setCommentList] = useState([
    {
      mine: true,
      message: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s`,
    },
    { message: 'message' },
  ]);

  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      console.log('object');
      setCommentList((comments) => [
        ...comments,
        {
          mine: true,
          message: commentText,
        },
      ]);
      setCommentText('');
    }
  };

  const handleChangeText = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <div
      className={classnames(styles.comments, {
        [styles.modal_mode]: modalMode,
      })}
    >
      <div className={styles.comments_wrapper}>
        {commentList.map((item, index) => (
          <CommentItem mine={item.mine} message={item.message} />
        ))}
      </div>

      <div className={styles.comment_box}>
        <div className={styles.avatar}>
          <img
            src={`https://api.adorable.io/avatars/50/adorable.png`}
            alt="avatar"
          />
        </div>
        <div className={styles.input}>
          <TextArea
            value={commentText}
            placeholder="What do you mean?"
            rows={2}
            onChange={handleChangeText}
            onKeyDown={handleEnterKey}
          />
        </div>
      </div>
    </div>
  );
}
